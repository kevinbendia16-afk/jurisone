import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getToken } from './api.js';
import Layout from './Layout.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Clientes from './pages/Clientes.jsx';
import ClienteDetalhe from './pages/ClienteDetalhe.jsx';
import Processos from './pages/Processos.jsx';
import ProcessoDetalhe from './pages/ProcessoDetalhe.jsx';
import Prazos from './pages/Prazos.jsx';
import Tarefas from './pages/Tarefas.jsx';
import Financeiro from './pages/Financeiro.jsx';
import ValoresTerceiro from './pages/ValoresTerceiro.jsx';
import Agenda from './pages/Agenda.jsx';
import FeedJuridico from './pages/FeedJuridico.jsx';

function Private({ children }) {
  return getToken() ? <Layout>{children}</Layout> : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Private><Dashboard /></Private>} />
      <Route path="/agenda" element={<Private><Agenda /></Private>} />
      <Route path="/feed" element={<Private><FeedJuridico /></Private>} />
      <Route path="/clientes" element={<Private><Clientes /></Private>} />
      <Route path="/clientes/:id" element={<Private><ClienteDetalhe /></Private>} />
      <Route path="/processos" element={<Private><Processos /></Private>} />
      <Route path="/processos/:id" element={<Private><ProcessoDetalhe /></Private>} />
      <Route path="/prazos" element={<Private><Prazos /></Private>} />
      <Route path="/tarefas" element={<Private><Tarefas /></Private>} />
      <Route path="/financeiro" element={<Private><Financeiro /></Private>} />
      <Route path="/valores-terceiros" element={<Private><ValoresTerceiro /></Private>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
