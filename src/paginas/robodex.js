import React, { useState, useEffect } from 'react';
import { Container, Row, Modal, Button, Form, Carousel, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import { Link } from 'react-router-dom';
import tedxa from '../data/TEDXA.json';
import TabelaSearch from '../components/tabelapesquisa';
import imagem_assistente from '../imagens/assistente.png'

function RoboDex() {
  
  const [formData, setFormData] = useState([]);  
  const [showModal, setShowModal] = useState(false);
  const [tabelaFiltro, setTabelaFiltro] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const tecnicas = tedxa;  
  // var tecnicasFiltro = tecnicas;
  const [checked, setChecked] = useState(false);
  // const [radioValue, setRadioValue] = useState('1');

  useEffect(() => {    
    const checkboxValue = Object.keys(formData).filter(value => formData[value]);
    const tecnicasFiltro = tecnicas.filter(tecnica => {
      return tecnica.tags.some(tag => checkboxValue.includes(tag));
    });
    setTabelaFiltro(tecnicasFiltro);
  }, [formData, tecnicas]);
  
  function handleChange(event) {    
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked
    });
    setChecked(event.target.checked);
    
  }  

  const handleSubmit = (event) => {
    event.preventDefault();
/*
    const checkboxValue = Object.keys(formData).filter(value => formData[value]);
    tecnicasFiltro = [];

    tecnicas.forEach(tecnica => {
      tecnica.tags.forEach(tags => {
        checkboxValue.forEach(tagform => {
          if (tagform === tags) {
            tecnicasFiltro.push(tecnica);
          }
        })
      })
    })

    setTabelaFiltro(tecnicasFiltro);*/
    setShowModal(true);
  }

  const handleClose = () => setShowModal(false);
  
  const handleSlideEnter = (index) => {
    if (index === activeIndex) {
      const item = document.querySelector(`.carousel-item:nth-child(${index + 1})`);
      item.classList.add('carousel-item-animate');
    }
  };

  return (

    <Container fluid className='robodex'>
      <Row>
          <Cabecalho />        
      </Row>
      <Row>

          <Form onSubmit={handleSubmit}>
            <Carousel
            interval={10000}
            variant="dark"
            className="vh-50"
            activeIndex={activeIndex}
            onSelect={(index) => setActiveIndex(index)}
            controls={false}
            slide={false}
            >
              <Carousel.Item onSlideEnter={() => handleSlideEnter(0)}>
                    <h1>O que precisamos saber</h1>
                    <p>Aqui precisamos saber informa&ccedil;&otilde;es para poder auxiliar melhor na sele&ccedil;&atilde;o da t&eacute;cnica de avalia&ccedil;&atilde;o de DX</p>
                    <p>Não conhece as definições da DX? clique <Link to='/dxinfo'>AQUI</Link> para maiores informações</p>                
              </Carousel.Item>
              <Carousel.Item onSlideEnter={() => handleSlideEnter(1)}>
                    <label>                  
                      <h2>O que você quer avaliar?</h2>
                    </label>
                    <ToggleButtonGroup type="checkbox" value={formData}>
                      <ToggleButton id="tag01" name="tag01" value={checked} onChange={handleChange} checked={checked}>
                        Emoções e humor durante o desenvolvimento de software
                      </ToggleButton>
                      <ToggleButton id="tag02" name="tag02" value="tag02">
                        Emoções e humor após o desenvolvimento de software
                      </ToggleButton>
                      <ToggleButton id="tag02" name="tag02" value="tag02">
                        Mudanças de atividade/Tarefa
                      </ToggleButton>
                      {/* Add more ToggleButton components for other options */}
                    </ToggleButtonGroup>
                    <Form.Group>                      
                        
                    </Form.Group>                
              </Carousel.Item>
              <Carousel.Item onSlideEnter={() => handleSlideEnter(2)}>
                
                 
                    <label>
                      <h2>Em que momento você quer avaliar?</h2>
                    </label>
                    <Form.Group>
                        <Form.Check inline type="checkbox" label="Reuniôes" name='tag05' value="tag05" onChange={handleChange} />
                        <Form.Check inline type="checkbox" label="Atividades com muitas intervenções/estímulos" name='tag06' value="tag06" onChange={handleChange} />
                        <Form.Check inline type="checkbox" label="Atividades com muitas alterações de atividades/tarefas" name='tag07' value="tag07" onChange={handleChange} />
                        <Form.Check inline type="checkbox" label="Ao usar tecnologia MOBILE" name='tag08' value="tag08" onChange={handleChange} />
                        <Form.Check inline type="checkbox" label="Ao usar Deep Learnig (DL)" name='tag09' value="tag09" onChange={handleChange} />                        
                    </Form.Group>              
                  
                
              </Carousel.Item>
              <Carousel.Item onSlideEnter={() => handleSlideEnter(3)}>
                
                 
                    <label>
                    <h2>Como você vai ralizar a avaliação? </h2>
                    </label>
                    <Form.Group>
                        <Form.Check inline type="checkbox" label="Usando autoavaliações pelos próprios participantes" name='tag10' value="tag10" onChange={handleChange} />
                        <Form.Check inline type="checkbox" label="Utilizando base de textos (emails, sites de perguntas e respostas)" name='tag11' value="tag11" onChange={handleChange} />
                        <Form.Check inline type="checkbox" label="Transcrições de áudios/gravações" name='tag12' value="tag12" onChange={handleChange} />
                        <Form.Check inline type="checkbox" label="Usando questionário" name='tag15' value="tag15" onChange={handleChange} />
                        <Form.Check inline type="checkbox" label="Usando entrevista" name='tag16' value="tag16" onChange={handleChange} />
                        <Form.Check inline type="checkbox" label="Usando mineração de dados" name='tag17' value="tag17" onChange={handleChange} />
                    </Form.Group>              
                  
                
              </Carousel.Item>
              <Carousel.Item onSlideEnter={() => handleSlideEnter(4)}>
                
                 
                    <label>
                        <h2>Qual o número de participantes da avaliação de DX?</h2>
                        (pode ser respondido com o número provável de colaboradores da organização)
                    </label>
                    <Form.Group>
                        <Form.Check inline type="radio" label="1 - 50" value="50" onChange={handleChange} />
                        <Form.Check inline type="radio" label="51 - 100" value="100" onChange={handleChange} />
                        <Form.Check inline type="radio" label="101 - 1000" value="1000" onChange={handleChange} />
                        <Form.Check inline type="radio" label="acima de 1000" value="1001" onChange={handleChange} />
                    </Form.Group>
                  
                
              </Carousel.Item>
              <Carousel.Item onSlideEnter={() => handleSlideEnter(5)}>
                
                 
                    <label>
                        <h2>Qual o nível de experiência profissional dos participantes da avaliação de DX que será realizada?</h2>
                        (Os níveis são distribuídos da seguinte forma: 1 a 3 anos, iniciante; 3 a 5 anos, experiente; acima de 5 anos, especialista)
                    </label>
                    <Form.Group>
                        <Form.Check inline type="checkbox" name='tag20' label="Especialista" value="tag20" onChange={handleChange} />
                        <Form.Check inline type="checkbox" name='tag19' label="Experiente" value="tag19" onChange={handleChange} />
                        <Form.Check inline type="checkbox" name='tag18' label="Iniciante" value="tag18" onChange={handleChange} />
                    </Form.Group>
                  
                
              </Carousel.Item>
              <Carousel.Item onSlideEnter={() => handleSlideEnter(6)}>
                
                 
                    <label>
                        <h2>A avaliação de DX vai ser realizada de que forma?</h2>
                    </label>
                    <Form.Group>
                        <Form.Check inline type="radio" label="Remotamente" name='tagr1' value="tag21" onChange={handleChange} />
                        <Form.Check inline type="radio" label="Presencial" name='tagr1' value="tag22" onChange={handleChange} />
                        <Form.Check inline type="radio" label="Hibrida" name='tagr1' value="tag23" onChange={handleChange} />
                    </Form.Group>
                  
                
              </Carousel.Item>
              <Carousel.Item onSlideEnter={() => handleSlideEnter(7)}>
                
                 
                    <label>
                        <h2>Qual o ambiente da avaliação?</h2>
                    </label>
                    <Form.Group>
                        <Form.Check inline type="checkbox" label="Academia" name='tag13' value="tag13" onChange={handleChange} />
                        <Form.Check inline type="checkbox" label="Indústria" name='tag14' value="tag14" onChange={handleChange} />
                    </Form.Group>                
                  
                
              </Carousel.Item>
              <Carousel.Item onSlideEnter={() => handleSlideEnter(7)}>
                
                 
                    <label>
                        <h2>Qual o tempo disponível aproximado para utilização da técnica de avaliação de DX (em minutos)?</h2>
                    </label>
                    <Form.Group>
                        <Form.Check inline type="radio" label="1 - 3" name='tagr2' value="3" onChange={handleChange} />
                        <Form.Check inline type="radio" label="4 - 6" name='tagr2' value="6" onChange={handleChange} />
                        <Form.Check inline type="radio" label="6 - 12" name='tagr2' value="12" onChange={handleChange} />
                        <Form.Check inline type="radio" label="acima de 12" name='tagr2' value="13" onChange={handleChange} />
                    </Form.Group>
                  
                
              </Carousel.Item>
            </Carousel>            
            <Button type='submit' onClick={handleSubmit} disabled={!Object.values(formData).some(Boolean)}>Sugerir técnica</Button>  
        </Form>

        <Link to="/robodex">
          <img
            src={imagem_assistente}
            alt="assistente"
            className="img-fluid imagem-sobreposta"
          />
        </Link>

      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Técnicas Sugeridas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TabelaSearch data={tabelaFiltro}/>
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