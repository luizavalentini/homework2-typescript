import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { PaginaPadrao } from './components/PaginaPadrao';
import { Inicio } from "./pages/Inicio";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Menu />
      <Routes>
         <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio />} /> 
          </Route>
          <Route path="*" element={<div>Erro 404 - Página não encontrada.</div>} /> 
      </Routes>
    </BrowserRouter>
  );
};
export default App