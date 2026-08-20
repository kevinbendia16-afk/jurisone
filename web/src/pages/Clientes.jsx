import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { api, maskCPFCNPJ, maskTelefone } from '../api.js';
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

  const [sp] = useSearchParams();
  const load = () => api.get('/clientes').then(setList).catch(() => {});
  useEffect(() => { load(); if (sp.get('novo')) setOpen(true); }, []);

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
                  <td onClick={(e) => e.stopPropagation()}>
                    {c.email ? <a href={'mailto:' + c.email} className="clickable-link">{c.email}</a> : '—'}<br />
                    {c.telefone && <a href={'tel:' + c.telefone.replace(/\D/g, '')} className="clickable-link mono">{c.telefone}</a>}
                  </td>
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
  const [f, setF] = useState({ tipo: 'PF', status: 'ativo', nome: '', cpfCnpj: '', telefone: '', email: '',
    rg: '', nascimento: '', profissao: '', estadoCivil: '', endereco: '', cidade: '', uf: '', cep: '', tags: '', origem: '' });
  const [mais, setMais] = useState(false);
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
        <Field label="CPF / CNPJ"><input className="input" value={f.cpfCnpj}
          onChange={(e) => setF({ ...f, cpfCnpj: maskCPFCNPJ(e.target.value) })} placeholder="000.000.000-00" /></Field>
        <Field label="Telefone"><input className="input" value={f.telefone}
          onChange={(e) => setF({ ...f, telefone: maskTelefone(e.target.value) })} placeholder="(11) 91234-5678" /></Field>
      </div>
      <Field label="E-mail"><input className="input" type="email" value={f.email} onChange={set('email')} /></Field>

      <button type="button" className="btn ghost sm" style={{ marginBottom: 14 }} onClick={() => setMais((v) => !v)}>
        {mais ? '− Menos dados' : '+ Mais dados (endereço, profissão, tags…)'}
      </button>
      {mais && <>
        <div className="row-2">
          <Field label="RG"><input className="input" value={f.rg} onChange={set('rg')} /></Field>
          <Field label="Nascimento"><input className="input" type="date" value={f.nascimento} onChange={set('nascimento')} /></Field>
        </div>
        <div className="row-2">
          <Field label="Profissão"><input className="input" value={f.profissao} onChange={set('profissao')} /></Field>
          <Field label="Estado civil"><select className="input" value={f.estadoCivil} onChange={set('estadoCivil')}>
            <option value="">—</option><option>Solteiro(a)</option><option>Casado(a)</option><option>Divorciado(a)</option>
            <option>Viúvo(a)</option><option>União estável</option></select></Field>
        </div>
        <Field label="Endereço"><input className="input" value={f.endereco} onChange={set('endereco')} placeholder="Rua, nº, complemento, bairro" /></Field>
        <div className="row-2">
          <Field label="Cidade"><input className="input" value={f.cidade} onChange={set('cidade')} /></Field>
          <div className="row-2">
            <Field label="UF"><input className="input" maxLength={2} value={f.uf} onChange={(e) => setF({ ...f, uf: e.target.value.toUpperCase() })} /></Field>
            <Field label="CEP"><input className="input" value={f.cep} onChange={set('cep')} /></Field>
          </div>
        </div>
        <div className="row-2">
          <Field label="Tags (separadas por vírgula)"><input className="input" value={f.tags} onChange={set('tags')} placeholder="VIP, trabalhista, indicação" /></Field>
          <Field label="Origem"><input className="input" value={f.origem} onChange={set('origem')} placeholder="Indicação, site, Google…" /></Field>
        </div>
      </>}
      <div className="actions"><button className="btn" style={{ width: '100%', justifyContent: 'center' }} onClick={save}>Salvar cliente</button></div>
    </Modal>
  );
}
