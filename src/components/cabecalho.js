import React from 'react';
import logo_imagem from '../imagens/logo_imagem.png'
import logo_texto from '../imagens/logo_texto.png'
import { Link } from 'react-router-dom';

function Cabecalho() {
  
  return (

        <div className="App">
            <header className="Cabecalho">
                <Link to='/'>
                    <img src={logo_imagem} className="App-logo" alt="logo_imagem" />
                    <img src={logo_texto} alt="logo_texto" />
                </Link>
                REPOSITÓRIO DE TÉCNICAS DE AVALIAÇÃO DE DX
            </header>                        
        </div>          
  );
}

export default Cabecalho;