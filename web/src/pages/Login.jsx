import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, setToken } from '../api.js';

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('kevin@jurisone.local');
  const [senha, setSenha] = useState('');
  const [website, setWebsite] = useState(''); // honeypot (deve ficar vazio)
  const [err, setErr] = useState('');

  async function submit(e) {
    e.preventDefault();
    setErr('');
    try {
      const { token } = await api.post('/login', { email, senha, website });
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
        {/* honeypot anti-robô: invisível para humanos, tabindex/autocomplete off */}
        <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)}
          autoComplete="off" tabIndex={-1} aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
        <button className="btn" style={{ width: '100%', justifyContent: 'center', marginTop: 6 }}>Entrar</button>
        {err && <div className="err">{err}</div>}
      </form>
    </div>
  );
}
