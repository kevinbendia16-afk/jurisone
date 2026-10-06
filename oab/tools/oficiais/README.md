# Questões oficiais: preparação e revisão

1. `python3 preparar.py <clone de github.com/labgruta/simuladosoab>` gera `chunks/` (lotes de 40 questões; não versionado, é regenerável).
2. Cada lote passa por duas revisões, que gravam `out/<lote>.json`:
   - **análise**: o gabarito oficial ainda vale pela lei de hoje? Status `valida` (com a explicação das 4 alternativas), `desatualizada` ou `duvidosa`, com o motivo;
   - **contestação**: um segundo revisor tenta provar que cada questão válida ficou desatualizada.
3. `python3 checar.py <lote>` confere o formato de `out/<lote>.json`.
4. `python3 ../montar-oficiais.py <esta pasta> <lotes...>` gera `oab/data/oficiais/` para o app.

`retomada.json` lista os lotes que ainda faltam: `contestar` (já analisados) e `analisar` (ainda sem análise).
