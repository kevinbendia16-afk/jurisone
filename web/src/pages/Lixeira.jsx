import React, { useEffect, useState } from 'react';
import { api, fmtDateTime } from '../api.js';
import { PageHead, Empty, Badge } from '../ui.jsx';

export default function Lixeira() {
  const [list, setList] = useState([]);
  const load = () => api.get('/lixeira').then(setList).catch(() => {});
  useEffect(() => { load(); }, []);

  async function restaurar(item) {
    await api.post(`/lixeira/${item.model}/${item.id}/restaurar`, {});
    load();
  }
  async function excluirDefinitivo(item) {
    if (!confirm(`Excluir DEFINITIVAMENTE "${item.rotulo}"? Isso não pode ser desfeito.`)) return;
    await api.del(`/lixeira/${item.model}/${item.id}`);
    load();
  }

  return (
    <div>
      <PageHead crumb="Segurança" title="Lixeira" desc="Itens excluídos de lançamentos, prazos, tarefas, agenda, valores de terceiros e modelos — restaure ou apague de vez." />
      <div className="panel">
        {list.length === 0 ? <Empty>A lixeira está vazia.</Empty> : (
          <table>
            <thead><tr><th>Item</th><th>Tipo</th><th>Excluído em</th><th></th></tr></thead>
            <tbody>{list.map((item) => (
              <tr key={item.model + item.id}>
                <td style={{ fontWeight: 600 }}>{item.rotulo || '(sem título)'}</td>
                <td><Badge>{item.tipo}</Badge></td>
                <td className="mono" style={{ fontSize: 12 }}>{fmtDateTime(item.deletedAt)}</td>
                <td style={{ whiteSpace: 'nowrap' }}>
                  <button className="btn sm" onClick={() => restaurar(item)}>↩ Restaurar</button>
                  <button className="btn ghost sm" onClick={() => excluirDefinitivo(item)} style={{ color: 'var(--red)', marginLeft: 6 }}>Excluir de vez</button>
                </td>
              </tr>
            ))}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}
