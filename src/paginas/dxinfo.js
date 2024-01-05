import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import BotaoVoltar from '../components/botaovoltar';

const slides = require.context('../imagens/slides', false, /\.(png|JPG|jpe?g|svg)$/);

function DX() {  
    
  
  return (

    <Container fluid className='home'>
      <Row>
          <Cabecalho />
      </Row>
      <Row className='justify-content-center' >
        <h2>Informações sobre DX teste - utilize os botões abaixo da imagem para navegar nos slides</h2>
        <BotaoVoltar to='/' text='Voltar'/>
      </Row>
      <Row className="d-flex justify-content-center align-items-center vh-90">
        
        <Carousel interval={300000}            
            variant="dark"
            className="d-block vh-50"
            controls={false}
            slide={false}
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
        
      </Row>      
    </Container>

  );
}

export default DX;