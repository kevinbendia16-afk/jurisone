import React from 'react';

export function PageHead({ crumb, title, desc, action }) {
  return (
    <div className="page-head">
      <div>
        {crumb && <div className="crumb">{crumb}</div>}
        <h1>{title}</h1>
        {desc && <p className="desc">{desc}</p>}
      </div>
      {action}
    </div>
  );
}

export function Modal({ title, onClose, children }) {
  return (
    <div className="overlay" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <h2 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {title}
          <button className="btn ghost sm" onClick={onClose}>✕</button>
        </h2>
        {children}
      </div>
    </div>
  );
}

export function Field({ label, children }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  );
}

export function Empty({ children }) {
  return <div className="empty">📭<div style={{ marginTop: 10 }}>{children}</div></div>;
}

const STATUS = {
  ativo: 'green', recebido: 'green', repassado: 'green', pago: 'green', concluida: 'green', cumprido: 'green',
  aguardando: 'amber', pendente: 'amber', aberto: 'amber', atrasado: 'amber', em_andamento: 'amber',
};
export function Badge({ children }) {
  const key = String(children || '').toLowerCase();
  const cls = STATUS[key] || 'gray';
  const label = key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ');
  return <span className={'badge ' + cls}>{label}</span>;
}
