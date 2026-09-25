// Site JurisOne — tour pelas telas reais, lightbox, central de tutoriais e formulário de contato.

// ---------- Tour: cada tela real do sistema, com explicação curta, exemplo concreto e pontos-chave ----------
const TOUR = [
  { id: 'painel', aba: 'Visão geral', titulo: 'Tudo que pede sua atenção, ao abrir o sistema',
    texto: 'O painel junta os números do dia, os prazos por urgência e o gráfico de receitas e despesas dos últimos meses.',
    exemplo: 'Às 8h a Dra. Helena vê que tem um prazo vencendo amanhã, R$ 231 mil a receber e como fechou cada mês.',
    pontos: ['Central de atenção: vencidos em vermelho, próximos em amarelo', 'Tarefas, prazos, clientes e processos do dia', 'Um clique leva ao processo ou ao cliente'] },
  { id: 'importar', aba: 'Importar processos', titulo: 'Traga a carteira inteira colando os números CNJ',
    texto: 'Em vez de cadastrar processo por processo, cole a lista. Cada número vira um processo com o histórico completo da base do CNJ.',
    exemplo: 'Quatro números colados, com o nome do cliente depois do “;” — quatro processos cadastrados e vinculados aos clientes.',
    pontos: ['Um número por linha, cliente depois do “;”', 'Cria o cliente se ele ainda não existir', 'Processo já cadastrado não é duplicado'] },
  { id: 'processo', aba: 'Processo', titulo: 'A linha do tempo completa de cada processo',
    texto: 'Os andamentos chegam do DataJud/CNJ todos os dias e ficam em ordem, junto com prazos, financeiro e documentos do processo.',
    exemplo: 'Aposentadoria por invalidez: da petição inicial à perícia e à conclusão para sentença, cada andamento com data e hora.',
    pontos: ['Sincronização diária automática ou na hora, com um clique', 'Partes, vara, comarca e valor da causa', 'Abas de prazos, financeiro, documentos e tarefas'] },
  { id: 'prazos', aba: 'Prazos', titulo: 'Prazos com contagem regressiva',
    texto: 'Cada prazo mostra quantos dias faltam, o cliente e o processo. Marque como cumprido quando protocolar.',
    exemplo: 'Uma apelação que vence em 2 dias aparece como “Vence em 2 dias”; o que já venceu fica marcado em vermelho.',
    pontos: ['Calculadora pelo CPC: dias úteis, feriados e recesso', 'Carnaval, Sexta-feira Santa e Corpus Christi já descontados', 'Aviso no sino antes de vencer'] },
  { id: 'agenda', aba: 'Agenda', titulo: 'Audiências, reuniões e diligências no calendário',
    texto: 'Veja o mês inteiro, a semana ou uma lista. Cada tipo de compromisso tem sua cor.',
    exemplo: 'Em outubro, audiências em vermelho, reuniões com clientes em azul e prazos fatais em amarelo — dá para planejar o mês de relance.',
    pontos: ['Hora, local, cliente e processo em cada compromisso', 'Visões de mês, semana e lista', 'Concluir ou abrir o processo com um clique'] },
  { id: 'financeiro', aba: 'Financeiro', titulo: 'Honorários e despesas sem planilha',
    texto: 'Receitas e despesas do escritório com vencimento, status e ações rápidas de recebimento.',
    exemplo: 'Honorários de R$ 3.500 com R$ 2.500 já pagos aparecem como “Parcial” — quando o resto entrar, é só clicar em Receber.',
    pontos: ['Parcelamento automático em quantos meses quiser', 'Juros de 1% ao mês e multa de 2% no atraso', 'Despesas fixas que se repetem todo mês'] },
  { id: 'precatorios', aba: 'Precatórios', titulo: 'Dinheiro do cliente separado da receita',
    texto: 'Precatórios, RPVs e alvarás com o cálculo do honorário e do valor a repassar ao cliente.',
    exemplo: 'Precatório de R$ 498 mil: R$ 99,6 mil de honorário do escritório e R$ 394,4 mil a repassar ao cliente.',
    pontos: ['Bruto, honorário, custas e IR em cada valor', 'Situação: aguardando, recebido, repassado', 'Receita do escritório só conta quando o valor entra'] },
  { id: 'cliente', aba: 'Cliente', titulo: 'Tudo sobre o cliente numa tela',
    texto: 'Dados de contato, processos, prazos, financeiro, documentos e tarefas do cliente, separados em abas.',
    exemplo: 'Priscila Nunes Soares: dois processos, os próximos prazos e um atalho para mandar mensagem no WhatsApp dela.',
    pontos: ['Visão 360º do relacionamento', 'Dados cadastrais completos e etiquetas', 'Mensagens prontas de atualização no WhatsApp'] },
  { id: 'modelos', aba: 'Modelos de peças', titulo: 'Petições e contratos que se escrevem sozinhos',
    texto: 'Crie o modelo uma vez. Ao usar, escolha o cliente e o processo — os dados entram no texto automaticamente.',
    exemplo: 'Petição de juntada: vara, comarca, número do processo, nome e CPF da cliente preenchidos sem digitar nada.',
    pontos: ['Procurações, petições e contratos', 'Campos extras viram perguntas na hora de gerar', 'Copie o texto ou baixe o arquivo'] },
  { id: 'relatorios', aba: 'Relatórios', titulo: 'Relatórios prontos para o contador',
    texto: 'Financeiro, processos e prazos filtrados por período e situação, com totais no topo.',
    exemplo: 'Recebido, a receber, despesas e resultado do período — exportado em PDF para o contador ou em planilha para o Excel.',
    pontos: ['Filtro por período e por situação', 'PDF pronto para imprimir', 'Planilha CSV que abre direto no Excel'] },
];

