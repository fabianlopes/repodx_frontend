import React, { useState } from 'react';
import { Container, Row, Col, Image, Card, Carousel } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import imagem_dx from '../imagens/CicloDX.png';
const slides = require.context('../imagens/slides', false, /\.(png|JPG|jpe?g|svg)$/);


function DX() {  

    const [texto, setTexto] = useState('Texto original');
  
    const handleClick = () => {
        setTexto(texto);
        }
  
  return (

    <Container fluid>

      <Row>
        <Col xs={12}>
          <Cabecalho />
        </Col>
      </Row>
      <Row>

        <Card>            
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    <Carousel>        
                        {slides.keys().map((slide) => (
                        <Carousel.Item key={slide.id}><img className='imagem-dxinfo' key={slide} src={slides(slide)} alt="" /></Carousel.Item>
                        ))}
                    </Carousel>      
                </Card.Text>          
            </Card.Body>
        </Card>

      </Row>

    </Container>

  );
}

export default DX;