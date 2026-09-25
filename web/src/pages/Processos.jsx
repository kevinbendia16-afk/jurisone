import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { api } from '../api.js';
import { PageHead, Modal, Field, Empty, Badge } from '../ui.jsx';

export default function Processos() {
  const nav = useNavigate();
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [importar, setImportar] = useState(false);
  const [sinc, setSinc] = useState('');
  const [sp] = useSearchParams();
  const load = () => api.get('/processos').then(setList).catch(() => {});
  useEffect(() => { load(); if (sp.get('novo')) setOpen(true); }, []);

  async function sincronizarTodos() {
    if (!confirm('Buscar andamentos novos de todos os processos com número CNJ na base do CNJ (DataJud)? Pode levar alguns segundos.')) return;
    setSinc('Sincronizando… não feche a página.');
    try {
      const r = await api.post('/processos/sincronizar-todos', {});
      setSinc(`✓ ${r.sincronizados}/${r.processos} processos verificados · ${r.novasMovimentacoes} andamento(s) novo(s)${r.erros ? ` · ${r.erros} com erro` : ''}.`);
    } catch { setSinc('Não foi possível sincronizar agora. Tente novamente mais tarde.'); }
  }

  return (
    <div>
      <PageHead crumb="Gestão Processual" title="Processos" desc="Controle processual centralizado e vinculado aos clientes."
        action={<div style={{ display: 'flex', gap: 8 }}>
          <button className="btn ghost" onClick={sincronizarTodos} title="Buscar andamentos novos de todos os processos na base nacional do CNJ">🔄 Sincronizar todos</button>
          <button className="btn ghost" onClick={() => setImportar(true)} title="Importar vários processos de uma vez pelo número CNJ">📥 Importar em massa</button>
          <button className="btn" onClick={() => setOpen(true)}>+ Novo processo</button>
        </div>} />
      {sinc && <div className="panel" style={{ padding: '12px 16px', marginBottom: 16, color: 'var(--muted)' }}>{sinc}</div>}
      <div className="panel">
        {list.length === 0 ? <Empty>Nenhum processo cadastrado.</Empty> : (
          <table>
            <thead><tr><th>Processo</th><th>Cliente</th><th>Área</th><th>Status</th><th>Prioridade</th></tr></thead>
            <tbody>
              {list.map((p) => (
                <tr key={p.id} className="clickable" onClick={() => nav('/processos/' + p.id)}>
                  <td style={{ fontWeight: 600 }}>{p.titulo}<br /><span className="mono">{p.numeroCnj || ''}</span></td>
                  <td style={{ color: 'var(--muted)' }}>{p.cliente?.nome}</td>
                  <td>{p.area}</td>
                  <td><Badge>{p.status}</Badge></td>
                  <td><Badge>{p.prioridade}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {open && <NovoProcesso onClose={() => setOpen(false)} onSaved={() => { setOpen(false); load(); }} />}
      {importar && <Importar onClose={() => setImportar(false)} onSaved={() => { setImportar(false); load(); }} />}
    </div>
  );
}

function Importar({ onClose, onSaved }) {
  const [clientes, setClientes] = useState([]);
  const [texto, setTexto] = useState('');
  const [clienteId, setClienteId] = useState('');
  const [rodando, setRodando] = useState(false);
  const [res, setRes] = useState(null);
  useEffect(() => { api.get('/clientes').then(setClientes).catch(() => {}); }, []);

  // Cada linha: "numeroCNJ" ou "numeroCNJ ; Nome do Cliente" (aceita ; , ou tab como separador)
  const itens = texto.split(/\r?\n/).map((l) => l.trim()).filter(Boolean).map((l) => {
    const [cnj, ...resto] = l.split(/\s*[;,\t]\s*/);
    return { numeroCnj: cnj.trim(), cliente: resto.join(' ').trim() || undefined };
  });

  async function importar() {
    if (!itens.length) return;
    setRodando(true); setRes(null);
    try {
      const r = await api.post('/processos/importar', { itens, clienteId: clienteId || null });
      setRes(r);
    } catch { setRes({ erro: 'Não foi possível importar agora. Tente novamente.' }); }
    setRodando(false);
  }

  return (
    <Modal title="Importar processos em massa" onClose={onClose}>
      {!res ? <>
        <p style={{ color: 'var(--muted)', fontSize: 13.5, marginTop: 0 }}>
          Cole os <b>números CNJ</b> dos processos, um por linha. O sistema cria cada processo e puxa
          <b> todo o histórico</b> da base nacional do CNJ (DataJud) automaticamente.
        </p>
        <Field label="Vincular todos ao cliente (opcional)">
          <select className="input" value={clienteId} onChange={(e) => setClienteId(e.target.value)}>
            <option value="">— informar por linha / a identificar —</option>
            {clientes.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}
          </select>
        </Field>
        <Field label="Processos (um por linha)">
          <textarea className="input" rows={9} value={texto} onChange={(e) => setTexto(e.target.value)}
            style={{ resize: 'vertical', fontFamily: 'var(--mono)', fontSize: 13 }}
            placeholder={'0001234-56.2026.8.26.0100\n0007654-32.2025.8.26.0100 ; João da Silva\n5001234-00.2024.4.03.6100 ; Maria Souza'} />
        </Field>
        <div className="panel" style={{ padding: 12, marginBottom: 14, color: 'var(--muted)', fontSize: 12.5 }}>
          Dica: para separar o cliente, use <b>;</b> depois do número. Ex.: <span className="mono">0001234-56.2026.8.26.0100 ; João da Silva</span>.
          Sem cliente informado, o processo entra como <b>"Cliente a identificar"</b> (dá pra ajustar depois).
          <br />Detectados agora: <b>{itens.length}</b> processo(s).
        </div>
        <button className="btn" style={{ width: '100%', justifyContent: 'center' }} disabled={rodando || !itens.length} onClick={importar}>
          {rodando ? 'Importando e puxando históricos… não feche' : `Importar ${itens.length || ''} processo(s)`}
        </button>
      </> : <>
        {res.erro ? <p style={{ color: 'var(--red)' }}>{res.erro}</p> : <>
          <div className="panel" style={{ padding: 14, marginBottom: 14 }}>
            <b>{res.criados}</b> de {res.total} processo(s) importado(s) · <b>{res.movimentos}</b> andamento(s) puxado(s) do CNJ.
          </div>
          <div style={{ maxHeight: 260, overflow: 'auto' }}>
            <table><tbody>
              {res.resultados.map((r, i) => (
                <tr key={i}>
                  <td className="mono" style={{ fontSize: 12 }}>{r.numeroCnj}</td>
                  <td style={{ fontSize: 12.5 }}>
                    {r.ok
                      ? <span style={{ color: 'var(--green)' }}>✓ {r.classe || 'criado'}{r.encontrado ? ` · ${r.movimentos} andamentos` : r.pendente ? ' · histórico será sincronizado em breve' : ' · sem histórico no CNJ ainda'}</span>
                      : <span style={{ color: 'var(--muted)' }}>— {r.erro}</span>}
                  </td>
                </tr>
              ))}
            </tbody></table>
          </div>
        </>}
        <button className="btn" style={{ width: '100%', justifyContent: 'center', marginTop: 14 }} onClick={onSaved}>Concluir</button>
      </>}
    </Modal>
  );
}

function NovoProcesso({ onClose, onSaved }) {
  const [clientes, setClientes] = useState([]);
  const [f, setF] = useState({ clienteId: '', numeroCnj: '', area: 'Cível', titulo: '', status: 'ativo', prioridade: 'normal',
    poloAtivo: '', poloPassivo: '', advContrario: '', vara: '', comarca: '', orgao: '', valorCausa: '' });
  const [mais, setMais] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  useEffect(() => { api.get('/clientes').then(setClientes).catch(() => {}); }, []);
  async function save() {
    if (!f.clienteId || !f.titulo.trim()) return;
    await api.post('/processos', f);
    onSaved();
  }
  return (
    <Modal title="Novo processo" onClose={onClose}>
      <Field label="Cliente">
        <select className="input" value={f.clienteId} onChange={set('clienteId')}>
          <option value="">Selecione</option>
          {clientes.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}
        </select>
      </Field>
      <div className="row-2">
        <Field label="Número CNJ"><input className="input" value={f.numeroCnj} onChange={set('numeroCnj')} /></Field>
        <Field label="Área jurídica"><input className="input" value={f.area} onChange={set('area')} /></Field>
      </div>
      <Field label="Título / assunto"><input className="input" value={f.titulo} onChange={set('titulo')} /></Field>
      <div className="row-2">
        <Field label="Status"><select className="input" value={f.status} onChange={set('status')}>
          <option value="consulta">consulta</option><option value="ativo">ativo</option>
          <option value="recurso">recurso</option><option value="encerrado">encerrado</option></select></Field>
        <Field label="Prioridade"><select className="input" value={f.prioridade} onChange={set('prioridade')}>
          <option value="normal">normal</option><option value="alta">alta</option><option value="urgente">urgente</option></select></Field>
      </div>

      <button type="button" className="btn ghost sm" style={{ marginBottom: 14 }} onClick={() => setMais((v) => !v)}>
        {mais ? '− Menos dados' : '+ Partes, vara/comarca e valor da causa'}
      </button>
      {mais && <>
        <div className="row-2">
          <Field label="Polo ativo (autor)"><input className="input" value={f.poloAtivo} onChange={set('poloAtivo')} /></Field>
          <Field label="Polo passivo (réu)"><input className="input" value={f.poloPassivo} onChange={set('poloPassivo')} /></Field>
        </div>
        <Field label="Advogado da parte contrária"><input className="input" value={f.advContrario} onChange={set('advContrario')} /></Field>
        <div className="row-2">
          <Field label="Vara"><input className="input" value={f.vara} onChange={set('vara')} placeholder="Ex.: 3ª Vara Cível" /></Field>
          <Field label="Comarca"><input className="input" value={f.comarca} onChange={set('comarca')} /></Field>
        </div>
        <div className="row-2">
          <Field label="Órgão / Tribunal"><input className="input" value={f.orgao} onChange={set('orgao')} placeholder="Ex.: TJSP" /></Field>
          <Field label="Valor da causa (R$)"><input className="input" type="number" value={f.valorCausa} onChange={set('valorCausa')} /></Field>
        </div>
      </>}
      <div className="actions"><button className="btn" style={{ width: '100%', justifyContent: 'center' }} onClick={save}>Salvar processo</button></div>
    </Modal>
  );
}
