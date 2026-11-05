#!/usr/bin/env python3
"""Monta o banco de questões oficiais do app a partir das revisões.

Uso: python3 oab/tools/montar-oficiais.py <pasta-de-trabalho> <lote> [<lote> ...]

<pasta-de-trabalho> tem chunks/<lote>.json (questões oficiais e gabarito) e out/<lote>.json
(revisão: status e explicações). Só entram as questões com status "valida" dos lotes
informados (os que já passaram pela análise e pela contestação). Gera, em oab/data/oficiais/:
  <materia>.json  [{id, e, n, t, q, a, r, ex}]
  indice.json     {total, porMateria, exames, excluidas, atualizado}
Rodar de novo é seguro: os arquivos são refeitos a partir de todos os lotes informados
somados aos já existentes no índice."""
import json, os, sys, datetime

raiz = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
destino = os.path.join(raiz, 'data', 'oficiais')
os.makedirs(destino, exist_ok=True)
trab, lotes = sys.argv[1], sys.argv[2:]

indice_path = os.path.join(destino, 'indice.json')
indice = json.load(open(indice_path)) if os.path.exists(indice_path) else {}
lotes = sorted(set(lotes) | set(indice.get('lotes', [])))

por_materia, excluidas = {}, {'desatualizada': 0, 'duvidosa': 0}
for lote in lotes:
    materia = lote.rsplit('-', 1)[0]
    entrada = {q['id']: q for q in json.load(open(f'{trab}/chunks/{lote}.json'))}
    for s in json.load(open(f'{trab}/out/{lote}.json')):
        q = entrada.get(s['id'])
        if not q:
            continue
        if s.get('status') != 'valida':
            excluidas[s.get('status', 'duvidosa')] = excluidas.get(s.get('status', 'duvidosa'), 0) + 1
            continue
        r = 'ABCD'.index(q['gabarito_oficial'])
        ex = s['explicacoes']
        if len(ex) != 4 or not ex[r].startswith('Correta'):
            excluidas['duvidosa'] += 1
            continue
        por_materia.setdefault(materia, []).append({
            'id': q['id'], 'e': q['exame'], 'n': q['numero'], 't': q.get('tema') or '',
            'q': q['enunciado'], 'a': q['alternativas'], 'r': r, 'ex': ex,
        })

exames = set()
for materia, qs in por_materia.items():
    qs.sort(key=lambda x: x['id'])
    exames.update(q['e'] for q in qs)
    with open(os.path.join(destino, f'{materia}.json'), 'w') as f:
        json.dump(qs, f, ensure_ascii=False, separators=(',', ':'))

def ordem_exame(nome):
    """'47º Exame' -> 47; 'XXIV Exame' -> 24 (romanos); 'Exame 2010.2' -> 2 (os dois primeiros da FGV)."""
    if nome.startswith('Exame 20'):
        return int(nome.rsplit('.', 1)[-1])
    num = ''.join(ch for ch in nome if ch.isdigit())
    if num:
        return int(num)
    valores = {'I': 1, 'V': 5, 'X': 10, 'L': 50}
    romano = nome.split()[0].upper()
    total = 0
    for i, ch in enumerate(romano):
        v = valores.get(ch, 0)
        total += -v if i + 1 < len(romano) and valores.get(romano[i + 1], 0) > v else v
    return total

indice = {
    'total': sum(len(v) for v in por_materia.values()),
    'porMateria': {k: len(v) for k, v in sorted(por_materia.items())},
    'exames': sorted(exames, key=ordem_exame),
    'excluidas': excluidas,
    'lotes': lotes,
    'atualizado': datetime.date.today().isoformat(),
}
json.dump(indice, open(indice_path, 'w'), ensure_ascii=False, indent=1)
print(f"{indice['total']} questões oficiais válidas em {len(por_materia)} matérias "
      f"({len(lotes)} lotes); fora: {excluidas}")
