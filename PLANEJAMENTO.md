# JurisFin — Planejamento (sistema de gestão da advocacia — advogado solo)

> **Escopo:** app **novo e totalmente independente**. Não compartilha servidor, banco,
> repositório nem código com o CSB Enterprise (clínica). Do CSB pegamos apenas *ideias*
> de arquitetura e padrões. Nada da clínica é tocado.

Data do plano: 2026-08-19 · Usuário: solo · Stack: React + Node/Express + PostgreSQL · Hospedagem: a definir

---

## 0. Visão do produto (o que é de verdade)

**Não é** apenas um app financeiro. É o **sistema operacional da carreira do advogado**:
processos, prazos, clientes, e-mails, documentos, tarefas e financeiro — **tudo num lugar só**,
em vez de espalhado em várias ferramentas. O financeiro é UM módulo entre vários.

**A tese central (por que substitui 5 apps por 1):** tudo se conecta num fio único —
processo → prazo → tarefa/agenda → horas trabalhadas → honorário → financeiro.

### Benchmark de mercado (o que copiar e melhorar)
| Concorrente | Força | O que fazemos melhor |
|---|---|---|
| **Astrea** (BR) | Atualização automática de processos + prazos com IA | Mesma base, IA mais forte |
| **ADVBOX** (BR) | Produtividade, metas, tarefas | Manter simples pra solo |
| **Projuris** (BR) | Financeiro profundo (DRE, fluxo) | Igualar + precatórios de verdade |
| **Clio** (EUA) | Tudo integrado, timesheet, trust accounting | Mesmo fio, sem inchaço/custo |
| **MyCase** (EUA) | Simples, ideal pra solo, portal do cliente | Referência de UX |

### Diferenciais da nossa versão
1. **IA integrada de verdade** — resumir andamentos, sugerir prazos, redigir peças.
2. **Contas de terceiros/precatórios bem-feitas** — fraqueza dos apps BR; nosso diferencial.
3. **Interface moderna, sem inchaço** — feito pra 1 advogado, não um ERP.
4. **Sem mensalidade cara** — roda no ambiente do próprio advogado.

---

## 1. Módulo Financeiro — Objetivo

Organizar **movimentações de dinheiro**, separando com clareza:

1. **Dinheiro do escritório** (honorários, receitas próprias) — o que é dele.
2. **Dinheiro de terceiros/clientes** (precatórios, RPVs, acordos, alvarás) — passa pela conta
   mas **não é receita do escritório**; precisa ser repassado ao cliente descontando o que for devido.

Essa separação é o coração do app (e o que evita confusão contábil e problemas éticos/fiscais).

---

## 2. Domínio (conceitos específicos de advocacia)

### 2.1 Honorários (receita própria)
- **Contratuais** — combinados com o cliente.
- **Sucumbenciais** — pagos pela parte perdedora.
- **De êxito** (% sobre o ganho da causa).
- **Consultivos / pró-labore** — avulsos ou recorrentes (mensal).

### 2.2 Valores de terceiros (dinheiro do cliente)
- **Precatórios** — crédito contra ente público; valor bruto, tribunal, ente devedor,
  data prevista, retenções (IR, contribuição), honorário contratual % a deduzir, cessão (se houver).
- **RPV** (requisição de pequeno valor) — mesma lógica, prazo mais curto.
- **Acordos / alvarás** — valores recebidos em nome do cliente.
- Fluxo típico: **recebe valor bruto → deduz honorários + custas reembolsáveis → repassa o líquido ao cliente**.

### 2.3 Despesas
- **Custas processuais / reembolsáveis** — adiantadas pelo escritório, recuperáveis do cliente.
- **Despesas próprias** — fixas (aluguel, software) e variáveis.

### 2.4 Contas próprias
- **A receber** (honorários pendentes, parcelados).
- **A pagar** (despesas do escritório).
- **Fluxo de caixa** (entradas/saídas realizadas, saldo).

---

## 3. Modelo de dados (rascunho — PostgreSQL)

Ideias herdadas do CSB: `parcelas` para valores parcelados, campos de `saldo` derivado,
gravar datas em horário de Brasília (lição do bug de timezone: usar `toLocaleDateString('en-CA')`,
nunca `toISOString()` para filtros de dia).

