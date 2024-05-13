import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import { useParams } from 'react-router-dom';
import tedax from '../data/TEDXA.json';
import ZoomableImage from '../components/zoomimagem';
import BotaoVoltar from '../components/botaovoltar';

function Tecnica() {

  const { id } = useParams();
  const tecnica = tedax.filter(Item => Item.ID === id);  
  const [currentTecnica] = tedax.filter(Item => Item.ID === id);
  
  return (
    <Container fluid className='filtroform'>        
        <Row>        
            <Cabecalho/>
        </Row>
        <Row>           
                <h1>{tecnica[0].ID} - {tecnica[0].nome}</h1>            
        </Row>
        <Row className='filtroform'>
            
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
                <h3 className="pb-2 border-bottom border-top" style={{boxShadow: "inset 0 -8px 8px -8px rgba(0, 0, 0, 0.5)"}}>Artefato (clique para zoom)</h3>
                <p className='text-center'><ZoomableImage src={tecnica[0].imagem} /> </p>
                <h3 className="pb-2 border-bottom border-top" style={{boxShadow: "inset 0 -8px 8px -8px rgba(0, 0, 0, 0.5)"}}>Referências</h3>
                <p>{tecnica[0].referencia}</p>
                <h3 className="pb-2 border-bottom border-top" style={{boxShadow: "inset 0 -8px 8px -8px rgba(0, 0, 0, 0.5)"}}>Links</h3>
                <p>Template: {currentTecnica.template && <a href={currentTecnica.template} target="_blank" rel="noopener noreferrer">{currentTecnica.template}</a>}</p>
                <p>Artigo exemplo: {currentTecnica.artigo && <a href={currentTecnica.artigo} target="_blank" rel="noopener noreferrer">{currentTecnica.artigo}</a>}</p>
            </Col>            
        </Row>
        
    </Container>
    );
}

export default Tecnica;