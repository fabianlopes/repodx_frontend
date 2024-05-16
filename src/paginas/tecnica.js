import React from 'react';
import { Container, Row, Col, ListGroup, Modal, Carousel, Button } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import { useParams } from 'react-router-dom';
import tedax from '../data/TEDXA.json';
import ZoomableImage from '../components/zoomimagem';
import { useState } from 'react';
import carregaImagem from '../components/carregaslides';


function Tecnica() {

  const { id } = useParams();
  const tecnica = tedax.filter(Item => Item.ID === id);  
  const [currentTecnica] = tedax.filter(Item => Item.ID === id);
  const [showModal, setShowModal] = useState(false);  

  var slides = carregaImagem({tecnica:id});

  console.log(id);
  

  const handleClick = (event) => {
    event.preventDefault();
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);    
  };

  
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
                <button onClick={handleClick}>Abrir passo a passo</button>
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

        <Modal show={showModal} onHide={handleClose} dialogClassName="modal-custom">
        <Modal.Header closeButton>
          <Modal.Title>Passo a passo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Carousel interval={300000}            
                variant="dark"
                className="d-block vh-50"
                controls={true}
                slide={true}
                defaultActiveIndex={0}
            >
                {slides.keys().map((slide) => (
                <Carousel.Item key={slide}>
                        <img className='imagem-dxinfo' key={slide} src={slides(slide)} alt="slide" />
                </Carousel.Item>
                ))}              
            </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
        
    </Container>
    );
}

export default Tecnica;