const elAbas = document.getElementById('tourAbas');
const elPainel = document.getElementById('tour-painel');
const elPos = document.getElementById('tourPos');
let atual = 0;

TOUR.forEach((t, i) => {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'tab'; b.textContent = t.aba;
  b.setAttribute('role', 'tab'); b.id = 'tab-' + t.id; b.setAttribute('aria-controls', 'tour-painel');
  b.addEventListener('click', () => mostrar(i));
  elAbas.appendChild(b);
});
elPainel.setAttribute('role', 'tabpanel');

function el(tag, cls, texto) { const e = document.createElement(tag); if (cls) e.className = cls; if (texto != null) e.textContent = texto; return e; }

function mostrar(i, focar) {
  atual = (i + TOUR.length) % TOUR.length;
  const t = TOUR[atual];
  elAbas.querySelectorAll('.tab').forEach((b, j) => {
    b.setAttribute('aria-selected', j === atual ? 'true' : 'false');
    b.tabIndex = j === atual ? 0 : -1;
    if (j === atual) {
      // rola só a barra de abas (nunca a página) para centralizar a aba ativa
      elAbas.scrollTo({ left: b.offsetLeft - (elAbas.clientWidth - b.offsetWidth) / 2, behavior: 'smooth' });
      if (focar) b.focus({ preventScroll: true });
    }
  });
  elPainel.setAttribute('aria-labelledby', 'tab-' + t.id);

  const txt = el('div', 'tour-txt');
  txt.append(el('h3', null, t.titulo), el('p', null, t.texto));
  const ex = el('div', 'exemplo'); ex.append(el('b', null, 'Exemplo'), el('p', null, t.exemplo));
  const ul = el('ul', 'pontos'); t.pontos.forEach((p) => ul.appendChild(el('li', null, p)));
  txt.append(ex, ul);

  const fig = el('figure', 'janela tour-img');
  const barra = el('div', 'janela-barra'); barra.append(el('i'), el('i'), el('i'), el('span', null, 'jurisone · ' + t.aba.toLowerCase()));
  const zoom = el('button', 'zoom'); zoom.type = 'button'; zoom.dataset.zoom = t.id; zoom.setAttribute('aria-label', 'Ampliar a tela: ' + t.aba);
  const img = el('img'); img.src = 'img/' + t.id + '.webp'; img.alt = 'Tela ' + t.aba + ' do JurisOne'; img.width = 2160; img.height = 1350; img.loading = 'lazy';
  zoom.appendChild(img); fig.append(barra, zoom);

  elPainel.replaceChildren(txt, fig);
  elPainel.classList.remove('entra'); void elPainel.offsetWidth; elPainel.classList.add('entra');
  elPos.textContent = (atual + 1) + ' / ' + TOUR.length;
}
document.getElementById('tourAnt').addEventListener('click', () => mostrar(atual - 1));
document.getElementById('tourProx').addEventListener('click', () => mostrar(atual + 1));
elAbas.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') { e.preventDefault(); mostrar(atual + 1, true); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); mostrar(atual - 1, true); }
});
mostrar(0);
// pré-carrega as outras telas depois que a página abre, para a troca de aba ser instantânea
window.addEventListener('load', () => setTimeout(() => TOUR.forEach((t) => { const i = new Image(); i.src = 'img/' + t.id + '.webp'; }), 800));

