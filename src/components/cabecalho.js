import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo_imagem from '../imagens/logo_imagem.png';
import { Link } from 'react-router-dom';

function Cabecalho() {
  
  return (    

        <div className="App">
            <header className="Cabecalho">                
                
                <Navbar>
                
                    <Container>
                        <Link to='/'>
                            <img src={logo_imagem} className="App-logo" alt="logo_imagem" />                            
                        </Link>                        
                        {/* <Navbar.Brand href="/">RepoDX</Navbar.Brand> */}
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/listatecnicas">Técnicas</Nav.Link>                            
                            <Nav.Link href="/assistente">Filtro de técnicas</Nav.Link>
                            <Nav.Link href="/robodex">RoboDex</Nav.Link>
                            <Nav.Link href="/dxinfo">Sobre a DX</Nav.Link>
                        </Nav>
                    </Container>
                
                </Navbar>
                
            </header>                        
        </div>          
  );
}

export default Cabecalho;