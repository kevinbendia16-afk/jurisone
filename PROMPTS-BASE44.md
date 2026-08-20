# Prompts para o Base44 — próxima rodada (maquete)

> Cole **um de cada vez** (não todos juntos). Espere terminar, teste, e só então mande o próximo.
> São incrementais: mandam ADICIONAR sobre o que já existe, sem refazer o sistema.
> Continua tudo com **dados fictícios** — é maquete de design.

---

## PROMPT 1 — Visão 360º do CLIENTE

```text
Mantenha tudo que já existe. Agora ADICIONE a página de detalhe do cliente (visão 360º).
Ao clicar em uma linha da lista de Clientes, abrir uma página própria do cliente com:
- Cabeçalho: nome, tipo (PF/PJ), status, documento, telefone, e-mail, responsável.
- Abas nesta página: Visão geral | Processos | Financeiro | Prazos | Tarefas | Documentos | Anotações | Histórico.
- Aba "Processos": listar os processos vinculados a este cliente (puxando os que já existem).
- Aba "Financeiro": mostrar honorários e lançamentos deste cliente (por enquanto pode usar dados de exemplo).
- Aba "Visão geral": cards-resumo (nº de processos, valor a receber, próximos prazos) + timeline de atividades.
Use o mesmo estilo visual escuro e profissional já existente, com abas, cards e breadcrumbs.
Não invente dados reais; use exemplos fictícios onde ainda não houver dados.
```

---

## PROMPT 2 — Visão 360º do PROCESSO

```text
Mantenha tudo que já existe. Agora ADICIONE a página de detalhe do processo (visão 360º).
Ao clicar em uma linha da lista de Processos, abrir uma página própria do processo com:
- Cabeçalho: título/assunto, número CNJ, cliente vinculado (com link para o cliente), área, status, prioridade.
- Abas: Visão geral | Movimentações | Prazos | Tarefas | Audiências | Documentos | Financeiro | Partes | Notas | Histórico.
- Aba "Movimentações": timeline processual, permitindo adicionar uma movimentação manualmente.
- Aba "Financeiro": honorários, custas e despesas DESTE processo, com Receitas, Despesas e Saldo do processo.
- Aba "Prazos"/"Tarefas": itens vinculados a este processo (dados de exemplo se ainda não houver).
Mantenha o estilo visual escuro e profissional já existente, com abas, timeline e cards.
```

---

## PROMPT 3 — Módulo PRECATÓRIOS / VALORES DE TERCEIROS (o diferencial)

```text
Mantenha tudo que já existe. Adicione um novo item no menu lateral: "Valores de Terceiros".
REGRA CENTRAL: dinheiro de terceiro (do cliente) NÃO é receita do escritório. Fluxo:
recebe o VALOR BRUTO -> deduz honorário contratual % + custas reembolsáveis + retenção de IR
-> repassa o LÍQUIDO ao cliente.
Criar a tela com uma tabela e um formulário "Novo valor de terceiro" com os campos:
- cliente (dropdown dos clientes existentes)
- processo (dropdown, opcional)
- tipo: precatório | RPV | acordo | alvará | depósito judicial
- valor bruto (R$)
- honorário contratual % a deduzir
- custas a reembolsar (R$)
- IR retido (R$)
- valor líquido de repasse (CALCULADO automaticamente = bruto - honorário% - custas - IR)
- tribunal, ente devedor, data prevista
- status: aguardando | recebido | repassado
Na tabela, mostrar bruto, honorário deduzido, líquido de repasse e status (com badge colorido).
IMPORTANTE: nos totais/relatórios de faturamento do escritório, entra SÓ o honorário deduzido,
NUNCA o valor bruto. Deixe isso visível: separe "Receita do escritório" de "Em custódia (a repassar)".
Mantenha o estilo visual escuro e profissional.
```

---

## PROMPT 4 — Correções rápidas

```text
Correções:
1. No dashboard, o indicador "00 pênis" está com rótulo errado. Troque por "audiências"
   (ou remova, se não houver módulo de audiências).
2. Padronize o nome do sistema em todo lugar (logo, título, textos): use "____________".
3. Faça o botão "Ação rápida" abrir um menu com: Novo cliente, Novo processo, Nova tarefa,
   Novo prazo, Novo lançamento financeiro — cada um abrindo o formulário correspondente.
```

> No prompt 4, escolha e escreva o nome definitivo no lugar do "____________"
> (candidatos: JurisOne, JurisFin, LexCore).

