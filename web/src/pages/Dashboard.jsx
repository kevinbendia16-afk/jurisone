import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api, fmtMoney, fmtDate } from '../api.js';
import { PageHead } from '../ui.jsx';
import { BarChart, Donut } from '../Charts.jsx';

export default function Dashboard() {
  const [d, setD] = useState(null);
  const [c, setC] = useState(null);
  const [prazos, setPrazos] = useState([]);
  useEffect(() => {
    api.get('/dashboard').then(setD).catch(() => {});
    api.get('/dashboard/charts').then(setC).catch(() => {});
    api.get('/prazos').then((r) => setPrazos(r.filter((p) => p.status === 'pendente'))).catch(() => {});
  }, []);
  const hora = new Date().getHours();
  const saud = hora < 12 ? 'Bom dia' : hora < 18 ? 'Boa tarde' : 'Boa noite';

  return (
    <div>
      <PageHead title={`${saud}, Kevin.`} desc="Veja o que precisa da sua atenção hoje." />
      {!d ? <div className="empty">Carregando…</div> : (
        <>
          <div className="panel" style={{ padding: '18px 22px', marginBottom: 16, display: 'flex', gap: 34, alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="crumb" style={{ margin: 0 }}>Hoje</div>
            <Metric n={d.tarefasPendentes} label="tarefas" />
            <Metric n={d.prazosPendentes} label="prazos" />
            <Metric n={d.clientes} label="clientes" />
            <Metric n={d.processos} label="processos" />
            <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
              <div className="crumb" style={{ margin: 0 }}>A receber</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 24 }}>{fmtMoney(d.aReceber)}</div>
            </div>
          </div>

          <div className="grid cards-3" style={{ marginBottom: 16 }}>
            <div className="card"><div className="label">Receita do escritório (realizada)</div>
              <div className="value money green">{fmtMoney(d.receitaEscritorio)}</div></div>
            <div className="card"><div className="label">Em custódia (a repassar)</div>
              <div className="value money">{fmtMoney(d.emCustodia)}</div></div>
            <div className="card"><div className="label">Prazos pendentes</div>
              <div className="value">{d.prazosPendentes}</div></div>
          </div>

          <div className="grid cards-2" style={{ marginBottom: 16 }}>
            <div className="card">
              <div className="label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Central de Atenção</span><span>{prazos.length} alertas</span></div>
              {prazos.length === 0
                ? <div style={{ color: 'var(--muted)', padding: '24px 0', textAlign: 'center' }}>Tudo em dia. Nada exige atenção agora.</div>
                : <div className="timeline" style={{ marginTop: 12 }}>
                    {prazos.slice(0, 5).map((p) => (
                      <div className="item" key={p.id}><div className="dot" style={{ background: 'var(--amber)' }} />
                        <div><div className="when">Vence {fmtDate(p.dataFatal)}</div>{p.titulo}</div></div>
                    ))}
                  </div>}
            </div>
            <div className="card">
              <div className="label">Receitas × Despesas (6 meses)</div>
              {c ? <BarChart data={c.receitasDespesas} /> : <div style={{ color: 'var(--muted)' }}>Carregando…</div>}
            </div>
          </div>

          <div className="grid cards-2">
            <div className="card"><div className="label">Processos por área</div>
              {c ? <Donut data={c.processosPorArea} /> : null}</div>
            <div className="card"><div className="label">Processos por status</div>
              {c ? <Donut data={c.processosPorStatus} /> : null}</div>
          </div>
        </>
      )}
    </div>
  );
}

function Metric({ n, label }) {
  return (
    <div>
      <span style={{ fontFamily: 'var(--mono)', fontWeight: 700, marginRight: 8 }}>{String(n).padStart(2, '0')}</span>
      <span style={{ color: 'var(--muted)' }}>{label}</span>
    </div>
  );
}
