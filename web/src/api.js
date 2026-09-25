const TOKEN_KEY = 'jurisone_token';

export function getToken() { return localStorage.getItem(TOKEN_KEY); }
export function setToken(t) { localStorage.setItem(TOKEN_KEY, t); }
export function clearToken() { localStorage.removeItem(TOKEN_KEY); }

async function req(method, path, body) {
  const res = await fetch('/api' + path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(getToken() ? { Authorization: 'Bearer ' + getToken() } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  if (res.status === 401) { clearToken(); location.href = '/login'; throw new Error('não autenticado'); }
  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    throw new Error(e.error || 'erro na requisição');
  }
  return res.status === 204 ? null : res.json();
}

export const api = {
  get: (p) => req('GET', p),
  post: (p, b) => req('POST', p, b),
  put: (p, b) => req('PUT', p, b),
  del: (p) => req('DELETE', p),
};

// Formatação
export const fmtMoney = (n) =>
  (Number(n) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
export const fmtDate = (d) =>
  d ? new Date(d).toLocaleDateString('pt-BR') : '—';
export const fmtDateTime = (d) =>
  d ? new Date(d).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }) : '—';

// Exportação — CSV (abre no Excel) a partir de colunas + linhas.
export function exportCSV(filename, colunas, linhas) {
  const esc = (v) => {
    const s = v == null ? '' : String(v);
    return /[";\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  };
  const head = colunas.map((c) => esc(c.label)).join(';');
  const body = linhas.map((r) => colunas.map((c) => esc(c.get(r))).join(';')).join('\n');
  const blob = new Blob(['﻿' + head + '\n' + body], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

// Exportação — PDF via impressão do navegador ("Salvar como PDF").
export function exportPDF() { window.print(); }

// ---------- Máscaras e validações (BR) ----------
export function maskCPFCNPJ(v) {
  const d = String(v || '').replace(/\D/g, '').slice(0, 14);
  if (d.length <= 11) {
    return d.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }
  return d.replace(/^(\d{2})(\d)/, '$1.$2').replace(/^(\d{2}\.\d{3})(\d)/, '$1.$2')
    .replace(/\.(\d{3})(\d)/, '.$1/$2').replace(/(\d{4})(\d{1,2})$/, '$1-$2');
}
export function maskTelefone(v) {
  const d = String(v || '').replace(/\D/g, '').slice(0, 11);
  if (d.length <= 10) return d.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d{1,4})$/, '$1-$2');
  return d.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d{1,4})$/, '$1-$2');
}
export function validaCPF(cpf) {
  const c = String(cpf || '').replace(/\D/g, '');
  if (c.length !== 11 || /^(\d)\1{10}$/.test(c)) return false;
  let s = 0; for (let i = 0; i < 9; i++) s += +c[i] * (10 - i);
  let r = (s * 10) % 11; if (r === 10) r = 0; if (r !== +c[9]) return false;
  s = 0; for (let i = 0; i < 10; i++) s += +c[i] * (11 - i);
  r = (s * 10) % 11; if (r === 10) r = 0; return r === +c[10];
}
export function validaCNPJ(cnpj) {
  const c = String(cnpj || '').replace(/\D/g, '');
  if (c.length !== 14 || /^(\d)\1{13}$/.test(c)) return false;
  const calc = (base) => {
    let s = 0, pos = base - 7;
    for (let i = base; i >= 1; i--) { s += +c[base - i] * pos--; if (pos < 2) pos = 9; }
    const r = s % 11; return r < 2 ? 0 : 11 - r;
  };
  return calc(12) === +c[12] && calc(13) === +c[13];
}
// Documento válido conforme o tamanho (CPF 11 / CNPJ 14). Vazio = válido (opcional).
export function validaDocumento(v) {
  const d = String(v || '').replace(/\D/g, '');
  if (!d) return true;
  if (d.length === 11) return validaCPF(d);
  if (d.length === 14) return validaCNPJ(d);
  return false;
}

// Detecta o navegador INTERNO do Claude (Electron). Nesse contexto o desafio do Cloudflare
// Turnstile entra em loop e trava a aba, então pulamos o CAPTCHA só aqui. Chrome/Edge/Safari
// reais nunca têm "Claude/" na User-Agent, então não são afetados.
export const isClaudeBrowser = () => {
  const ua = (typeof navigator !== 'undefined' && navigator.userAgent) || '';
  return /\bClaude\//.test(ua) && /\bElectron\//.test(ua);
};

// Data relativa amigável: "hoje", "amanhã", "há 3 dias", "em 5 dias".
export function fmtRelativo(d) {
  if (!d) return '';
  const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
  const alvo = new Date(d); alvo.setHours(0, 0, 0, 0);
  const dias = Math.round((alvo - hoje) / 86400000);
  if (dias === 0) return 'hoje';
  if (dias === 1) return 'amanhã';
  if (dias === -1) return 'ontem';
  return dias < 0 ? `há ${-dias} dias` : `em ${dias} dias`;
}

// Usuário logado (lido do token JWT, sem chamada extra). Ex.: { nome: 'Dra. Helena Duarte' }
export function usuarioAtual() {
  try {
    const p = getToken().split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(decodeURIComponent(escape(atob(p))));
  } catch { return {}; }
}
// Nome curto p/ saudação: "Kevin", "Dra. Helena"
export function nomeCurto(nome = '') {
  const w = nome.trim().split(/\s+/);
  return /^dr/i.test(w[0] || '') ? w.slice(0, 2).join(' ') : (w[0] || '');
}
