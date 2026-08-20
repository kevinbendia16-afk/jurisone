import React, { useEffect, useRef, useState } from 'react';
import { api, fmtDate } from './api.js';
import { Empty } from './ui.jsx';

const CATEGORIAS = {
  procuracao: 'Procuração', peticao: 'Petição', contrato: 'Contrato',
  comprovante: 'Comprovante', decisao: 'Decisão/Sentença', outro: 'Outro',
};
const MAX = 8 * 1024 * 1024;

function tamanhoLegivel(b) {
  if (b < 1024) return b + ' B';
  if (b < 1024 * 1024) return (b / 1024).toFixed(0) + ' KB';
  return (b / 1024 / 1024).toFixed(1) + ' MB';
}
function iconeArquivo(mime = '', nome = '') {
  const n = nome.toLowerCase();
  if (mime.includes('pdf') || n.endsWith('.pdf')) return '📕';
  if (mime.startsWith('image/')) return '🖼';
  if (mime.includes('word') || n.match(/\.docx?$/)) return '📘';
  if (mime.includes('sheet') || n.match(/\.xlsx?$/) || n.endsWith('.csv')) return '📗';
  return '📄';
}

// Componente reutilizável: passe processoId OU clienteId.
export default function Documentos({ processoId, clienteId }) {
  const [docs, setDocs] = useState([]);
  const [cat, setCat] = useState('peticao');
  const [erro, setErro] = useState('');
  const [enviando, setEnviando] = useState(false);
  const fileRef = useRef(null);

  const query = processoId ? '?processoId=' + processoId : clienteId ? '?clienteId=' + clienteId : '';
  const load = () => api.get('/documentos' + query).then(setDocs).catch(() => {});
  useEffect(() => { load(); }, [processoId, clienteId]);

  async function enviar(e) {
    setErro('');
    const file = e.target.files?.[0];
    if (fileRef.current) fileRef.current.value = '';
    if (!file) return;
    if (file.size > MAX) { setErro('Arquivo acima de 8MB. Reduza ou divida o arquivo.'); return; }
    setEnviando(true);
    try {
      const base64 = await new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(String(r.result).split(',')[1]);
        r.onerror = rej;
        r.readAsDataURL(file);
      });
      await api.post('/documentos', {
        nome: file.name, categoria: cat, mime: file.type || null,
        tamanho: file.size, conteudo: base64, processoId, clienteId,
      });
      load();
    } catch (err) {
      setErro('Não foi possível enviar. ' + (err.message || ''));
    } finally { setEnviando(false); }
  }

  async function baixar(doc) {
    try {
      const full = await api.get('/documentos/' + doc.id);
      const a = document.createElement('a');
      a.href = `data:${full.mime || 'application/octet-stream'};base64,${full.conteudo}`;
      a.download = full.nome;
      a.click();
    } catch { alert('Não foi possível baixar o documento.'); }
  }

  async function excluir(doc) {
    if (!confirm(`Excluir "${doc.nome}"?`)) return;
    await api.del('/documentos/' + doc.id);
    load();
  }

  return (
    <div>
      <div className="panel" style={{ padding: 16, marginBottom: 16, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        <select className="input" style={{ width: 180 }} value={cat} onChange={(e) => setCat(e.target.value)}>
          {Object.entries(CATEGORIAS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        <input ref={fileRef} type="file" style={{ display: 'none' }} onChange={enviar}
          accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.png,.jpg,.jpeg,.txt" />
        <button className="btn" disabled={enviando} onClick={() => fileRef.current?.click()}>
          {enviando ? 'Enviando…' : '⬆ Anexar documento'}</button>
        <span style={{ color: 'var(--muted)', fontSize: 12 }}>PDF, Word, Excel, imagens — até 8MB.</span>
        {erro && <span style={{ color: 'var(--red)', fontSize: 13, width: '100%' }}>{erro}</span>}
      </div>

      <div className="panel">
        {docs.length === 0 ? <Empty>Nenhum documento anexado ainda.</Empty> : (
          <table>
            <thead><tr><th>Documento</th><th>Categoria</th><th>Tamanho</th><th>Data</th><th></th></tr></thead>
            <tbody>{docs.map((doc) => (
              <tr key={doc.id} className="clickable" onClick={() => baixar(doc)}>
                <td style={{ fontWeight: 600 }}>{iconeArquivo(doc.mime, doc.nome)} {doc.nome}</td>
                <td style={{ color: 'var(--muted)' }}>{CATEGORIAS[doc.categoria] || doc.categoria}</td>
                <td className="mono" style={{ fontSize: 12 }}>{tamanhoLegivel(doc.tamanho)}</td>
                <td className="mono" style={{ fontSize: 12 }}>{fmtDate(doc.createdAt)}</td>
                <td onClick={(e) => e.stopPropagation()} style={{ whiteSpace: 'nowrap' }}>
                  <button className="btn ghost sm" onClick={() => baixar(doc)}>⬇ Baixar</button>
                  <button className="btn ghost sm" onClick={() => excluir(doc)} style={{ color: 'var(--red)', marginLeft: 6 }}>🗑</button>
                </td>
              </tr>
            ))}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}
