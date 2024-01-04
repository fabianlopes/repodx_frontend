import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button, Form, Carousel } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import { Link } from 'react-router-dom';
import tedxa from '../data/TEDXA.json';
import tagdx from '../data/TAGDX.json';
import Tabela from '../components/tabelasempesquisa';
import imagem_assistente from '../imagens/robodex-semfala.png';
import balao from '../imagens/balao-aberto.png';
import BotaoVoltar from '../components/botaovoltar';

function RoboDex() {
  
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [tabelaFiltro, setTabelaFiltro] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const tecnicas = tedxa;
  const optionDescriptions = tagdx;

  const handleChange = (value) => {
    if (selectedOptions.includes(value)) {      
      setSelectedOptions((prevOptions) => prevOptions.filter(option => option !== value));
    } else {      
      setFormData({ [value]: true });
      setSelectedOptions((prevOptions) => [...prevOptions, value]);
    }
  };
  
  const handleButtonClick = (value) => {
    handleChange(value);
    //handleNext();
  };

  /*const handleNext = () => {
    setActiveIndex(activeIndex + 1);
  };*/

  const handleSubmit = (event) => {
    event.preventDefault();    

    const checkboxValue = Object.keys(formData).filter(value => formData[value]);

    const tecnicasFiltro = tecnicas.filter(tecnica => {
      return tecnica.tags.some(tag => checkboxValue.includes(tag));
    });

    setTabelaFiltro(tecnicasFiltro);
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);    
  };
  
  return (

    <Container fluid className='home'>
      <Row>
          <Cabecalho />        
      </Row>
      <Row>
        <Col xs={10}>
          <p>Asistente de recomendação - Responda as questões e envie as respostas para obter as sugestões de técnicas</p>
        </Col>
        <Col xs={2}>
          <BotaoVoltar to='/' text='Voltar'/>
        </Col>        
      </Row>
      <Row>
          <Col sm={2}>
            <div className="overlay-image-esquerda">
              <img
                src={imagem_assistente}
                alt="robodex"
                className="img-fluid imagem-enviar"
              />
              <img
                src={balao}
                alt="balao"
                className="img-fluid imagem-balao"
              />
            </div>           
          </Col>
          <Col sm={10}>
            <Form onSubmit={handleSubmit}>          
              <Carousel
              interval={null}
              activeIndex={activeIndex}
              onSelect={(index) => setActiveIndex(index)}
              variant="dark"
              className="d-block vh-50"
              slide={false}
              >
                <Carousel.Item>
                  <div className="inicio">
                      <h1>O que precisamos saber</h1>
                      <p>Aqui precisamos saber informações para poder auxiliar melhor na seleção da técnica de avaliação de DX na aréa afetiva</p>
                      <p>Não lembra o que é DX? clique <Link to='/dxinfo'>AQUI</Link></p>
                      <h2>Utilize os botões inferiores e as setas laterias para navegação</h2>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <label>
                    <h2>O que você quer avaliar?</h2>
                  </label>
                  <div className='grupobotoestg'>
                      <Button
                        className='botoestg'
                        id='tag01'
                        name='tag01'
                        value='tag01'
                        onClick={() => handleButtonClick('tag01')}
                      >
                      Emoções, humor e sentimentos durante o desenvolvimento de software
                      </Button>
                      <Button
                        className='botoestg'
                        id='tag02'
                        name='tag02'
                        value='tag02'
                        onClick={() => handleButtonClick('tag02')}
                      >
                      Emoções e humor após o desenvolvimento de software
                      </Button>
                      <Button
                        className='botoestg'
                        id='tag03'
                        name='tag03'
                        value='tag03'
                        onClick={() => handleButtonClick('tag03')}
                      >
                      Emoções, humor e sentimentos durante as mudanças de atividade/tarefa
                      </Button>
                      <Button
                        className='botoestg'
                        id='tag24'
                        name='tag24'
                        value='tag24'
                        onClick={() => handleButtonClick('tag24')}
                      >
                      Emoções, humor e sentimentos durante o aprendizado de novas tecnologias
                      </Button>
                      <Button
                        className='botoestg'
                        id='tag30'
                        name='tag30'
                        value='tag30'
                        onClick={() => handleButtonClick('tag30')}
                      >
                      Emoções, humor e sentimentos durante o uso de uma ferramenta, tecnologia ou metodologia
                      </Button>
                      <Button
                        className='botoestg'
                        id='tag28'
                        name='tag28'
                        value='tag28'
                        onClick={() => handleButtonClick('tag28')}
                      >
                      Emoções, humor e sentimentos durante elogios, perdas, acidentes ou em ambientes hostis
                      </Button>
                  
                </div>                
                </Carousel.Item>
                <Carousel.Item>
                      <label>
                        <h2>Qual atividade você quer avaliar?</h2>
                      </label>
                      <div className='grupobotoestg'>
                        <Button
                          className='botoestg'
                          id='tag05'
                          name='tag05'
                          value='tag05'
                          onClick={() => handleButtonClick('tag05')}
                        >
                        Atividades com reuniões
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag06'
                          name='tag06'
                          value='tag06'
                          onClick={() => handleButtonClick('tag06')}
                        >
                        Atividades com muitas intervenções/estímulos
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag07'
                          name='tag07'
                          value='tag07'
                          onClick={() => handleButtonClick('tag07')}
                        >
                        Atividades com muitas alterações de atividades/tarefas
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag08'
                          name='tag08'
                          value='tag08'
                          onClick={() => handleButtonClick('tag08')}
                        >
                        Atividades que envolvam tecnologias móveis
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag09'
                          name='tag09'
                          value='tag09'
                          onClick={() => handleButtonClick('tag09')}
                        >
                        Atividades que envolvam aprendizado de máquina
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag04'
                          name='tag04'
                          value='tag04'
                          onClick={() => handleButtonClick('tag04')}
                        >
                        Atividades que envolvam requisitos
                        </Button>
                      </div>
                </Carousel.Item>
                <Carousel.Item>
                      <label>
                      <h2>Como você vai realizar a avaliação? </h2>
                      </label>
                      <div className='grupobotoestg'>
                        <Button
                          className='botoestg'
                          id='tag10'
                          name='tag10'
                          value='tag10'
                          onClick={() => handleButtonClick('tag10')}
                        >
                        Usando autoavaliações pelos próprios participantes
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag12'
                          name='tag12'
                          value='tag12'
                          onClick={() => handleButtonClick('tag12')}
                        >
                        Usando áudios/gravações
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag15'
                          name='tag15'
                          value='tag15'
                          onClick={() => handleButtonClick('tag15')}
                        >
                        Usando questionários
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag16'
                          name='tag16'
                          value='tag16'
                          onClick={() => handleButtonClick('tag16')}
                        >
                        Usando entrevistas
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag17'
                          name='tag17'
                          value='tag17'
                          onClick={() => handleButtonClick('tag17')}
                        >
                        Usando mineração de dados (bases de texto, emails, sites de perguntas e respostas, fóruns etc)
                        </Button>
                      </div>
                      
                </Carousel.Item>
                
                <Carousel.Item>
                      <label>
                          <h2>Qual o nível de experiência profissional dos participantes da avaliação de DX?</h2>
                      </label>
                      <div className='grupobotoestg'>
                        <Button
                          className='botoestg'
                          id='tag18'
                          name='tag18'
                          value='tag18'
                          onClick={() => handleButtonClick('tag18')}
                        >
                        Iniciante (até 3 anos)
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag19'
                          name='tag19'
                          value='tag19'
                          onClick={() => handleButtonClick('tag19')}
                        >
                        Experiente (3 a 5 anos)
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag20'
                          name='tag20'
                          value='tag20'
                          onClick={() => handleButtonClick('tag20')}
                        >
                        Especialista (acima de 5 anos)
                        </Button>
                      </div>

                </Carousel.Item>
                <Carousel.Item>
                      <label>
                          <h2>A avaliação de DX vai ser realizada de que forma?</h2>
                      </label>
                      <div className='grupobotoestg'>
                        <Button
                          className='botoestg'
                          id='tag21'
                          name='tag21'
                          value='tag21'
                          onClick={() => handleButtonClick('tag21')}
                        >
                        Remotamente
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag22'
                          name='tag22'
                          value='tag22'
                          onClick={() => handleButtonClick('tag22')}
                        >
                        Presencial
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag23'
                          name='tag23'
                          value='tag23'
                          onClick={() => handleButtonClick('tag23')}
                        >
                        Híbrida
                        </Button>
                      </div>
                </Carousel.Item>
                <Carousel.Item>
                      <label>
                          <h2>Qual o ambiente da avaliação?</h2>
                      </label>
                      <div className='grupobotoestg'>
                        <Button
                          className='botoestg'
                          id='tag13'
                          name='tag13'
                          value='tag13'
                          onClick={() => handleButtonClick('tag13')}
                        >
                        Academia
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag14'
                          name='tag14'
                          value='tag14'
                          onClick={() => handleButtonClick('tag14')}
                        >
                        Indústria
                        </Button>
                      </div>
                </Carousel.Item>
                <Carousel.Item>
                      <label>
                        <h2>Você quer avaliar uma emoção, humor ou sentimento específico?</h2>
                      </label>
                      <div className='grupobotoestg'>
                        <Button
                          className='botoestg'
                          id='tag26'
                          name='tag26'
                          value='tag26'
                          onClick={() => handleButtonClick('tag26')}
                        >
                        Felicidade
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag27'
                          name='tag27'
                          value='tag27'
                          onClick={() => handleButtonClick('tag27')}
                        >
                        Valência, excitação ou dominância
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag29'
                          name='tag29'
                          value='tag29'
                          onClick={() => handleButtonClick('tag29')}
                        >
                        Profundidade, foco, concentração e agradabilidade
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag30'
                          name='tag30'
                          value='tag30'
                          onClick={() => handleButtonClick('tag30')}
                        >
                        Tédio, ansiedade, confusão, curiosidade, raiva, excitação, esperança, frustração, interesse, orgulho, surpresa, vergonha, alívio
                        </Button>
                      </div>                      
                </Carousel.Item>                
              </Carousel>

          </Form>
        </Col>        
      </Row>
      <Row>
        <Col xs={2}>
          <Button onClick={handleSubmit} className='buttonclick'>ENVIAR</Button>
        </Col>
        <Col xs={10}>
          {selectedOptions.length > 0 && (
            <div className="selected-options">
              <strong>Opções Selecionadas (selecione novamente para remover):</strong>
              <ul className="horizontal-list">
                {selectedOptions.map((option, index) => (
                  <li key={index}>{optionDescriptions[option]}</li>                  
                ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Técnicas Sugeridas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabela data={tabelaFiltro}/>
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

export default RoboDex;