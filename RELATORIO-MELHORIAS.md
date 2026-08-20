# JurisOne — Relatório de Melhorias

Análise completa do sistema, do ponto de vista da rotina real de um advogado. Marca o que já
funciona, o que falta, e os detalhes pequenos que facilitam o dia a dia.

Legenda: ✅ pronto · 🔧 feito agora nesta rodada · 🟡 falta (prioridade média) · 🔴 falta (importante) · 💡 detalhe pequeno

---

## 1. Financeiro
- 🔧 Marcar como **pago** com 1 clique, **editar** valor/data/status, **excluir**, **filtros** (tipo, status, mês) e **busca**.
- 🔧 **Parcelamento de honorários**: botão "Parcelar" gera N parcelas mensais (soma exata em centavos, vencimentos automáticos, marca parcela X/N).
- 🔧 **Baixa parcial**: botão "Receber" registra valor parcial → status "parcial" e some quando quita; "Quitar" fecha de uma vez. Cards de resumo consideram o recebido parcial.
- 🟡 **Recorrência** de despesas fixas (aluguel, software) — lançar 1x e repetir todo mês.
- 🟡 **Juros/multa automáticos** em atraso; **desconto** para pagamento antecipado.
- 🟡 **Formas de pagamento** (Pix, boleto, cartão, dinheiro) e **conta bancária**.
- 🟡 **Fluxo de caixa** (saldo acumulado por período) e **DRE** simples (receita − despesa = resultado).
- 💡 Marcar automaticamente como **"atrasado"** quando passa do vencimento e continua aberto.
- 💡 Comprovante/recibo em PDF ao dar baixa.

## 2. Clientes
- ✅ CRM com PF/PJ, visão 360º, importar/exportar CSV, aba WhatsApp.
- 🔴 **Editar/excluir** cliente (hoje só cria e visualiza).
- 🟡 Campos ricos: RG, nascimento, endereço, profissão, estado civil, **tags**, origem/indicação.
- 🟡 **Anotações** e **histórico de atendimentos** dentro do cliente (as abas existem, faltam ações).
- 💡 **Máscara** de CPF/CNPJ e telefone ao digitar; validação de CPF/CNPJ real.
- 💡 Botão "ligar" e "e-mail" clicáveis no perfil.

## 3. Processos
- ✅ Cadastro, visão 360º, movimentações manuais, sincronização DataJud (botão).
- 🔴 **Editar/excluir** processo.
- 🔴 **Sincronização automática agendada** do DataJud (hoje é manual, 1 clique por processo).
- 🟡 Partes (polo ativo/passivo, advogado contrário), vara, comarca, órgão.
- 🟡 **Anexar documentos/petições** ao processo (GED).
- 💡 Cores por status; alerta visual quando há novidade na sincronização.

## 4. Prazos
- ✅ Calculadora do CPC; 🔧 agora mostram **cliente/processo** e são clicáveis.
- 🔴 **Marcar prazo como cumprido**; **editar/excluir** prazo.
- 🔴 **Feriados forenses e do tribunal** na calculadora (hoje só nacionais + recesso).
- 🟡 Vincular prazo direto pela publicação (o esboço existe, falta ligar ao fluxo).
- 💡 Alerta/notificação quando faltam X dias; cor por urgência (🔧 já colori no dashboard/lista).

## 5. Agenda
- ✅ Categorias, agrupada por dia; 🔧 agora cada compromisso é **clicável** e mostra o cliente.
- 🔴 **Editar/excluir/concluir** compromisso.
- 🔧 Visão de **calendário mensal** (alterna Lista/Calendário; cores por categoria + legenda; navegação ‹ Hoje ›; clique no evento abre modal com data/hora/local/cliente/processo/observações e ações concluir/abrir/excluir). Semanal ainda falta.
- 🟡 Lembretes/notificações; recorrência; sincronizar com Google Calendar.
- 💡 Alerta de conflito de horário; contagem "hoje / próximos 7 dias".

