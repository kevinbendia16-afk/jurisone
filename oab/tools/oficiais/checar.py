#!/usr/bin/env python3
"""Confere um arquivo de saída da revisão de questões oficiais. Uso: python3 checar.py <nome-do-lote>"""
import json, sys, os
base = os.path.dirname(os.path.abspath(__file__))
nome = sys.argv[1]
entrada = {q['id']: q for q in json.load(open(f'{base}/chunks/{nome}.json'))}
try:
    saida = json.load(open(f'{base}/out/{nome}.json'))
except Exception as e:
    sys.exit(f'ERRO: out/{nome}.json não abre como JSON: {e}')
erros = []
vistos = set()
for s in saida:
    i = s.get('id'); vistos.add(i)
    if i not in entrada: erros.append(f'{i}: id não existe no lote'); continue
    st = s.get('status')
    if st not in ('valida', 'desatualizada', 'duvidosa'): erros.append(f'{i}: status inválido {st!r}')
    if st == 'valida':
        ex = s.get('explicacoes')
        g = 'ABCD'.index(entrada[i]['gabarito_oficial'])
        if not isinstance(ex, list) or len(ex) != 4 or not all(isinstance(x, str) and x.strip() for x in ex):
            erros.append(f'{i}: precisa de 4 explicações'); continue
        for k, x in enumerate(ex):
            ok = x.startswith('Correta')
            if not (x.startswith('Correta') or x.startswith('Errada')): erros.append(f'{i}: explicação {k+1} deve começar com "Correta" ou "Errada"')
            elif ok != (k == g): erros.append(f'{i}: explicação {k+1} diz "{x.split(".")[0]}" mas o gabarito oficial é {entrada[i]["gabarito_oficial"]}')
    elif not (s.get('motivo') or '').strip():
        erros.append(f'{i}: status {st} exige "motivo"')
faltam = [i for i in entrada if i not in vistos]
if faltam: erros.append(f'faltam {len(faltam)} questões: {", ".join(faltam[:10])}')
from collections import Counter
c = Counter(s.get('status') for s in saida)
print(f'{nome}: {len(saida)}/{len(entrada)} questões | ' + ', '.join(f'{k}: {v}' for k, v in c.items()))
if erros: print('\n'.join('- ' + e for e in erros)); sys.exit(1)
print('OK')
