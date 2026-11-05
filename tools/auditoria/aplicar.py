#!/usr/bin/env python3
"""Aplica as correções da auditoria item por item que o segundo professor confirmou.

Uso: python3 oab/tools/auditoria/aplicar.py <resultado.json> [...]
Cada arquivo é a saída de um fluxo de auditoria (lista de grupos com correcoes e decisoes).
Só entram correções com aplicar = true. Cada uma é aplicada por substituição exata dentro de
um único texto entre aspas simples; se o trecho não existir, se repetir ou cruzar aspas, a
correção é pulada e registrada. Depois de mexer num arquivo, o validador do app precisa passar;
se não passar, o arquivo volta ao original. O registro sai em oab/tools/auditoria/aplicadas.json."""
import json, os, subprocess, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))  # .../oab
REGISTRO = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'aplicadas.json')


def limpar(t):
    """Texto novo pronto para ficar entre aspas simples: uma linha, sem aspas simples nem barra."""
    t = ' '.join(t.replace('\\', '/').split())
    return t.replace("'", '’')


def literal(src, ini, fim):
    """Limites do texto entre aspas simples que contém src[ini:fim], ou None se cruzar aspas."""
    a = src.rfind("'", 0, ini)
    b = src.find("'", fim)
    if a < 0 or b < 0 or "'" in src[ini:fim] or '\n' in src[a:b]:
        return None
    return a, b


def aplicar(src, c, texto):
    atual = c['trecho_atual']
    n = src.count(atual)
    if n != 1:
        return None, f'trecho aparece {n} vez(es)'
    ini = src.index(atual)
    lim = literal(src, ini, ini + len(atual))
    if not lim:
        return None, 'trecho não está dentro de um único texto entre aspas'
    if c['acao'] == 'substituir':
        return src[:ini] + limpar(texto) + src[ini + len(atual):], None
    # acrescentar: o trecho tem de ser o texto inteiro de um elemento da lista
    a, b = lim
    if src[a + 1:b].strip() != atual.strip():
        return None, 'acréscimo: o trecho não é um parágrafo/item completo'
    linha = src.rfind('\n', 0, a) + 1
    recuo = src[linha:a] if src[linha:a].strip() == '' else '        '
    novo = f",\n{recuo}'{limpar(texto)}'"
    return src[:b + 1] + novo + src[b + 1:], None


def erros_validador():
    r = subprocess.run(['node', os.path.join(RAIZ, 'tools', 'validar.js')], capture_output=True, text=True)
    return {l[2:] for l in r.stdout.splitlines() if l.startswith('- ')}


def valido(caminho, base):
    """O arquivo continua sendo JavaScript válido e o validador não ganhou problemas novos
    (outros agentes podem estar escrevendo outros arquivos: só contam os problemas novos)."""
    if subprocess.run(['node', '--check', caminho], capture_output=True).returncode != 0:
        return False, 'erro de sintaxe'
    novos = erros_validador() - base
    return not novos, '; '.join(sorted(novos))[:1000]


registro = json.load(open(REGISTRO)) if os.path.exists(REGISTRO) else []
feitos = {(x['grupo'], x['n']) for x in registro if x['status'] == 'aplicada'}
por_arquivo = {}
for caminho in sys.argv[1:]:
    dados = json.load(open(caminho))
    grupos = dados.get('result', dados) if isinstance(dados, dict) else dados
    if isinstance(grupos, str):
        grupos = json.loads(grupos)
    for g in grupos:
        if not g or g.get('falhou') or not g.get('correcoes'):
            continue
        dec = {d['n']: d for d in (g.get('decisoes') or [])}
        for i, c in enumerate(g['correcoes'], 1):
            d = dec.get(i)
            item = {'grupo': g['grupo'], 'n': i, 'arquivo': g['arquivo'], 'item': c['item'], 'acao': c['acao'],
                    'gravidade': c['gravidade'], 'tipo': c['tipo'], 'problema': c['problema']}
            if (g['grupo'], i) in feitos:
                continue
            if not d:
                registro.append({**item, 'status': 'sem_confirmacao'})
                continue
            if not d['aplicar']:
                registro.append({**item, 'status': 'recusada', 'motivo': d['motivo']})
                continue
            texto = d.get('texto_final') or c['texto_novo']
            por_arquivo.setdefault(g['arquivo'], []).append((item, c, texto, d['motivo']))

base = erros_validador()
for arq, lista in por_arquivo.items():
    caminho = os.path.join(RAIZ, arq)
    src = open(caminho).read()
    n = 0
    for item, c, texto, motivo in lista:  # uma a uma: a que quebrar o arquivo é desfeita sozinha
        novo, erro = aplicar(src, c, texto)
        if erro:
            registro.append({**item, 'status': 'pulada', 'motivo': erro, 'trecho_atual': c['trecho_atual']})
            continue
        open(caminho, 'w').write(novo)
        ok, saida = valido(caminho, base)
        if not ok:
            open(caminho, 'w').write(src)
            registro.append({**item, 'status': 'revertida', 'motivo': saida})
            continue
        src = novo
        n += 1
        registro.append({**item, 'status': 'aplicada', 'texto': limpar(texto), 'confirmacao': motivo})
    print(f'{arq}: {n} de {len(lista)} correção(ões) aplicada(s)')

json.dump(registro, open(REGISTRO, 'w'), ensure_ascii=False, indent=1)
cont = {}
for x in registro:
    cont[x['status']] = cont.get(x['status'], 0) + 1
print('registro:', cont)