---

## PROMPT 5 — Calculadora de Prazos

```text
Mantenha tudo que já existe. Na tela de Prazos, ADICIONE uma "Calculadora de Prazos".
Formulário:
- data da intimação/publicação
- quantidade de dias do prazo
- tipo: dias úteis (padrão) | dias corridos
- (opcional) vincular a um processo e cliente existentes
Regras de cálculo (CPC brasileiro):
- em "dias úteis", contar apenas dias úteis (pular sábados, domingos e feriados);
- excluir o dia do começo e incluir o dia do vencimento;
- o prazo começa a correr no primeiro dia útil seguinte à data informada;
- considerar feriados nacionais e o recesso forense de 20/12 a 20/01 (suspende a contagem).
Mostrar como resultado: DATA FATAL do prazo, em destaque, com um aviso visível:
"Confira sempre o prazo oficial no sistema do tribunal. Cálculo meramente auxiliar."
Botão "Salvar como prazo": cria um Prazo vinculado ao processo/cliente com essa data fatal,
que passa a aparecer na lista de Prazos e no dashboard.
Mantenha o estilo visual escuro e profissional.
```

---

## PROMPT 6 — Automação de petições (modelos com variáveis)

```text
Mantenha tudo que já existe. Adicione um módulo "Modelos de Petição" (pode ficar dentro de
Documentos ou como item novo no menu).
Funcionamento:
- Criar/editar modelos de texto com VARIÁVEIS entre chaves, ex.: {{cliente_nome}}, {{cliente_cpf}},
  {{processo_numero}}, {{processo_vara}}, {{processo_area}}, {{valor_causa}}, {{data_hoje}}.
- Tela "Gerar peça": o usuário escolhe um modelo e um processo (dos existentes); o sistema
  substitui as variáveis pelos dados reais daquele processo/cliente e mostra o texto pronto,
  com botão de copiar e de salvar como documento vinculado ao processo.
Incluir 1 ou 2 modelos de exemplo (ex.: procuração, petição inicial simples).
Mantenha o estilo visual escuro e profissional.
```

---

## PROMPT 7 — Lançamento de prazo a partir de publicação (versão maquete)

```text
Mantenha tudo que já existe. Na tela de Prazos, adicione uma seção "Publicações".
Formulário "Nova publicação":
- processo vinculado (dos existentes)
- data da publicação
- texto/tipo do ato (campo de texto; ex.: "Sentença - prazo para recurso")
- tipo de prazo sugerido (dropdown: recurso 15 dias | contestação 15 dias | manifestação 5 dias
  | embargos 5 dias | outro, com campo de dias)
Ao salvar, o sistema deve SUGERIR automaticamente um prazo, calculando a data fatal com as
mesmas regras da Calculadora de Prazos (dias úteis, começa no 1º dia útil seguinte, feriados,
recesso 20/12-20/01), e permitir "Confirmar prazo" para criá-lo vinculado ao processo.
Mostrar aviso: "Sugestão automática. Confira o prazo oficial no tribunal."
Mantenha o estilo visual escuro e profissional.
```

> OBS: OCR de documento (foto da CNH virar cadastro) e integração real com o Diário/tribunais
> NÃO entram na maquete — são pesados e dependem de serviços externos. Ficam para o motor real (fase 2/3).

---

## PROMPT 8 — Feed Jurídico (aba de atualizações)

```text
Mantenha tudo que já existe. Adicione um novo item no menu lateral: "Feed Jurídico"
(e um card-resumo "Atualizações do dia" no dashboard, com os 3 itens mais recentes).
A tela "Feed Jurídico" mostra uma lista de cards de atualizações do mundo jurídico, cada card com:
- categoria (badge colorido): Decisão/Jurisprudência | Notícia | Nova Lei | Artigo
- título/manchete
- resumo curto (2-3 linhas)
- fonte (ex.: STF, STJ, Conjur, Migalhas, JOTA) e data
- botão "Ler na fonte" (link) e ícone de salvar/favoritar
Filtros no topo por categoria e por área jurídica (Cível, Trabalhista, Tributário, etc.).
Use de 8 a 12 itens de EXEMPLO (fictícios, mas realistas) para demonstrar o visual.
Importante: mostrar só manchete + resumo curto + link — nunca texto integral (direito autoral).
Adicionar um aviso discreto: "Conteúdo informativo. Não substitui a pesquisa oficial."
Mantenha o estilo visual escuro e profissional, com cards organizados.
```


