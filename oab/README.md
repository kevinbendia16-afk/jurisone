# Aprova OAB — curso preparatório (1ª e 2ª fase)

App web instalável (PWA), sem build e sem servidor próprio: basta hospedar a pasta `oab/`.

## Rodar no computador
```
cd oab
python3 -m http.server 8080
```
Abra http://localhost:8080. No celular, use "Adicionar à tela inicial" para instalar como app.

## O que tem
- **1ª fase:** 20 matérias ordenadas pelo peso na prova, 54 aulas (explicação, "como a FGV cobra" e macetes).
- **Videoaulas:** cada aula abre a busca do tema no YouTube; colando o link de um vídeo, ele passa a tocar dentro do app.
  Para deixar um vídeo fixo para todos, preencha `videoId` no tópico em `data/materias.js`.
- **145 questões comentadas:** cada alternativa explica por que está certa ou errada. Treino por matéria/aula,
  revisão dos erros e simulado cronometrado com gabarito no final.
- **2ª fase:** regras, estrutura da peça e tabela "qual peça usar" para 7 áreas.
- **Estratégias:** método de estudo e técnicas de prova.
- O progresso fica salvo no próprio aparelho (localStorage) e o app funciona offline após o 1º acesso.

## Adicionar conteúdo
- Aulas: `data/materias.js` · Questões: `data/questoes.js` · 2ª fase e estratégias: `data/segunda-fase.js`.

## Publicação
O backend do JurisOne já serve esta pasta em `/oab/` (ex.: `https://jurisone.onrender.com/oab/`).
Basta o código chegar ao branch que o Render publica. Também funciona em qualquer hospedagem estática
(Netlify, Vercel, GitHub Pages), apontando para a pasta `oab/`.
