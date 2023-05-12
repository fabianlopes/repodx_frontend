import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import TabelaSearch from '../components/tabelapesquisa';
import tedxa from '../data/TEDXA.json'
import BotaoVoltar from '../components/botaovoltar';

function ListaTecnicas() {

  
  return (    

    <Container fluid className='home'>
      <Row>        
        <Cabecalho />
      </Row>
      <Row className='filtroform'>         
        <TabelaSearch data={tedxa}/>        
        <BotaoVoltar to='/' text='Voltar'/>
      </Row>
    </Container>
  );
}

export default ListaTecnicas;