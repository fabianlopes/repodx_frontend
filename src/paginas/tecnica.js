import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import { useParams } from 'react-router-dom';
import tedax from '../data/TEDXA.json'
import panas from '../imagens/tecnicas/panas.png';

function Tecnica() {

  const { id } = useParams();
  const tecnica = tedax.filter(Item => Item.ID === id);
  
  return (
    <Container fluid >
        
        <Row>        
            <Cabecalho/>
        </Row>
        <Row>
            <Col>
                <h1>{tecnica[0].nome}</h1>
                <h2>{tecnica[0].ID}</h2>
                <h3>Resumo</h3>
                <p>{tecnica[0].resumo}</p>
                <h3>Como utilizar</h3>
                <ListGroup>
                {tecnica[0].como_utilizar.map((row, index) => {
                    return (
                    <ListGroup.Item>{row}</ListGroup.Item>
                    );
                })}
                </ListGroup>
                <h3>Contexto do artigo exemplo</h3>
                <p>{tecnica[0].contexto}</p>                
            </Col>
            <Col>
                <h3>Artefato</h3>
                <img src={panas} alt='imagem'/>
                <h3>Referências</h3>
                {tecnica[0].referencia}
                <h3>Templates</h3>
            </Col>            
        </Row>
        <Row className="bg-dark text-white">            
                <p>Developer by FL</p>            
        </Row>  
       
    </Container>
    );
}

export default Tecnica;