// ---------- Lightbox ----------
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbLeg = document.getElementById('lbLegenda');
let lbIdx = 0, voltarFoco = null;
function abrirLb(i) {
  lbIdx = (i + TOUR.length) % TOUR.length;
  const t = TOUR[lbIdx];
  lbImg.src = 'img/' + t.id + '.webp'; lbImg.alt = 'Tela ' + t.aba + ' do JurisOne';
  lbLeg.textContent = t.aba + ' — ' + t.titulo;
  if (lb.hidden) { voltarFoco = document.activeElement; lb.hidden = false; document.body.style.overflow = 'hidden'; document.getElementById('lbFechar').focus(); }
}
function fecharLb() { lb.hidden = true; document.body.style.overflow = ''; if (voltarFoco) voltarFoco.focus(); }
document.addEventListener('click', (e) => {
  const z = e.target.closest('[data-zoom]');
  if (z) abrirLb(TOUR.findIndex((t) => t.id === z.dataset.zoom));
});
document.getElementById('lbFechar').addEventListener('click', fecharLb);
document.getElementById('lbAnt').addEventListener('click', () => abrirLb(lbIdx - 1));
document.getElementById('lbProx').addEventListener('click', () => abrirLb(lbIdx + 1));
lb.addEventListener('click', (e) => { if (e.target === lb) fecharLb(); });
document.addEventListener('keydown', (e) => {
  if (lb.hidden) return;
  if (e.key === 'Escape') fecharLb();
  if (e.key === 'ArrowRight') abrirLb(lbIdx + 1);
  if (e.key === 'ArrowLeft') abrirLb(lbIdx - 1);
});

