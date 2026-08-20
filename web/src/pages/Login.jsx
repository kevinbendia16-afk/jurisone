import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, setToken } from '../api.js';

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('kevin@jurisone.local');
  const [senha, setSenha] = useState('');
  const [website, setWebsite] = useState(''); // honeypot (deve ficar vazio)
  const [siteKey, setSiteKey] = useState(null);
  const [captcha, setCaptcha] = useState('');
  const [err, setErr] = useState('');
  const widgetRef = useRef(null);

  // Descobre se o CAPTCHA (Turnstile) está configurado
  useEffect(() => { api.get('/config').then((c) => setSiteKey(c.turnstileSiteKey)).catch(() => {}); }, []);

  // Carrega e renderiza o widget do Turnstile quando houver chave
  useEffect(() => {
    if (!siteKey) return;
    const render = () => {
      if (window.turnstile && widgetRef.current && !widgetRef.current.dataset.rendered) {
        window.turnstile.render(widgetRef.current, { sitekey: siteKey, callback: setCaptcha });
        widgetRef.current.dataset.rendered = '1';
      }
    };
    if (window.turnstile) { render(); return; }
    const s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    s.async = true; s.defer = true; s.onload = render;
    document.head.appendChild(s);
  }, [siteKey]);

  async function submit(e) {
    e.preventDefault();
    setErr('');
    if (siteKey && !captcha) { setErr('Confirme que você não é um robô.'); return; }
    try {
      const { token } = await api.post('/login', { email, senha, website, captcha });
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
        {/* honeypot anti-robô: invisível para humanos */}
        <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)}
          autoComplete="off" tabIndex={-1} aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
        {siteKey && <div ref={widgetRef} style={{ marginBottom: 14 }} />}
        <button className="btn" style={{ width: '100%', justifyContent: 'center', marginTop: 6 }}>Entrar</button>
        {err && <div className="err">{err}</div>}
      </form>
    </div>
  );
}
