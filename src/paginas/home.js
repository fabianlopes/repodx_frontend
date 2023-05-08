import React from 'react';
import { Container, Row, Carousel  } from 'react-bootstrap';
import imagem_assistente from '../imagens/assistente.png'
import Cabecalho from '../components/cabecalho';
import { Link } from 'react-router-dom';


function Home() {

  
  return (    

    <Container fluid>
      <Row>        
        <Cabecalho />
      </Row>
      <Row className="d-flex vh-100">
        <Carousel interval={10000} variant="dark" className="vh-100">
          <Carousel.Item>
            <h1 className='title'>Está precisando avaliar os aspectos afetivos da sua equipe?</h1>
            <p className='subtitle'>Avaliação do humor, dos sentimentos e emoções dos membros de seu time? O RepodDX pode lhe ajudar!</p>
            <p className='texto'>O RepoDX, repositório de técnicas de DX é uma ferramenta que vai lhe auxiliar nas SELEÇÃO de técnicas de DX e COMO utilizar a técnica escolhida de forma adequada,
              utilizando de artigos de exemplo para guiar sua escolha e seu uso.
            </p>
            <p>Quer saber mais? clique <Link to="/assistente">AQUI!</Link> </p>
          </Carousel.Item>
          <Carousel.Item>
          <h1 className='title'>Conhece a DX? Deixa eu te apresentar...</h1>
          <p className='subtitle'>A Developer Experience é toda e qualquer experiência que se pode ter com artefatos ou atividades que um desenvolvedor possa ter
               como parte de seu trabalho no desenvolvimento de sistemas.
          </p>
          <p>Quer saber mais? clique <Link to="/dxinfo">AQUI!</Link> </p>
          </Carousel.Item>
          <Carousel.Item>
          <h1 className='title'>Já conhece a DX e o RepoDX? Então venha!</h1>
          <p className='subtitle'>Aqui você encontra as técnicas de forma mais rápida, pesquisando pelos termos de seu interesse!</p>
          <p>Quer saber mais? clique <Link to="/listatecnicas">AQUI!</Link> </p>
          </Carousel.Item>
        </Carousel>
        <Link to="/assistente">
            <img src={imagem_assistente} alt="assistente" className="img-fluid imagem-sobreposta" />
        </Link>
      </Row>

    </Container>
  );
}

export default Home;