- **cliente** — id, nome, cpf_cnpj, contato, observações.
- **processo** — id, cliente_id, numero_cnj, tribunal, area, status, valor_causa.
- **caso_financeiro / contrato** — id, processo_id, tipo_honorario, percentual, valor_fixo, condicoes.
- **honorario (a receber)** — id, contrato_id, descricao, valor, vencimento, status
  (aberto | pago_parcial | pago | atrasado), valor_recebido, juros, multa, desconto.
  `saldo = valor + juros + multa - desconto - valor_recebido` (fórmula do CSB).
- **parcela** — para honorários/valores parcelados (id, honorario_id, numero, valor, vencimento, status).
- **valor_terceiro (precatório/RPV/acordo)** — id, cliente_id, processo_id, tipo, valor_bruto,
  retencoes_ir, honorario_deduzido, custas_deduzidas, valor_liquido_repasse, status
  (aguardando | recebido | repassado), data_prevista, data_recebimento, data_repasse.
- **custa_reembolsavel** — id, processo_id, descricao, valor, data, reembolsado (bool).
- **lancamento_caixa** — id, tipo (entrada|saida), origem (honorario|repasse|custa|despesa|outro),
  ref_id, valor, data, conta_bancaria, descricao. (Fonte da verdade do fluxo de caixa.)
- **despesa** — id, categoria, valor, vencimento, recorrente (bool), status.

**Regra de ouro no schema:** `valor_terceiro` NÃO entra como receita nos relatórios de
faturamento do escritório — só a parte `honorario_deduzido` vira receita. O `valor_liquido_repasse`
é passivo (dinheiro a devolver ao cliente).

---

## 3.5 Módulos do sistema completo (além do financeiro)

O financeiro reusa muito da base. Os outros pilares:

- **Processos** — cadastro + **atualização automática dos andamentos**. Integração de tribunais
  via API pública **DataJud/CNJ** (grátis, base nacional) e/ou APIs pagas (Escavador, Judit, Codilo)
  para andamentos em tempo real. Cada processo puxa prazos, tarefas e financeiro.
- **Prazos & Agenda** — controle de prazos (fatais e ordinatórios) com **alertas**; vira evento e tarefa.
  Sugestão de prazos por IA a partir do andamento.
- **Calculadora de Prazos** (feature forte do DOC ADV/Astrea) — entra data da intimação/publicação
  + nº de dias + tipo (úteis/corridos); calcula a **data fatal** aplicando regras do CPC:
  só dias úteis (art. 219), exclui início/inclui vencimento (art. 224), começa no 1º dia útil seguinte,
  pula fins de semana e feriados, respeita recesso forense (20/12–20/01, art. 220).
  Depende de **tabela de feriados** (nacional + forense + tribunal) mantida atualizada — é o ponto sensível.
  Deve ser tratada como AUXÍLIO (aviso "confira o prazo oficial"), nunca como verdade absoluta.
  Integrada ao "fio": o resultado vira um Prazo vinculado ao processo/cliente, com alerta na agenda.
- **Clientes / CRM & intake** — cadastro, captação, vínculo cliente↔processo↔contrato.
- **E-mails integrados** — caixa (IMAP) vinculando cada e-mail a um cliente/processo. Requer consentimento
  do usuário; **nunca** enviar e-mail sem confirmação explícita.
- **Documentos & peças** — GED + modelos que geram peças a partir dos dados do processo; assinatura.
- **Automação de petições (modelos com variáveis)** — modelos com campos que se preenchem
  automaticamente com dados do cliente/processo (nome, CNJ, vara, valor…). Gera a peça em segundos.
  (Inspirado em ADVBOX/Office.ADV/aDoc.) Fase 2.
- **Classificação de publicações → prazo automático** — captura a publicação do Diário (DJe),
  identifica o tipo de ato e **lança o prazo automaticamente** (usando a Calculadora de Prazos),
  vinculado ao processo e à agenda. É a funcionalidade "matadora" dos concorrentes. Fase 2/3,
  depende de integração com o DJe e de IA para classificar. SEMPRE com revisão humana do prazo.
- **OCR de documento → cadastro rápido** — foto/scan de documento (ex.: CNH) vira cadastro de
  cliente preenchido automaticamente. (Inspirado em Projuris.) Fase 2/3.
