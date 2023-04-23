import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imagem_dx from '../imagens/CicloDX.png';
import imagem_assistente from '../imagens/assistente.png'
import Cabecalho from '../components/cabecalho';
import { Link } from 'react-router-dom';
import TabelaSearch from '../components/tabelapesquisa';
import tedxa from '../data/TEDXA.json'


function Home() {

  
  return (    

    <Container fluid>
      <Row>
        
        <Cabecalho />

      </Row>
      <Row>            
            <Col xs={5}>
                <Link to="/dxinfo">
                    <img src={imagem_dx} alt="ciclodx" className="img-fluid imagem-fundo" />
                </Link>
                <Link to="/assistente">
                    <img src={imagem_assistente} alt="assistente" className="img-fluid imagem-sobreposta" />
                </Link>
            </Col>
            <Col>                
                <TabelaSearch data={tedxa}/>
            </Col>
      </Row>        
      
        <Row className="bg-dark text-white">
            
                <p>Developer by FL</p>
            
        </Row>    

    </Container>
  );
}

export default Home;