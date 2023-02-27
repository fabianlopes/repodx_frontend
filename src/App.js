import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilteredTable from './components/assistente';
import Home from './components/home'
import DX from './components/dxinfo'
import './App.css';
/*import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";*/

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/assistente" element={<FilteredTable/>} />
        <Route path="/dxinfo" element={<DX/>} />
      </Routes>
    </BrowserRouter>    
    
  );

}

export default App;