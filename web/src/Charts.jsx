import React from 'react';
import { fmtMoney } from './api.js';

const PALETTE = ['#8b9cff', '#34d399', '#fbbf24', '#f87171', '#a78bfa', '#38bdf8', '#fb923c'];

// Gráfico de barras agrupadas: receitas x despesas
export function BarChart({ data }) {
  const max = Math.max(1, ...data.flatMap((d) => [d.receitas, d.despesas]));
  const W = 520, H = 200, pad = 28, bw = (W - pad * 2) / data.length;
  return (
    <div style={{ overflowX: 'auto' }}>
      <svg viewBox={`0 0 ${W} ${H + 24}`} width="100%" style={{ maxWidth: 560 }}>
        {[0.25, 0.5, 0.75, 1].map((t) => (
          <line key={t} x1={pad} x2={W - pad} y1={H - t * (H - pad)} y2={H - t * (H - pad)}
            stroke="var(--border)" strokeWidth="1" />
        ))}
        {data.map((d, i) => {
          const x = pad + i * bw;
          const rh = (d.receitas / max) * (H - pad);
          const dh = (d.despesas / max) * (H - pad);
          const bar = bw * 0.28;
          return (
            <g key={i}>
              <rect x={x + bw / 2 - bar - 3} y={H - rh} width={bar} height={rh} rx="3" fill="#34d399" />
              <rect x={x + bw / 2 + 3} y={H - dh} width={bar} height={dh} rx="3" fill="#f87171" />
              <text x={x + bw / 2} y={H + 16} textAnchor="middle" fontSize="11" fill="var(--muted)">{d.label}</text>
            </g>
          );
        })}
      </svg>
      <div style={{ display: 'flex', gap: 18, marginTop: 8, fontSize: 12, color: 'var(--muted)' }}>
        <Legend color="#34d399" label="Receitas" />
        <Legend color="#f87171" label="Despesas" />
      </div>
    </div>
  );
}

// Donut / rosca
export function Donut({ data, money }) {
  const total = data.reduce((s, d) => s + d.valor, 0) || 1;
  const R = 70, r = 44, cx = 90, cy = 90;
  let acc = 0;
  const arcs = data.map((d, i) => {
    const frac = d.valor / total;
    const a0 = acc * 2 * Math.PI - Math.PI / 2;
    acc += frac;
    const a1 = acc * 2 * Math.PI - Math.PI / 2;
    const large = frac > 0.5 ? 1 : 0;
    const x0 = cx + R * Math.cos(a0), y0 = cy + R * Math.sin(a0);
    const x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1);
    const xi0 = cx + r * Math.cos(a1), yi0 = cy + r * Math.sin(a1);
    const xi1 = cx + r * Math.cos(a0), yi1 = cy + r * Math.sin(a0);
    return { d: `M${x0},${y0} A${R},${R} 0 ${large} 1 ${x1},${y1} L${xi0},${yi0} A${r},${r} 0 ${large} 0 ${xi1},${yi1} Z`,
      color: PALETTE[i % PALETTE.length], label: d.label, valor: d.valor };
  });
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
      <svg viewBox="0 0 180 180" width="150" height="150">
        {data.length === 0
          ? <circle cx={cx} cy={cy} r={(R + r) / 2} fill="none" stroke="var(--border)" strokeWidth={R - r} />
          : arcs.map((a, i) => <path key={i} d={a.d} fill={a.color} />)}
        <text x={cx} y={cy + 5} textAnchor="middle" fontSize="22" fontWeight="700" fill="var(--text)">{total}</text>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {arcs.map((a, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: a.color }} />
            <span style={{ textTransform: 'capitalize' }}>{a.label}</span>
            <span style={{ color: 'var(--muted)', marginLeft: 'auto' }}>{money ? fmtMoney(a.valor) : a.valor}</span>
          </div>
        ))}
        {data.length === 0 && <span style={{ color: 'var(--muted)', fontSize: 13 }}>Sem dados ainda.</span>}
      </div>
    </div>
  );
}

function Legend({ color, label }) {
  return <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
    <span style={{ width: 10, height: 10, borderRadius: 3, background: color }} />{label}</span>;
}
