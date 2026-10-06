#!/usr/bin/env python3
"""Liga ao app os lotes de aulas já revisados.

Uso: python3 oab/tools/producao/integrar.py <lote> [<lote> ...]
Cada lote (ex.: civil-03) tem data/aulas-<lote>.js e data/questoes-<lote>.js. Os lotes informados
são somados a prontos.txt, e o index.html e o sw.js são reescritos com a lista completa de
scripts: base fixa, grades, aulas, questões, 2ª fase, plano e app (nessa ordem)."""
import os, re, sys

raiz = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))  # .../oab
prontos_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'prontos.txt')
prontos = set(open(prontos_path).read().split()) if os.path.exists(prontos_path) else set()
for lote in sys.argv[1:]:
    for pref in ('aulas', 'questoes'):
        if not os.path.exists(os.path.join(raiz, 'data', f'{pref}-{lote}.js')):
            sys.exit(f'faltando data/{pref}-{lote}.js')
    prontos.add(lote)
open(prontos_path, 'w').write('\n'.join(sorted(prontos)) + '\n')

def chave(nome):  # ordena civil-2 antes de civil-10
    return [int(p) if p.isdigit() else p for p in re.split(r'(\d+)', nome)]

lotes = sorted(prontos, key=chave)
scripts = (
    ['data/materias.js', 'data/materias2.js', 'data/ementa.js',
     'data/ementa-pesadas-1.js', 'data/ementa-pesadas-2.js', 'data/ementa-pesadas-3.js',
     'data/aulas-a.js', 'data/aulas-b.js', 'data/aulas-penal-1.js', 'data/aulas-penal-2.js',
     'data/aulas-pp-1.js', 'data/aulas-pp-2.js']
    + [f'data/aulas-{l}.js' for l in lotes]
    + ['data/questoes.js', 'data/questoes2.js', 'data/questoes3.js', 'data/questoes4.js',
       'data/questoes-a.js', 'data/questoes-b.js']
    + [f'data/questoes-{l}.js' for l in lotes]
    + ['data/segunda-fase.js', 'data/casos-2fase-a.js', 'data/casos-2fase-b.js',
       'data/plano-dados.js', 'plano.js', 'app.js']
)
for s in scripts:
    if not os.path.exists(os.path.join(raiz, s)):
        sys.exit(f'arquivo inexistente: {s}')

idx_path = os.path.join(raiz, 'index.html')
idx = open(idx_path).read()
bloco = '\n'.join(f'  <script src="{s}"></script>' for s in scripts)
idx = re.sub(r'(?:  <script src="[^"]+"></script>\n)+', bloco + '\n', idx, count=1)
open(idx_path, 'w').write(idx)

sw_path = os.path.join(raiz, 'sw.js')
sw = open(sw_path).read()
versao = int(re.search(r"aprova-oab-v(\d+)", sw).group(1)) + 1
sw = re.sub(r"aprova-oab-v\d+", f'aprova-oab-v{versao}', sw)
arqs = ["'./'", "'index.html'", "'styles.css'", "'manifest.json'", "'icon.svg'"] + [f"'{s}'" for s in scripts]
sw = re.sub(r"const ARQS = \[[^\]]*\];", 'const ARQS = [' + ', '.join(arqs) + '];', sw, flags=re.S)
open(sw_path, 'w').write(sw)
print(f'{len(lotes)} lote(s) no app; {len(scripts)} scripts; cache v{versao}')
