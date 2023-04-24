import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imagem_dx from '../imagens/CicloDX.png';
import imagem_assistente from '../imagens/assistente.png'
import Cabecalho from '../components/cabecalho';
import { Link } from 'react-router-dom';
import TabelaSearch from '../components/tabelapesquisa';
import tedxa from '../data/TEDXA.json'


function ListaTecnicas() {

  
  return (    

    <Container fluid>
      <Row>        
        <Cabecalho />
      </Row>
      <Row>            
        <TabelaSearch data={tedxa}/>
      </Row>      
      <Row className="bg-dark text-white">            
        <p>Developer by FL</p>            
      </Row>
    </Container>
  );
}

export default ListaTecnicas;