import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api.js';
import { PageHead, Modal, Field, Empty, Badge } from '../ui.jsx';

const CAMPOS = ['nome', 'tipo', 'cpfCnpj', 'telefone', 'email', 'status', 'responsavel'];

function toCSV(rows) {
  const head = CAMPOS.join(',');
  const body = rows.map((r) => CAMPOS.map((k) => {
    const v = (r[k] ?? '').toString().replace(/"/g, '""');
    return /[",\n;]/.test(v) ? `"${v}"` : v;
  }).join(',')).join('\n');
  return head + '\n' + body;
}

function parseCSV(text) {
  const linhas = text.split(/\r?\n/).filter((l) => l.trim());
  if (linhas.length < 2) return [];
  const sep = linhas[0].includes(';') ? ';' : ',';
  const head = linhas[0].split(sep).map((h) => h.trim().replace(/^["']|["']$/g, ''));
  return linhas.slice(1).map((l) => {
    const cols = l.split(sep).map((c) => c.trim().replace(/^["']|["']$/g, ''));
    const obj = {};
    head.forEach((h, i) => { obj[h] = cols[i] || ''; });
    return obj;
  });
}

export default function Clientes() {
  const nav = useNavigate();
  const [list, setList] = useState([]);
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const fileRef = React.useRef();

  const load = () => api.get('/clientes').then(setList).catch(() => {});
  useEffect(() => { load(); }, []);

  const filtered = list.filter((c) =>
    (c.nome + (c.cpfCnpj || '') + (c.email || '')).toLowerCase().includes(q.toLowerCase()));

  function exportar() {
    const blob = new Blob([toCSV(list)], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'clientes-jurisone.csv';
    a.click();
  }
  async function importar(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const texto = await file.text();
    const clientes = parseCSV(texto);
    if (!clientes.length) { alert('CSV vazio ou inválido. Cabeçalho esperado: ' + CAMPOS.join(', ')); return; }
    const { criados } = await api.post('/clientes/import', { clientes });
    alert(`${criados} cliente(s) importado(s).`);
    e.target.value = ''; load();
  }

  return (
    <div>
      <PageHead crumb="CRM Jurídico" title="Clientes" desc="Carteira de relacionamentos do escritório."
        action={<div style={{ display: 'flex', gap: 8 }}>
          <button className="btn ghost" onClick={exportar}>↓ Exportar</button>
          <button className="btn ghost" onClick={() => fileRef.current?.click()}>↑ Importar</button>
          <input ref={fileRef} type="file" accept=".csv,text/csv" style={{ display: 'none' }} onChange={importar} />
          <button className="btn" onClick={() => setOpen(true)}>+ Novo cliente</button>
        </div>} />
      <div className="filter">🔍 <input placeholder="Filtrar por nome, documento ou e-mail"
        value={q} onChange={(e) => setQ(e.target.value)} /></div>
      <div className="panel">
        {filtered.length === 0 ? <Empty>Nenhum cliente cadastrado.</Empty> : (
          <table>
            <thead><tr><th>Cliente</th><th>Documento</th><th>Contato</th><th>Status</th><th>Responsável</th></tr></thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} className="clickable" onClick={() => nav('/clientes/' + c.id)}>
                  <td style={{ fontWeight: 600 }}>{c.nome}</td>
                  <td className="mono">{c.cpfCnpj || '—'}</td>
                  <td>{c.email || '—'}<br /><span className="mono">{c.telefone || ''}</span></td>
                  <td><Badge>{c.status}</Badge></td>
                  <td style={{ color: 'var(--muted)' }}>{c.responsavel || 'Não atribuído'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {open && <NovoCliente onClose={() => setOpen(false)} onSaved={() => { setOpen(false); load(); }} />}
    </div>
  );
}

function NovoCliente({ onClose, onSaved }) {
  const [f, setF] = useState({ tipo: 'PF', status: 'ativo', nome: '', cpfCnpj: '', telefone: '', email: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  async function save() {
    if (!f.nome.trim()) return;
    await api.post('/clientes', f);
    onSaved();
  }
  return (
    <Modal title="Novo cliente" onClose={onClose}>
      <div className="row-2">
        <Field label="Tipo"><select className="input" value={f.tipo} onChange={set('tipo')}><option>PF</option><option>PJ</option></select></Field>
        <Field label="Status"><select className="input" value={f.status} onChange={set('status')}>
          <option value="potencial">potencial</option><option value="ativo">ativo</option>
          <option value="inativo">inativo</option><option value="inadimplente">inadimplente</option></select></Field>
      </div>
      <Field label="Nome / Razão social"><input className="input" value={f.nome} onChange={set('nome')} /></Field>
      <div className="row-2">
        <Field label="CPF / CNPJ"><input className="input" value={f.cpfCnpj} onChange={set('cpfCnpj')} /></Field>
        <Field label="Telefone"><input className="input" value={f.telefone} onChange={set('telefone')} /></Field>
      </div>
      <Field label="E-mail"><input className="input" value={f.email} onChange={set('email')} /></Field>
      <div className="actions"><button className="btn" style={{ width: '100%', justifyContent: 'center' }} onClick={save}>Salvar cliente</button></div>
    </Modal>
  );
}
