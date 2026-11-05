#!/usr/bin/env python3
"""Prepara os lotes de questões oficiais para revisão.

Uso: python3 oab/tools/oficiais/preparar.py <clone de github.com/labgruta/simuladosoab>
Lê os q-<materia>.json (questões dos cadernos tipo 1 e gabaritos definitivos da OAB/FGV,
sem as anuladas) e grava chunks/<materia>-NN.json com 40 questões cada, da prova mais
recente para a mais antiga. As revisões ficam em out/<lote>.json (ver checar.py) e o
banco do app é gerado por oab/tools/montar-oficiais.py."""
import json, glob, os, sys
origem = sys.argv[1]
base = os.path.dirname(os.path.abspath(__file__))
os.makedirs(f'{base}/chunks', exist_ok=True)
mapa = {'proc_civil': 'processocivil', 'proc_penal': 'processopenal', 'proc_trabalho': 'processotrabalho', 'consumidor': 'cdc'}
meta = json.load(open(f'{origem}/meta.json'))
num = lambda q: int(q['id'].split('-')[0]) if q['id'].split('-')[0].isdigit() else 0
lotes = []
for f in sorted(glob.glob(f'{origem}/q-*.json')):
    src = os.path.basename(f)[2:-5]; mid = mapa.get(src, src)
    temas = {t['id']: t['nome'] for t in meta['temas'].get(src, [])}
    qs = sorted(json.load(open(f)), key=lambda q: (-num(q), q['n']))
    for i in range(0, len(qs), 40):
        nome = f'{mid}-{i // 40 + 1:02d}'
        json.dump([{'id': q['id'], 'exame': q['e'], 'numero': q['n'], 'tema': temas.get(q.get('t'), q.get('t')),
                    'enunciado': q['q'], 'alternativas': q['a'], 'gabarito_oficial': 'ABCD'[q['r']]} for q in qs[i:i + 40]],
                  open(f'{base}/chunks/{nome}.json', 'w'), ensure_ascii=False, indent=1)
        lotes.append(nome)
print(f'{len(lotes)} lotes em {base}/chunks')
