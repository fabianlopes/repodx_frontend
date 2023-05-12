import React from 'react';
import { Container, Row, Carousel  } from 'react-bootstrap';
import imagem_assistente from '../imagens/assistente.png'
import Cabecalho from '../components/cabecalho';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <Container fluid className='home'>
      <Row>        
        <Cabecalho />
      </Row>
      <Row className="d-flex justify-content-center align-items-center vh-100">
        <div className="d-flex justify-content-center align-items-center vh-50">
        <Carousel
          interval={10000}
          variant="dark"
          className="vh-50"
          controls={false}
          slide={false}
        >
          <Carousel.Item >
            <div className="card carousel-box">
              <div className="card-body">
                <h1>Está precisando avaliar os aspectos afetivos da sua equipe?</h1>
                <p>Avaliação do humor, dos sentimentos e emoções dos membros de seu time? O RepodDX pode lhe ajudar!</p>
                <p>Quer saber mais? clique <Link to="/robodex">AQUI!</Link> </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className="card carousel-box">
              <div className="card-body">
                <h1>O RepoDX</h1>
                <h2>Repositório de técnicas de DX</h2>
                <p>Uma ferramenta que vai lhe auxiliar nas SELEÇÃO de técnicas de DX e COMO utilizar a técnica escolhida!</p>
                <p>Utilize artigos de exemplo para guiar sua escolha e seu uso</p>
                <p>Quer saber mais? clique <Link to="/assistente">AQUI!</Link> </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card carousel-box">
              <div className="card-body">
                <h1>Conhece a DX? Deixa eu te apresentar...</h1>
                <p >A Developer Experience é toda e qualquer experiência que se pode ter com artefatos ou atividades que um desenvolvedor possa ter como parte de seu trabalho no desenvolvimento de sistemas.</p>
                <p>Quer saber mais? clique <Link to="/dxinfo">AQUI!</Link> </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="card carousel-box">
              <div className="card-body">
                <h1>Já conhece a DX e o RepoDX?</h1><h1>Então venha!</h1>
                <p>Aqui você encontra as técnicas de forma mais rápida, pesquisando pelos termos de seu interesse!</p>
                <p>Quer saber mais? clique <Link to="/listatecnicas">AQUI!</Link> </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
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