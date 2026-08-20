import React, { useState } from 'react';
import { api } from '../api.js';
import { PageHead, Field } from '../ui.jsx';

export default function Configuracoes() {
  const [f, setF] = useState({ senhaAtual: '', novaSenha: '', confirma: '' });
  const [msg, setMsg] = useState(null);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function salvar() {
    setMsg(null);
    if (f.novaSenha.length < 8) return setMsg({ tipo: 'erro', txt: 'A nova senha precisa ter ao menos 8 caracteres.' });
    if (f.novaSenha !== f.confirma) return setMsg({ tipo: 'erro', txt: 'A confirmação não corresponde à nova senha.' });
    try {
      await api.post('/change-password', { senhaAtual: f.senhaAtual, novaSenha: f.novaSenha });
      setMsg({ tipo: 'ok', txt: 'Senha alterada com sucesso!' });
      setF({ senhaAtual: '', novaSenha: '', confirma: '' });
    } catch (e) { setMsg({ tipo: 'erro', txt: e.message }); }
  }

  return (
    <div>
      <PageHead crumb="Conta" title="Configurações" desc="Segurança e preferências da sua conta." />
      <div className="panel" style={{ padding: 24, maxWidth: 520 }}>
        <div style={{ fontWeight: 600, marginBottom: 16 }}>🔒 Trocar senha</div>
        <Field label="Senha atual"><input className="input" type="password" value={f.senhaAtual} onChange={set('senhaAtual')} /></Field>
        <Field label="Nova senha (mín. 8 caracteres)"><input className="input" type="password" value={f.novaSenha} onChange={set('novaSenha')} /></Field>
        <Field label="Confirmar nova senha"><input className="input" type="password" value={f.confirma} onChange={set('confirma')} /></Field>
        <button className="btn" onClick={salvar}>Salvar nova senha</button>
        {msg && <div className={msg.tipo === 'ok' ? 'warn' : 'err'} style={{ marginTop: 14, textAlign: 'left',
          ...(msg.tipo === 'ok' ? { background: 'var(--green-bg)', color: 'var(--green)', border: '1px solid rgba(52,211,153,.25)', borderRadius: 10, padding: '12px 14px' } : {}) }}>{msg.txt}</div>}
      </div>
    </div>
  );
}
