// Site JurisOne — abas "Na prática", central de tutoriais e formulário de contato.

// ---------- Abas ----------
document.querySelectorAll('.aba').forEach((b) => b.addEventListener('click', () => {
  document.querySelectorAll('.aba').forEach((x) => x.classList.toggle('on', x === b));
  document.querySelectorAll('.painel').forEach((p) => p.classList.toggle('on', p.dataset.painel === b.dataset.aba));
}));

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
  { cat: 'Documentos', t: 'Gerar uma petição a partir de modelo', p: ['Abra Modelos de peças e crie um modelo com {{cliente.nome}} e {{processo.numeroCnj}}.', 'Clique em “Usar modelo” e escolha o cliente.', 'Copie o texto pronto ou baixe o arquivo.'] },
  { cat: 'Documentos', t: 'Anexar procuração ao processo', p: ['Abra o processo e vá na aba Documentos.', 'Escolha a categoria Procuração.', 'Clique em “Anexar documento” e selecione o arquivo.'] },
];
const cats = ['Todos', ...new Set(TUTORIAIS.map((t) => t.cat))];
let catAtual = 'Todos';
const elChips = document.getElementById('chips');
const elTuts = document.getElementById('tuts');
const elBusca = document.getElementById('busca');
const elVazio = document.getElementById('vazio');

function desenharChips() {
  elChips.innerHTML = '';
  cats.forEach((c) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip' + (c === catAtual ? ' on' : '');
    b.textContent = c;
    b.addEventListener('click', () => { catAtual = c; desenharChips(); desenharTuts(); });
    elChips.appendChild(b);
  });
}
function desenharTuts() {
  const q = elBusca.value.trim().toLowerCase();
  const lista = TUTORIAIS.filter((t) => (catAtual === 'Todos' || t.cat === catAtual)
    && (!q || (t.t + ' ' + t.p.join(' ') + ' ' + t.cat).toLowerCase().includes(q)));
  elTuts.innerHTML = '';
  lista.forEach((t) => {
    const a = document.createElement('article');
    a.className = 'tut';
    const small = document.createElement('small'); small.textContent = t.cat;
    const h = document.createElement('h3'); h.textContent = t.t;
    const ol = document.createElement('ol');
    t.p.forEach((passo) => { const li = document.createElement('li'); li.textContent = passo; ol.appendChild(li); });
    a.append(small, h, ol);
    elTuts.appendChild(a);
  });
  elVazio.hidden = lista.length > 0;
}
elBusca.addEventListener('input', desenharTuts);
desenharChips();
desenharTuts();

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
    if (!r.ok) throw new Error(j.error || 'Não foi possível enviar agora.');
    form.reset();
    msg.className = 'msg ok'; msg.textContent = 'Contato recebido. Vamos falar com você em breve.';
  } catch (err) {
    msg.className = 'msg erro'; msg.textContent = err.message;
  } finally { botao.disabled = false; }
});
