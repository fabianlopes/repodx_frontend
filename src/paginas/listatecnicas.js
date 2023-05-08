import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
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