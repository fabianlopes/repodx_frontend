import React from 'react';
import { Container, Row } from 'react-bootstrap';
import imagem_assistente from '../imagens/assistente.png'
import Cabecalho from '../components/cabecalho';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <Container fluid className="home">
      <Row>        
        <Cabecalho />
      </Row>      
      <Row className="d-flex justify-content-center align-items-center vh-90">
        
        <div className="inicio">
          <h1>Está precisando avaliar os aspectos afetivos da sua equipe de desenvolvimento de sistemas?</h1>
          <h2>O RepoDX -Repositório de técnicas de DX, pode lhe ajudar!</h2>
          <p>É uma ferramenta que vai lhe recomendar uma técnica de avaliação de DX </p>
          <p>Ele pode auxiliar na SELEÇÃO e no COMO USAR a técnica sugerida</p>
          <p>Utilize os artigos de exemplo para guiar sua escolha e seu uso</p>
        </div>        

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