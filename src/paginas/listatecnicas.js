import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import TabelaSearch from '../components/tabelapesquisa';
import tedxa from '../data/TEDXA.json';

function ListaTecnicas() {

  
  return (    

    <Container fluid className='dxinfo-box'>
      <Row>        
        <Cabecalho />
      </Row>
      <Row className='justify-content-center' >
        <h2>Lista de Técnicas</h2>        
      </Row>
      <Row>         
        <TabelaSearch data={tedxa}/>
      </Row>
      
    </Container>
  );
}

export default ListaTecnicas;