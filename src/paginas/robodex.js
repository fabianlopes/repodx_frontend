import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button, ToggleButton, ToggleButtonGroup, Form, Carousel } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import { Link } from 'react-router-dom';
import tedxa from '../data/TEDXA.json';
import tagdx from '../data/TAGDX.json';
import Tabela from '../components/tabelasempesquisa';
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

    <Container fluid className='dxinfo-box'>
      <Row>
          <Cabecalho />        
      </Row>
      <Row>
        <Col xs={10}>
          <h2>Assistente de recomendação - Responda as questões e use o botão ENVIAR para obter as sugestões de técnicas</h2>
        </Col>
        <Col xs={2}>
          <BotaoVoltar to='/' text='Voltar'/>
        </Col>        
      </Row>
      <Row>

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
                      <h1>O que você precisa saber</h1>
                      <p>Utilize os botões laterias para navegação</p>
                      <p>Ao enviar suas respostas, uma nova tela com a lista de sugestões será apresentada</p>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <label>
                    <h2>Em qual contexto a DX vai ser avaliada?</h2>
                  </label>
                  <div className='grupobotoestg'>
                    <ToggleButtonGroup type="checkbox">
                      <div className="row">
                        <div className="col-2">

                          <ToggleButton
                            className='botoestg'
                            id='tag01'
                            name='tag01'
                            value='tag01'
                            onClick={() => handleButtonClick('tag01')}
                            variant={selectedOptions.includes('tag01') ? 'primary' : 'outline-primary'}
                          >
                          Enquanto se desenvolve o software
                          </ToggleButton>                    
                          <ToggleButton
                            className='botoestg'
                            id='tag02'
                            name='tag02'
                            value='tag02'
                            onClick={() => handleButtonClick('tag02')}
                            variant={selectedOptions.includes('tag02') ? 'primary' : 'outline-primary'}
                          >
                          Após o desenvolvimento do software
                          </ToggleButton>                    
                          <ToggleButton
                            className='botoestg'
                            id='tag03'
                            name='tag03'
                            value='tag03'
                            onClick={() => handleButtonClick('tag03')}
                            variant={selectedOptions.includes('tag03') ? 'primary' : 'outline-primary'}
                          >
                          Em mudanças de atividades ou tarefas
                          </ToggleButton>                    
                          <ToggleButton
                            className='botoestg'
                            id='tag30'
                            name='tag30'
                            value='tag30'
                            onClick={() => handleButtonClick('tag30')}
                            variant={selectedOptions.includes('tag30') ? 'primary' : 'outline-primary'}
                          >
                          Uso de uma ferramenta, tecnologia ou metodologia específica
                          </ToggleButton>                    

                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2">

                          <ToggleButton
                            className='botoestg'
                            id='tag24'
                            name='tag24'
                            value='tag24'
                            onClick={() => handleButtonClick('tag24')}
                            variant={selectedOptions.includes('tag24') ? 'primary' : 'outline-primary'}
                          >
                          Aprendizado de novas tecnologias
                          </ToggleButton>
                          <ToggleButton
                            className='botoestg'
                            id='tag06'
                            name='tag06'
                            value='tag06'
                            onClick={() => handleButtonClick('tag06')}
                            variant={selectedOptions.includes('tag06') ? 'primary' : 'outline-primary'}
                          >
                          Após intervenções ou estímulos
                          </ToggleButton>                    
                          <ToggleButton
                            className='botoestg'
                            id='tag28'
                            name='tag28'
                            value='tag28'
                            onClick={() => handleButtonClick('tag28')}
                            variant={selectedOptions.includes('tag28') ? 'primary' : 'outline-primary'}
                          >
                          Efeitos afetivos (elogios, perdas, acidentes ou em ambientes hostis)
                          </ToggleButton>                    
                          <ToggleButton
                            className='botoestg'
                            id='tag31'
                            name='tag31'
                            value='tag31'
                            onClick={() => handleButtonClick('tag31')}
                            variant={selectedOptions.includes('tag31') ? 'primary' : 'outline-primary'}
                          >
                          Influência e impacto dos estados afetivos (qualidade, produtividade, desempenho, performance)
                          </ToggleButton>                    
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2">
                      
                          <ToggleButton
                            className='botoestg'
                            id='tag08'
                            name='tag08'
                            value='tag08'
                            onClick={() => handleButtonClick('tag08')}
                            variant={selectedOptions.includes('tag08') ? 'primary' : 'outline-primary'}
                          >
                          Pesquisa sobre tecnologia móveis
                          </ToggleButton>                    
                          <ToggleButton
                            className='botoestg'
                            id='tag09'
                            name='tag09'
                            value='tag09'
                            onClick={() => handleButtonClick('tag09')}
                            variant={selectedOptions.includes('tag09') ? 'primary' : 'outline-primary'}
                          >
                          Projetos de desenvolvimento de tecnologias de DL
                          </ToggleButton>                    
                          <ToggleButton
                            className='botoestg'
                            id='tag04'
                            name='tag04'
                            value='tag04'
                            onClick={() => handleButtonClick('tag04')}
                            variant={selectedOptions.includes('tag04') ? 'primary' : 'outline-primary'}
                          >
                          Elicitação de requisitos
                          </ToggleButton>                    
                          <ToggleButton
                            className='botoestg'
                            id='tag32'
                            name='tag32'
                            value='tag32'
                            onClick={() => handleButtonClick('tag32')}
                            variant={selectedOptions.includes('tag32') ? 'primary' : 'outline-primary'}
                          >
                          Redes sociais
                          </ToggleButton>                    
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2">
                      
                          <ToggleButton
                            className='botoestg'
                            id='tag33'
                            name='tag33'
                            value='tag33'
                            onClick={() => handleButtonClick('tag33')}
                            variant={selectedOptions.includes('tag33') ? 'primary' : 'outline-primary'}
                          >
                          Educacional (provas, laboratórios, práticas de programação em sala de aula)
                          </ToggleButton>                    
                          <ToggleButton
                            className='botoestg'
                            id='tag34'
                            name='tag34'
                            value='tag34'
                            onClick={() => handleButtonClick('tag34')}
                            variant={selectedOptions.includes('tag34') ? 'primary' : 'outline-primary'}
                          >
                          Projetos usando Software Livre
                          </ToggleButton>                    
                          <ToggleButton
                            className='botoestg'
                            id='tag35'
                            name='tag35'
                            value='tag35'
                            onClick={() => handleButtonClick('tag35')}
                            variant={selectedOptions.includes('tag35') ? 'primary' : 'outline-primary'}
                          >
                          Projetos de desenvolvimento Web
                          </ToggleButton>                    
                          <ToggleButton
                            className='botoestg'
                            id='tag36'
                            name='tag36'
                            value='tag36'
                            onClick={() => handleButtonClick('tag36')}
                            variant={selectedOptions.includes('tag36') ? 'primary' : 'outline-primary'}
                          >
                          Utilizaçãode IDE multiplataforma (editor de código, editor de interface gráfica do utilizador, compilador, depurador visual e controlo de versão)
                          </ToggleButton>
                        </div>
                      </div>
                          
                  </ToggleButtonGroup>                  
                </div>                
                </Carousel.Item>
                
                <Carousel.Item>
                  <div className='grupobotoestg'>
                    <div className="row">
                    <label>
                    <h2>O que você vai usar na avaliação de DX? </h2>
                    </label>
                    
                          <Button
                            className='botoestg'
                            id='tag10'
                            name='tag10'
                            value='tag10'
                            onClick={() => handleButtonClick('tag10')}
                          >
                          Questionários com autoavaliações dos participantes
                          </Button>
                          <Button
                            className='botoestg'
                            id='tag12'
                            name='tag12'
                            value='tag12'
                            onClick={() => handleButtonClick('tag12')}
                          >
                          Mineração de dados usando áudios ou gravações
                          </Button>
                          <Button
                            className='botoestg'
                            id='tag15'
                            name='tag15'
                            value='tag15'
                            onClick={() => handleButtonClick('tag15')}
                          >
                          Questionários
                          </Button>
                          <Button
                            className='botoestg'
                            id='tag16'
                            name='tag16'
                            value='tag16'
                            onClick={() => handleButtonClick('tag16')}
                          >
                          Entrevistas
                          </Button>
                          <Button
                            className='botoestg'
                            id='tag17'
                            name='tag17'
                            value='tag17'
                            onClick={() => handleButtonClick('tag17')}
                          >
                          Mineração de dados em bases de texto (emails, sites de perguntas e respostas, fóruns etc)
                          </Button>
                        
                      </div>
                    <div className="row">
                    <label>
                      <h2>Qual o nível de experiência profissional dos participantes da avaliação de DX?</h2>
                    </label>
                    
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
                  </div>

                </Carousel.Item>
                <Carousel.Item>
                      
                      <div className='grupobotoestg'>
                      <label>
                          <h2>A avaliação de DX vai ser realizada de que forma?</h2>
                      </label>
                      <div className="row"> 
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
                      </div>
                      
                      <div className='grupobotoestg'>
                      <label>
                          <h2>Qual o ambiente da avaliação?</h2>
                      </label>
                      <div className="row"> 
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
                      </div>
                </Carousel.Item>
                <Carousel.Item>

                
                      <label>
                        <h2>Você quer avaliar uma emoção, humor ou sentimento específico?</h2>
                      </label>
                      <div className='grupobotoestg'>
                      <div className="row">
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
                          id='tag39'
                          name='tag39'
                          value='tag39'
                          onClick={() => handleButtonClick('tag39')}
                        >
                        Infelicidade
                        </Button>
                        
                        <Button
                          className='botoestg'
                          id='tag27'
                          name='tag27'
                          value='tag27'
                          onClick={() => handleButtonClick('tag27')}
                        >
                        Dimensões afetivas (Valência, excitação ou dominância)
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
                          id='tag37'
                          name='tag37'
                          value='tag37'
                          onClick={() => handleButtonClick('tag37')}
                        >
                        Emoções primárias (tristeza, raiva, alegria, nojo e medo) 
                        </Button>
                        <Button
                          className='botoestg'
                          id='tag38'
                          name='tag38'
                          value='tag38'
                          onClick={() => handleButtonClick('tag38')}
                        >
                        Tédio, ansiedade, confusão, curiosidade, raiva, excitação, esperança, frustração, interesse, orgulho, surpresa, vergonha, alívio
                        </Button>                        
                      </div>                      
                    </div>
                </Carousel.Item>                
              </Carousel>

          </Form>

      </Row>
      <Row>
        <Col xl={2}>
            <div className="overlay-image-esquerda">
            <Button onClick={handleSubmit} className='buttonclick'>ENVIAR</Button>
          </div>                      
        </Col>
        <Col xl={10}>
        <strong>Opções Selecionadas (selecione novamente para remover):</strong>
          {selectedOptions.length > 0 && (
            <div className="selected-options">              
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