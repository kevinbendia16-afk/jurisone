// Painel de contatos do site. A autenticação (HTTP Basic) já foi feita ao abrir /site/admin;
// o navegador reenvia as credenciais automaticamente no fetch abaixo.
let leads = [];
const fmt = (d) => new Date(d).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

function celula(texto, cls) {
  const td = document.createElement('td');
  if (cls) td.className = cls;
  td.textContent = texto || '—';
  return td;
}
function desenhar() {
  const tb = document.getElementById('linhas');
  tb.innerHTML = '';
  document.getElementById('resumo').textContent = leads.length
    ? `${leads.length} contato(s) no total.` : 'Nenhum contato recebido ainda.';
  if (!leads.length) {
    const tr = document.createElement('tr'); const td = document.createElement('td');
    td.colSpan = 7; td.className = 'vazio'; td.textContent = 'Quando alguém preencher o formulário do site, aparece aqui.';
    tr.appendChild(td); tb.appendChild(tr); return;
  }
  leads.forEach((l) => {
    const tr = document.createElement('tr');
    tr.appendChild(celula(fmt(l.createdAt), 'data'));
    tr.appendChild(celula(l.nome));
    const tdEmail = document.createElement('td');
    if (l.email) { const a = document.createElement('a'); a.href = 'mailto:' + l.email; a.textContent = l.email; tdEmail.appendChild(a); } else tdEmail.textContent = '—';
    tr.appendChild(tdEmail);
    const tdTel = document.createElement('td');
    if (l.telefone) {
      const d = l.telefone.replace(/\D/g, '');
      const a = document.createElement('a'); a.href = 'https://wa.me/' + (d.length <= 11 ? '55' + d : d); a.target = '_blank'; a.rel = 'noopener'; a.textContent = l.telefone;
      tdTel.appendChild(a);
    } else tdTel.textContent = '—';
    tr.appendChild(tdTel);
    tr.appendChild(celula(l.escritorio));
    tr.appendChild(celula(l.mensagem, 'msg'));
    const tdAcao = document.createElement('td');
    const del = document.createElement('button');
    del.type = 'button'; del.className = 'btn ghost mini'; del.textContent = 'Excluir';
    del.addEventListener('click', async () => {
      if (!confirm(`Excluir o contato de ${l.nome}?`)) return;
      const r = await fetch('api/leads/' + encodeURIComponent(l.id), { method: 'DELETE', credentials: 'same-origin' });
      if (r.ok) { leads = leads.filter((x) => x.id !== l.id); desenhar(); } else alert('Não foi possível excluir. Recarregue a página.');
    });
    tdAcao.appendChild(del); tr.appendChild(tdAcao);
    tb.appendChild(tr);
  });
}
async function carregar() {
  document.getElementById('resumo').textContent = 'Carregando…';
  try {
    const r = await fetch('api/leads', { credentials: 'same-origin' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    leads = await r.json();
    desenhar();
  } catch (e) {
    document.getElementById('resumo').textContent = 'Não foi possível carregar os contatos (' + e.message + '). Recarregue a página.';
  }
}
function baixarCsv() {
  const esc = (v) => { const s = v == null ? '' : String(v); return /[";\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const cab = ['Recebido em', 'Nome', 'E-mail', 'Telefone', 'Escritório', 'Mensagem', 'Origem'];
  const linhas = leads.map((l) => [fmt(l.createdAt), l.nome, l.email, l.telefone, l.escritorio, l.mensagem, l.origem].map(esc).join(';'));
  const blob = new Blob(['﻿' + cab.join(';') + '\n' + linhas.join('\n')], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'contatos-jurisone.csv'; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
document.getElementById('atualizar').addEventListener('click', carregar);
document.getElementById('csv').addEventListener('click', baixarCsv);
carregar();
