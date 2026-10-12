# Estado (atualizado 07/10 ~00:05 UTC)
Limite de uso estourou 2x (reset 17:10 e 23:50 UTC). Prioridade: auditoria primeiro, depois produção e contestação.
Feito e publicado: Constitucional, Ética, Penal, Civil, Processo Civil (processocivil-01..20 + panoramas prazos,recursos,tutelas em materias.js e procedimento em materias2.js; artifact v12). AGORA PROCESSO PENAL (12 lotes processopenal-* + panoramas prisoes,acaopenal,procedimento em aulas-pp-1/2 e materias.js). Depois: Trabalho, Proc. Trabalho, Administrativo, Tributário, Empresarial, leves.
VERIFICAR NA CORREÇÃO (citações de memória): PCivil panoramas - prazos: REsp 1.708.348, EAREsp 1.663.952, Tema 1.081; tutelas: REsp 1.763.736/RJ, 1.760.966/SP, 1.797.365/RS, ADI 5.492, Tema 106. Lote 12 remessa: art. 17-C §3º Lei 8.429.
- Auditoria item por item (scratchpad/auditoria-total.js): woa1kfgqc (wf_15830aa6-b84, onda1), wjne5xn4u (wf_0b8829da-a27, onda2), wgvrl616b (wf_7cd26171-01b, onda3), wrziaf7wt (wf_78d06d25-959, onda4), wyyyd14oh (wf_33688c1b-ed6, onda5). Args: scratchpad/auditoria-onda{1..5}.json
  -> ao terminar: python3 oab/tools/auditoria/aplicar.py tasks/<id>.output ; depois relatório.
- Auditoria geral: wd4px06eo (wf_bf8edef4-571, scratchpad/auditoria-geral.js)
A FAZER depois:
- Produção (script novo com ESTILO simples + ADI 7227): etica-02, 03, 11 só revisar (redigido); etica-01,04,06,07,08,09,10,12,13 redigir. etica-05 pronto (estilo antigo).
  ATENÇÃO: aulas-etica-03/questoes-etica-03 et365 diz que PM pode advogar em causa própria -> ERRADO (ADI 7227). Revisor tem de corrigir.
- Contestação oficiais: retomar wf_b3688107-893, wf_1df51839-687, wf_7d4558aa-d0a, wf_f7e6060d-ba1 (scratchpad/oficiais-oab.js, args em retomada.json contestar pares). Prompt mudou (ADI 7227) -> cache não vale para os novos; os concluídos já gravaram out/*.json.
- Passe de simplificação das 105 aulas antigas (pedido do usuário: detalhado mas fácil), depois de aplicar a auditoria.
- Fatos confirmados: ADI 7227 (STF derrubou art. 28 §§3º/4º); Tema 732; art. 20 jornada 8h/40h.
