import React, { useEffect, useState } from 'react';
import { api, fmtDate } from '../api.js';
import { PageHead, Field, Empty, Badge } from '../ui.jsx';

export default function Prazos() {
  const [list, setList] = useState([]);
  const load = () => api.get('/prazos').then(setList).catch(() => {});
  useEffect(() => { load(); }, []);

  const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
  const vencidos = list.filter((p) => p.status === 'pendente' && new Date(p.dataFatal) < hoje).length;
  const pendentes = list.filter((p) => p.status === 'pendente').length;

  return (
    <div>
      <PageHead crumb="Controle de Prazos" title="Prazos processuais" desc="Monitoramento de vencimentos e a calculadora do CPC." />
      <div className="grid cards-3" style={{ marginBottom: 16 }}>
        <div className="card"><div className="label">Vencidos</div><div className="value">{vencidos}</div></div>
        <div className="card"><div className="label">Pendentes</div><div className="value">{pendentes}</div></div>
        <div className="card"><div className="label">Total</div><div className="value">{list.length}</div></div>
      </div>

      <div className="panel" style={{ marginBottom: 16 }}>
        {list.length === 0 ? <Empty>Nenhum prazo cadastrado.</Empty> : (
          <table>
            <thead><tr><th>Prazo</th><th>Data fatal</th><th>Tipo</th><th>Status</th></tr></thead>
            <tbody>{list.map((p) => (
              <tr key={p.id}><td style={{ fontWeight: 600 }}>{p.titulo}</td>
                <td className="mono">{fmtDate(p.dataFatal)}</td><td>{p.tipoContagem}</td><td><Badge>{p.status}</Badge></td></tr>
            ))}</tbody>
          </table>
        )}
      </div>

      <Calculadora onSaved={load} />
    </div>
  );
}

function Calculadora({ onSaved }) {
  const hoje = new Date().toISOString().slice(0, 10);
  const [f, setF] = useState({ dataIntimacao: hoje, dias: 15, tipo: 'uteis', titulo: '' });
  const [res, setRes] = useState(null);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function calcular() {
    const r = await api.post('/prazos/calcular', { dataIntimacao: f.dataIntimacao, dias: Number(f.dias), tipo: f.tipo });
    setRes(r);
  }
  async function salvar() {
    if (!res) return;
    await api.post('/prazos', {
      titulo: f.titulo || 'Prazo calculado', dataInicio: res.dataInicio, dataFatal: res.dataFatal,
      dias: Number(f.dias), tipoContagem: f.tipo,
    });
    setRes(null); setF({ ...f, titulo: '' }); onSaved();
  }

  return (
    <div className="panel" style={{ padding: 22 }}>
      <div style={{ fontWeight: 600, marginBottom: 16 }}>🧮 Calculadora de prazos</div>
      <div className="row-2">
        <Field label="Data da intimação/publicação"><input className="input" type="date" value={f.dataIntimacao} onChange={set('dataIntimacao')} /></Field>
        <Field label="Quantidade de dias"><input className="input" type="number" value={f.dias} onChange={set('dias')} /></Field>
      </div>
      <div className="row-2">
        <Field label="Tipo de contagem"><select className="input" value={f.tipo} onChange={set('tipo')}>
          <option value="uteis">Dias úteis (padrão)</option><option value="corridos">Dias corridos</option></select></Field>
        <Field label="Título (opcional)"><input className="input" placeholder="Ex.: Contestação" value={f.titulo} onChange={set('titulo')} /></Field>
      </div>
      <button className="btn ghost" onClick={calcular}>Calcular</button>
      {res && (
        <div style={{ marginTop: 18 }}>
          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="label" style={{ margin: 0 }}>Data fatal do prazo</span>
            <span className="value money" style={{ color: 'var(--green)' }}>{fmtDate(res.dataFatal)}</span>
          </div>
          <div className="warn" style={{ marginTop: 12 }}>⚠ {res.aviso}</div>
          <button className="btn" style={{ marginTop: 12 }} onClick={salvar}>Salvar como prazo</button>
        </div>
      )}
    </div>
  );
}
