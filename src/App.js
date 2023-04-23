import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilteredTable from './paginas/assistente';
import Home from './paginas/home'
import DX from './paginas/dxinfo'
import Tecnica from './paginas/tecnica';
import './App.css';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/assistente" element={<FilteredTable/>} />
        <Route path="/dxinfo" element={<DX/>} />
        <Route path="/tecnica/:id" element={<Tecnica/>} />
      </Routes>
    </BrowserRouter>    
    
  );

}

export default App;