import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import { Link, useParams } from 'react-router-dom';
import tedax from '../data/TEDXA.json';
import ZoomableImage from '../components/zoomimagem';

function Tecnica() {

  const { id } = useParams();
  const tecnica = tedax.filter(Item => Item.ID === id);  
  
  return (
    <Container fluid>
        
        <Row>        
            <Cabecalho/>
        </Row>
        <Row>
            <h1 className='text-center'>{tecnica[0].ID} - {tecnica[0].nome}</h1>
            <Col xs={6}>
                <h3 className="pb-2 border-bottom border-top" style={{boxShadow: "inset 0 -8px 8px -8px rgba(0, 0, 0, 0.5)"}}>Resumo</h3>
                <p>{tecnica[0].resumo}</p>
                <h3 className="pb-2 border-bottom border-top" style={{boxShadow: "inset 0 -8px 8px -8px rgba(0, 0, 0, 0.5)"}}>Porque utilizar</h3>
                <p>{tecnica[0].motivo}</p>
                <h3 className="pb-2 border-bottom border-top" style={{boxShadow: "inset 0 -8px 8px -8px rgba(0, 0, 0, 0.5)"}}>Como utilizar</h3>
                <ListGroup>
                {tecnica[0].como_utilizar.map((row, index) => {
                    return (
                    <ListGroup.Item key={index}>{row}</ListGroup.Item>
                    );
                })}
                </ListGroup>
                <h3 className="pb-2 border-bottom border-top" style={{boxShadow: "inset 0 -8px 8px -8px rgba(0, 0, 0, 0.5)"}}>Contexto do artigo exemplo</h3>
                <p>{tecnica[0].contexto}</p>                
            </Col>
            <Col xs={6}>
                <h3 className="pb-2 border-bottom border-top" style={{boxShadow: "inset 0 -8px 8px -8px rgba(0, 0, 0, 0.5)"}}>Artefato</h3>
                <p className='text-center'><ZoomableImage src={tecnica[0].imagem} /> </p>
                <h3 className="pb-2 border-bottom border-top" style={{boxShadow: "inset 0 -8px 8px -8px rgba(0, 0, 0, 0.5)"}}>Referências</h3>
                <p>{tecnica[0].referencia}</p>
                <h3 className="pb-2 border-bottom border-top" style={{boxShadow: "inset 0 -8px 8px -8px rgba(0, 0, 0, 0.5)"}}>Links</h3>
                <p>Template: <Link>{tecnica[0].template}</Link></p>
                <p>Artigo exemplo: <Link>{tecnica[0].artigo}</Link></p>
            </Col>            
        </Row>
        <Row className="bg-dark text-white">            
                <p>Developer by FL</p>            
        </Row>  
       
    </Container>
    );
}

export default Tecnica;