// ---------- Central de tutoriais ----------
const TUTORIAIS = [
  { cat: 'Processos', t: 'Importar vários processos de uma vez', p: ['Abra Processos e clique em “Importar em massa”.', 'Cole os números CNJ, um por linha.', 'Para indicar o cliente, escreva “; Nome” depois do número.', 'Clique em Importar e confira o resultado de cada linha.'] },
  { cat: 'Processos', t: 'Atualizar os andamentos agora', p: ['Abra o processo e vá na aba Movimentações.', 'Clique em “Sincronizar (DataJud)”.', 'Para todos de uma vez, use “Sincronizar todos” na lista de processos.'] },
  { cat: 'Processos', t: 'Cadastrar partes, vara e comarca', p: ['Em Novo processo, clique em “Partes, vara/comarca e valor da causa”.', 'Preencha polo ativo, polo passivo e o advogado contrário.', 'Salve: os dados aparecem na visão geral do processo.'] },
  { cat: 'Prazos', t: 'Calcular um prazo pelo CPC', p: ['Abra Prazos e use a calculadora.', 'Informe a data da intimação e a quantidade de dias.', 'Escolha dias úteis ou corridos e veja a data fatal.', 'Salve o prazo vinculado ao processo.'] },
  { cat: 'Prazos', t: 'Ser avisado dos prazos da semana', p: ['Clique no sino no topo da tela.', 'Veja prazos, recebimentos e audiências por urgência.', 'Clique no aviso para abrir o processo.'] },
  { cat: 'Agenda', t: 'Marcar uma audiência', p: ['Abra Agenda e clique em “Novo compromisso”.', 'Escolha a categoria Audiência, data e hora.', 'Informe local, cliente e processo.', 'Veja em lista, semana ou mês.'] },
  { cat: 'Financeiro', t: 'Parcelar honorários', p: ['Abra Financeiro e clique em “Parcelar”.', 'Informe o valor total e o número de parcelas.', 'Escolha o 1º vencimento: as parcelas mensais são criadas.'] },
  { cat: 'Financeiro', t: 'Registrar pagamento parcial', p: ['Na linha do lançamento, clique em “Receber”.', 'Digite o valor que entrou.', 'O status muda para parcial até quitar.'] },
  { cat: 'Financeiro', t: 'Cobrar juros e multa de atraso', p: ['Lançamentos vencidos mostram “+ Juros/multa”.', 'Confira o cálculo: multa 2% e juros 1% ao mês.', 'Confirme: o original é quitado e os encargos entram como receita.'] },
  { cat: 'Financeiro', t: 'Exportar relatório do mês', p: ['Abra Relatórios e escolha Financeiro.', 'Filtre o período.', 'Baixe em CSV (Excel) ou gere o PDF.'] },
  { cat: 'Clientes', t: 'Ver tudo de um cliente', p: ['Abra Clientes e clique no nome.', 'Navegue pelas abas: processos, prazos, financeiro, documentos.', 'Use a aba WhatsApp para enviar mensagem pronta.'] },
  { cat: 'Documentos', t: 'Gerar uma petição a partir de modelo', p: ['Abra Modelos de peças e crie um modelo com {{cliente.nome}} e {{processo.numeroCnj}}.', 'Clique em “Usar modelo” e escolha o cliente e o processo.', 'Copie o texto pronto ou baixe o arquivo.'] },
  { cat: 'Documentos', t: 'Anexar procuração ao processo', p: ['Abra o processo e vá na aba Documentos.', 'Escolha a categoria Procuração.', 'Clique em “Anexar documento” e selecione o arquivo.'] },
];
const cats = ['Todos', ...new Set(TUTORIAIS.map((t) => t.cat))];
let catAtual = 'Todos';
const elChips = document.getElementById('chips');
const elTuts = document.getElementById('tuts');
const elBusca = document.getElementById('busca');
const elVazio = document.getElementById('vazio');
function desenharChips() {
  elChips.replaceChildren();
  cats.forEach((c) => {
    const b = el('button', 'chip' + (c === catAtual ? ' on' : ''), c); b.type = 'button';
    b.setAttribute('aria-pressed', c === catAtual ? 'true' : 'false');
    b.addEventListener('click', () => { catAtual = c; desenharChips(); desenharTuts(); });
    elChips.appendChild(b);
  });
}
function desenharTuts() {
  const q = elBusca.value.trim().toLowerCase();
  const lista = TUTORIAIS.filter((t) => (catAtual === 'Todos' || t.cat === catAtual)
    && (!q || (t.t + ' ' + t.p.join(' ') + ' ' + t.cat).toLowerCase().includes(q)));
  elTuts.replaceChildren();
  lista.forEach((t) => {
    const a = el('article', 'tut'); const ol = el('ol');
    t.p.forEach((passo) => ol.appendChild(el('li', null, passo)));
    a.append(el('small', null, t.cat), el('h3', null, t.t), ol);
    elTuts.appendChild(a);
  });
  elVazio.hidden = lista.length > 0;
}
elBusca.addEventListener('input', desenharTuts);
desenharChips(); desenharTuts();

// ---------- Formulário de contato ----------
const form = document.getElementById('form');
const msg = document.getElementById('msg');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const dados = Object.fromEntries(new FormData(form).entries());
  dados.origem = location.search || 'site';
  msg.className = 'msg'; msg.textContent = 'Enviando…';
  const botao = form.querySelector('button[type=submit]');
  botao.disabled = true;
  try {
    const r = await fetch('api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dados) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(j.error || 'Não foi possível enviar agora. Tente de novo em instantes.');
    form.reset();
    msg.className = 'msg ok'; msg.textContent = 'Contato recebido. Vamos falar com você em breve.';
  } catch (err) {
    msg.className = 'msg erro'; msg.textContent = err.message;
  } finally { botao.disabled = false; }
});
