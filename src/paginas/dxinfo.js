import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';

const slides = require.context('../imagens/slidesDX', false, /\.(png|JPG|jpe?g|svg)$/);

function DX() {  
    
  
  return (

    <Container fluid className='dxinfo-box'>
      <Row>
          <Cabecalho />
      </Row>
      <Row className='justify-content-center' >
        <h3>Informações sobre DX - utilize os botões laterias da imagem para navegar nos slides</h3>        
      </Row>
      <Row className="d-flex justify-content-center align-items-center vh-90">
        
        <Carousel interval={300000}            
            variant="dark"
            className="d-block vh-50"
            controls={true}
            slide={true}
            defaultActiveIndex={2}
          >
              {slides.keys().map((slide) => (
              <Carousel.Item key={slide}>                           
                <div className="card dxinfo-box">
                  <div className="card-body">
                    <img className='imagem-dxinfo' key={slide} src={slides(slide)} alt="slide" />
                  </div>
                </div>
              </Carousel.Item>
              ))}              
          </Carousel>
        
      </Row>      
    </Container>

  );
}

export default DX;