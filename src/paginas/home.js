import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import imagem_assistente from '../imagens/assistente.png'
import Cabecalho from '../components/cabecalho';
import { Link } from 'react-router-dom';

const slides = require.context('../imagens/slidesRepoDX', false, /\.(png|JPG|jpe?g|svg)$/);

function Home() {

  return (
    <Container fluid className="dxinfo-box">
      <Row>        
        <Cabecalho />
      </Row>      
      <Row className="d-flex justify-content-center align-items-center vh-90">
        
        <Carousel interval={3000}            
            variant="dark"
            className="d-block vh-50"
            controls={true}
            slide={true}
            defaultActiveIndex={0}
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

        <Link to='/robodex'>
          <img
            src={imagem_assistente}
            alt="assistente"
            className="img-fluid imagem-robodex"
          />
        </Link>

      </Row>
    </Container>
  );
}


export default Home;