- **Tarefas & produtividade** — kanban/metas estilo ADVBOX; conecta agenda ↔ horas.
- **Timesheet (horas)** — registro de horas trabalhadas que vira honorário no financeiro (estilo Clio).
- **Portal do cliente** — cliente acompanha andamento e financeiro sozinho (estilo MyCase).
- **IA assistente** — resumo de andamentos, sugestão de prazos, rascunho de peças/e-mails.
- **Feed Jurídico** — aba/card com atualizações diárias do mundo jurídico: novas decisões e
  jurisprudência (informativos STF/STJ, súmulas, teses), notícias (Conjur, Migalhas, JOTA),
  novas leis, artigos. Objetivo: manter o advogado atualizado e fazer ele querer entrar todo dia.
  - Nível 1 (fase 2): feed geral via **RSS** das fontes públicas; mostra manchete + resumo curto +
    link para a fonte (NUNCA o texto integral — direito autoral). Atualização diária automática.
  - Nível 2 (fase 3, com IA): feed **personalizado** — filtra o que é relevante cruzando com as
    ÁREAS dos processos do advogado. É o diferencial que os concorrentes não têm.
  - Permitir salvar/favoritar itens. Aviso: conteúdo informativo, não substitui pesquisa oficial.

**Nota técnica:** integração com tribunais e IMAP são os módulos mais complexos — deixar para
depois do MVP; começar com atualização manual/importação e evoluir para automática.

## 4. Módulos / telas (MVP do FINANCEIRO)

1. **Dashboard** — saldo em caixa, a receber do mês, valores de terceiros em custódia (a repassar),
   honorários do mês, atrasados.
2. **Clientes & Processos** — cadastro, vínculo processo↔cliente↔contrato.
3. **Honorários (a receber)** — lançar, parcelar, marcar recebimento, ver atrasados.
4. **Valores de terceiros / Precatórios** — cadastro do bruto, cálculo automático de deduções,
   controle de status até o repasse, comprovante de repasse.
5. **Custas & Despesas** — custas reembolsáveis por processo + despesas do escritório (a pagar/recorrentes).
6. **Fluxo de caixa** — extrato de entradas/saídas, saldo por conta bancária, filtros por período.
7. **Relatórios** — faturamento (só receita própria), valores em custódia, DRE simples, exportação.

**Fora do MVP (fase 2):** multiusuário/perfis, integração bancária (Open Finance), emissão de
recibos/NF, controle de prazos processuais, app mobile.

---

## 5. Arquitetura técnica (independente do CSB)

- **Frontend:** React + Vite + Tailwind (mesma família do smart-v2, projeto separado).
- **Backend:** Node + Express, API REST. Pode começar monolito (padrão CSB) mas já organizando
  por módulos (routes/controllers/services) para não virar um `index.js` gigante.
- **Banco:** PostgreSQL próprio, base ex.: `jurisfin`. **Migrations versionadas** desde o dia 1
  (ex.: node-pg-migrate ou Prisma) — algo que o CSB não tinha e que evita dor depois.
- **Auth:** login simples (1 usuário) com senha hash (bcrypt/argon2) + sessão/JWT.
- **Repositório:** novo repo git, separado. Branch `main` protegida; desenvolver em `dev`.

### Diferenças propositais em relação ao CSB (melhorias)
- **Ter ambiente de dev/staging separado de produção** (o CSB roda direto em prod — evitar isso).
- **Backup automático de banco desde o início** (o CSB só tinha dump manual no começo).
- **Migrations** em vez de alterar schema na mão.
- **Seed/dados de teste** para desenvolver sem tocar em dados reais.

---

## 6. Hospedagem (a decidir — duas rotas neutras)

| Opção | Prós | Contras |
|---|---|---|
| **VPS próprio** (estilo CSB) | Controle total, custo previsível, você já domina | Você mantém SO, nginx, backups, segurança |
| **Nuvem gerenciada** (Vercel/Render + Neon/Supabase) | Menos manutenção, deploy fácil, backups automáticos | Custo pode escalar, menos controle |

Recomendação para **solo**: nuvem gerenciada tende a dar menos trabalho operacional.
Decisão não bloqueia o desenvolvimento — o app é o mesmo; muda só o deploy.

---

## 7. Próximos passos sugeridos

1. Validar/ajustar este plano (nomes de módulos, o que é MVP).
2. Fechar o **modelo de dados** em detalhe (campos exatos + migrations).
3. Definir nome/identidade do projeto (placeholder atual: **JurisFin**).
4. Só então iniciar o scaffold do repositório novo.

> Nada aqui depende ou interfere no CSB Enterprise. É um projeto do zero.
