import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, SobrePage, SolucoesPage, ClientesPage, ContatoPage } from './pages';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/solucoes" element={<SolucoesPage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}