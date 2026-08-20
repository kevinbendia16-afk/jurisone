import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, setToken } from '../api.js';

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('kevin@jurisone.local');
  const [senha, setSenha] = useState('');
  const [err, setErr] = useState('');

  async function submit(e) {
    e.preventDefault();
    setErr('');
    try {
      const { token } = await api.post('/login', { email, senha });
      setToken(token);
      nav('/');
    } catch (e) { setErr(e.message); }
  }

  return (
    <div className="login-wrap">
      <form className="login-card" onSubmit={submit}>
        <div className="brand">
          <div className="logo">⚖</div>
          <div><div className="name">JurisOne</div><div className="sub">Gestão Jurídica</div></div>
        </div>
        <h2>Bem-vindo</h2>
        <p className="desc">Entre na sua conta</p>
        <label className="field"><span>E-mail</span>
          <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="field"><span>Senha</span>
          <input className="input" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </label>
        <button className="btn" style={{ width: '100%', justifyContent: 'center', marginTop: 6 }}>Entrar</button>
        {err && <div className="err">{err}</div>}
      </form>
    </div>
  );
}
