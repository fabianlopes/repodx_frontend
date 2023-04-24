import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Assistente from './paginas/assistente';
import Home from './paginas/home'
import DX from './paginas/dxinfo'
import Tecnica from './paginas/tecnica';
import ListaTecnicas from './paginas/listatecnicas';
import './App.css';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/assistente" element={<Assistente/>} />
        <Route path="/dxinfo" element={<DX/>} />
        <Route path="/tecnica/:id" element={<Tecnica/>} />
        <Route path="/listatecnicas" element={<ListaTecnicas/>} />
      </Routes>
    </BrowserRouter>    
    
  );

}

export default App;