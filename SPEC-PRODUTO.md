# JurisFin — SPEC-PRODUTO (documento-mestre)

> **O que é este arquivo:** a especificação completa do produto, escrita pelo Kevin.
> É a **fonte da verdade** do que o sistema deve ser. O Base44 é usado apenas como
> **maquete visual navegável** (opção A): desenha as telas/fluxos com **dados fictícios**;
> o motor real (banco, segurança, cálculos, precatórios, integrações) será construído
> depois, por fases, fora do Base44. Ver [[PLANEJAMENTO]].

Data: 2026-08-19

---

## Enquadramento para o Base44 (colar no TOPO do prompt)

> Este é um **protótipo de design navegável** para validar telas e fluxos.
> Use **dados de exemplo (fictícios)** — nenhum dado real de cliente.
> Priorize **aparência profissional** e a **navegação entre módulos**.
> **Não** implemente segurança real, multi-tenant, integrações externas nem
> cálculos financeiros exatos nesta fase — apenas represente visualmente.
> Foque em: menu lateral, dashboard, páginas 360º de cliente e processo, e o
> "fio" que liga os módulos (processo → prazo → tarefa → honorário → financeiro).

---

## SEÇÃO EXTRA que faltava no prompt original — PRECATÓRIOS / VALORES DE TERCEIROS

> **Regra de ouro:** dinheiro de terceiro (cliente) **não** é receita do escritório.
> Fluxo: recebe o **valor bruto** → deduz **honorário contratual %** + **custas reembolsáveis**
> + **retenções (IR)** → **repassa o líquido ao cliente**.
>
> Criar módulo "Valores de Terceiros / Precatórios" com:
> - tipo: precatório | RPV | acordo | alvará | depósito judicial;
> - valor bruto, tribunal, ente devedor, data prevista;
> - honorário contratual % a deduzir, custas a reembolsar, retenção de IR;
> - valor líquido de repasse (calculado), comprovante de repasse;
> - status: aguardando → recebido → repassado.
>
> Nos relatórios de **faturamento**, entra só a parte do honorário — **nunca** o valor bruto.
> Este é o diferencial competitivo (concorrentes BR tratam precatório de forma fraca).

---

## Documento-mestre (prompt completo enviado ao Base44)

<!-- Abaixo, o texto integral do prompt original do Kevin, preservado como referência. -->

_(As 39 seções do prompt original ficam registradas aqui como spec de referência para a
construção do motor real. Resumo dos módulos, para índice rápido:)_

1. Identidade do sistema (visual SaaS/ERP profissional, menu lateral, dashboard, tabelas)
2. Dashboard principal (indicadores + gráficos + filtros)
3. Clientes (CRM, PF/PJ, visão 360º, timeline)
4. Processos judiciais (CNJ, partes, status, página 360º, timeline)
5. Prazos processuais (alertas, calendário, cores por urgência)
6. Agenda (audiências/reuniões, dia/semana/mês, recorrência)
7. Financeiro do escritório (a receber/pagar, fluxo de caixa)
8. Financeiro individual do cliente (separado por cliente, honorários/parcelas)
9. Financeiro por processo (receitas/despesas/saldo/honorários)
10. Honorários (tipos combináveis, relatórios)
11. Contratos (versões, assinatura futura)
12. Documentos / GED (pastas, tags, versões, lixeira)
13. E-mail (Gmail/Outlook, vínculo a cliente/processo)
14. Tarefas (lista/kanban/calendário)
15. Comunicação com clientes (WhatsApp/e-mail/SMS, histórico)
16. Consultas e atendimentos (converter em cliente/processo)
17. Captação / CRM (funil comercial)
18. Equipe do escritório (perfis, permissões granulares)
19. Multiusuário (log de auditoria)
20. Notificações (central)
21. Busca global (unificada)
22. Relatórios (PDF/Excel/CSV)
23. Contabilidade / gestão administrativa (DRE gerencial)
24. Configurações (escritório, modelos, integrações)
25. Segurança e LGPD (isolamento, auditoria, sessão)
26. Arquitetura de dados (relacionamentos, integridade)
27. Experiência de uso (atalhos, ação rápida)
28. Página do cliente — visão 360º
29. Página do processo — visão 360º
30. IA — preparar estrutura (resumos, prazos, rascunhos)
31. Responsividade (prioridade desktop)
32. Qualidade visual (premium, sem template genérico)
33. Responsividade dos dados (módulos conversam)
34. Lixeira e restauração
35. Dashboard de produtividade
36. Sistema multi-escritório (multi-tenant futuro)
37. Implementação (funcional, não só mockup — vale para o MOTOR REAL, não para o Base44)
38. Prioridade de desenvolvimento (ordem de 23 módulos)
39. Regra principal (ERP jurídico completo)
+ **EXTRA: Precatórios / valores de terceiros** (acima)

> **Nota de escopo:** multiusuário (18/19), multi-escritório (36) e segurança/LGPD real (25)
> NÃO são MVP. Arquitetura preparada desde o início, implementação por fases. Núcleo do MVP:
> Clientes + Processos + Prazos/Agenda + Financeiro (com precatórios).
