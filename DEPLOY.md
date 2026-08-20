# Publicar o JurisOne na nuvem (grátis, link fixo)

Objetivo: um endereço permanente (ex.: `https://jurisone.onrender.com`) que funciona mesmo com
seu PC desligado. Custo: **R$ 0** (planos gratuitos). Você cria 3 contas grátis; eu já deixei
todo o código e a configuração prontos.

> Porém do grátis: o servidor do Render "dorme" após ~15 min parado; o 1º acesso demora ~30s pra
> acordar. Normal. Quando virar uso diário, ~US$7/mês tira o sono.

## Passo 1 — Banco de dados (Neon, PostgreSQL grátis)
1. Acesse **neon.tech** → "Sign up" (pode entrar com o Google).
2. Crie um projeto (nome: `jurisone`). Região: escolha uma dos EUA (East).
3. Copie a **Connection string** (começa com `postgresql://...`). Guarde — vamos usar no Passo 3.

## Passo 2 — Código no GitHub
1. Acesse **github.com** → crie conta (se não tiver).
2. Crie um repositório novo **privado** chamado `jurisone` (não marque "add README").
3. Me avise que o repositório existe (me passe o endereço, ex.: `github.com/seuusuario/jurisone`).
   Eu te passo os 2 comandos exatos para enviar o código (ou faço junto com você).

## Passo 3 — Deploy no Render
1. Acesse **render.com** → "Sign up" (entre com o GitHub).
2. "New +" → **Web Service** → conecte o repositório `jurisone`.
3. O Render lê o arquivo `render.yaml` automaticamente. Só falta preencher:
   - **DATABASE_URL** = a connection string do Neon (Passo 1).
   - (JWT_SECRET o Render gera sozinho; DATAJUD_APIKEY pode deixar em branco.)
4. Clique **Create Web Service**. Ele instala, cria as tabelas, e sobe.
5. Em ~3–5 min você recebe o link fixo: `https://jurisone.onrender.com`.

## Login inicial
`kevin@jurisone.local` / `jurisone123` (troque depois — me peça pra adicionar troca de senha).

## O que eu já preparei
- `render.yaml` — configuração pronta do serviço.
- `server/prisma/schema.postgres.prisma` — banco na versão PostgreSQL.
- Backend serve o frontend no mesmo endereço (não precisa de 2 serviços).
- Migração automática (`db push`) e criação do usuário no deploy.

## Importante
- O app **local continua funcionando** normalmente (SQLite). A nuvem usa o Neon. São independentes.
- Nada disso mexe em outros sistemas seus.