## 6. Tarefas
- ✅ Lista com prioridade/status.
- 🔴 **Editar/concluir/excluir** tarefa; visão **Kanban**.
- 🟡 Vincular a prazo/audiência; responsável (quando houver equipe).

## 7. Precatórios / Valores de terceiros
- ✅ Cálculo do líquido correto; separação receita × custódia.
- 🔴 **Editar/excluir**; registrar o **repasse** (comprovante, data) e mudar status para "repassado".
- 🟡 Alerta de data prevista chegando.

## 8. Feed Jurídico
- 🔧 Agora puxa **fontes oficiais reais** (STF, STJ, CNJ, Senado, Conjur, Migalhas), classificado, carrega aos poucos.
- 🟡 Personalizar por **área de atuação** do advogado (mostrar só o relevante) — precisa de IA/filtro.
- 💡 Marcar "lido"; busca dentro do feed.

## 9. Dashboard
- 🔧 Números e alertas agora **clicáveis** (levam à pessoa/processo/página).
- 🟡 Filtros por período; card de **aniversariantes** e **audiências da semana**.

---

## 10. Funcionalidades transversais que faltam
- 🔴 **Busca global** de verdade (a barra do topo ainda não pesquisa).
- 🔴 **Botão "Ação rápida"** abrir os formulários direto (hoje leva à página).
- 🔧 **Relatórios e exportação**: página "Relatórios" (menu) com 3 relatórios (financeiro/processos/prazos), filtros de período e status, cards de resumo, tabela; exporta **CSV** (abre no Excel) e **PDF** (via impressão do navegador com layout próprio de impressão).
- 🔧 **Central de notificações**: sino no topo (badge com contagem), dropdown com prazos vencendo (≤7d), recebimentos a vencer/vencidos (≤7d) e audiências/compromissos próximos (≤3d), ordenado por urgência (vencido→alta→média), clique navega, "marcar como lida" (localStorage), atualiza a cada 2min. Endpoint /api/notificacoes calcula na hora.
- 🔴 **Documentos/GED** (upload de arquivos, procurações, petições).
- 🟡 **Contratos** e **modelos de petição** com variáveis.
- 🟡 **Multiusuário** com permissões (quando o escritório crescer).
- 🟡 **Troca de senha** já existe em Configurações; falta **recuperação por e-mail**.
- 🟡 **Lixeira** (restaurar itens excluídos).

## 11. Detalhes pequenos que facilitam muito (💡)
- Máscaras e validações (CPF, CNPJ, telefone, dinheiro).
- Datas sempre no formato BR e com "há X dias / em X dias".
- Ordenação por coluna e **paginação** nas listas grandes.
- Confirmação antes de excluir (já em alguns pontos).
- Empty states com dica de ação.
- Atalhos de teclado; salvar rascunho automático.
- Feedback visual de "salvo com sucesso".

## 12. Integrações/futuro (dependem de serviços externos)
- Atualização automática de processos (DataJud agendado / API paga p/ tempo real).
- E-mail integrado (IMAP) por cliente/processo.
- WhatsApp API (envio automático — hoje é deep-link manual).
- Assinatura eletrônica de contratos.
- OCR (foto da CNH vira cadastro).
- IA: resumo de andamentos, sugestão de prazos, rascunho de peças.

## 13. Infra / performance
- 🔴 **Cold start** do plano grátis (1º acesso ~30-50s) — some com upgrade (~US$7/mês) ou um "pinger" grátis.
- 🔴 **Backup automático** do banco (hoje o Neon tem backup próprio, mas vale rotina nossa).
- 🟡 Domínio próprio (`.com.br`).
- 🔧 Feed carrega aos poucos; navegação otimizada.

---

## Prioridade sugerida (o que faria mais diferença primeiro)
1. **Editar/excluir em todos os módulos** + marcar prazo cumprido / repasse de precatório.
2. **Parcelamento e baixa parcial** no financeiro.
3. **Busca global** e **Ação rápida** funcionais.
4. **Relatórios/exportação** e **notificações**.
5. **Documentos (GED)** e **calendário visual** na agenda.
