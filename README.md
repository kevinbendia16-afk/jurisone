# JurisOne — Sistema de Gestão Jurídica (Fase 1)

App independente para advogado solo. Roda **100% na sua máquina** (localhost), dados guardados
localmente em SQLite. Nada compartilhado com outros sistemas.

## Como iniciar
Dê **duplo-clique em `iniciar.bat`** (na raiz do projeto). Ele sobe o backend, o frontend e abre
o navegador em http://localhost:5173.

- **Login:** `kevin@jurisone.local`
- **Senha:** `jurisone123`

Para desligar, feche as duas janelas pretas (API e Web).

## O que já funciona (Fase 1)
- Login com senha (JWT).
- **Dashboard** com números reais.
- **Clientes** (lista, cadastro, **visão 360º** com abas).
- **Processos** (lista, cadastro vinculado ao cliente, **visão 360º**, movimentações).
- **Prazos** + **Calculadora de prazos** (regras do CPC: dias úteis, recesso, feriados nacionais).
- **Financeiro** (lançamentos, a receber/recebido/despesas).
- **Valores de terceiros / Precatórios** — com a regra de ouro: dinheiro do cliente não é receita
  do escritório; cálculo automático do líquido a repassar.
- **Tarefas**.

## Estrutura
- `server/` — API Node/Express + Prisma + SQLite. Banco em `server/dev.db`.
- `web/` — Frontend React + Vite.

## Estrutura técnica / próximos passos
Ver `PLANEJAMENTO.md` (fases seguintes), `SPEC-PRODUTO.md` (spec completo) e `PROMPTS-BASE44.md`.

### Ainda por fazer (próximas fases)
- Backup automático do banco.
- Feed Jurídico, automação de petições, publicação→prazo automático, OCR.
- Integração com tribunais (DataJud/CNJ).
- Publicar na nuvem grátis (Render + Neon) quando quiser acesso de qualquer lugar
  (trocar o provider do Prisma de `sqlite` para `postgresql`).
