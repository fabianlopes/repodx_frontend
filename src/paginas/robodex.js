import React, { useState, useEffect } from 'react';
import { Container, Row, Modal, Button, Form, Carousel, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import { Link } from 'react-router-dom';
import tedxa from '../data/TEDXA.json';
import TabelaSearch from '../components/tabelapesquisa';
import imagem_assistente from '../imagens/assistente.png';

function RoboDex() {
  
  const [formData, setFormData] = useState([]);  
  const [showModal, setShowModal] = useState(false);
  const [tabelaFiltro, setTabelaFiltro] = useState([]);
  const tecnicas = tedxa;

  useEffect(() => {
      setFormData(formData);    
  }, [formData]);
  
  function handleChange(event) {
    if (event.target.checked) {
      setFormData({
        ...formData,
        [event.target.value]: event.target.value
      });
      
    }    
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form:')
    console.log(formData)
    const checkboxValue = Object.keys(formData).filter(value => formData[value]);
    console.log('check:')
    console.log(checkboxValue);
    const tecnicasFiltro = tecnicas.filter(tecnica => {
      return tecnica.tags.some(tag => checkboxValue.includes(tag));
    });
    console.log('tecnica:')
    console.log(tecnicasFiltro);
    setTabelaFiltro(tecnicasFiltro);
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
    setFormData([]);
  };
  
  return (

    <Container fluid className='robodex'>
      <Row className='d-flex flex-column justify-content-center'>
          <Cabecalho />        
      </Row>
      <Row className='w-80'>

          <Form onSubmit={handleSubmit}>
            <Carousel
            interval={300000}
            variant="dark"
            className="d-block vh-50"
            controls={true}
            slide={false}
            >
              <Carousel.Item>
                    <h1>O que precisamos saber</h1>
                    <p>Aqui precisamos saber informações para poder auxiliar melhor na seleção da técnica de avaliação de DX</p>
                    <p>Não conhece as definições da DX? clique <Link to='/dxinfo'>AQUI</Link> para maiores informações</p>
                    <h2>Utilize os controles lateraias e inferiores para navegação entre as perguntas</h2>
                    <h2>Ao final da seleção das escolhas, clique no ROBODEX para obter as técnicas sugeridas!</h2>
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                      <h2>O que você quer avaliar?</h2>
                    </label>
                    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className='botoes' >
                      <ToggleButton type='checkbox' id="tag01" name="tag01" value="tag01" onChange={handleChange} >
                        Emoções e humor durante o desenvolvimento de software
                      </ToggleButton>                      
                      <ToggleButton type='checkbox' id="tag02" name="tag02" value="tag02" onChange={handleChange} >
                        Emoções e humor após o desenvolvimento de software
                      </ToggleButton>                      
                      <ToggleButton type='checkbox' id="tag03" name="tag03" value="tag03" onChange={handleChange} >
                        Mudanças de atividade/Tarefa
                      </ToggleButton>
                    </ToggleButtonGroup>
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                      <h2>Em que momento você quer avaliar?</h2>
                    </label>
                    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className='botoes'>
                      <ToggleButton type='checkbox' id="tag05" name="tag05" value="tag05" onChange={handleChange} >
                        Reuniões
                      </ToggleButton>
                      <ToggleButton type='checkbox' id="tag06" name="tag06" value="tag06" onChange={handleChange} >
                        Atividades com muitas intervenções/estímulos
                      </ToggleButton>
                      <ToggleButton type='checkbox' id="tag07" name="tag07" value="tag07" onChange={handleChange} >
                        Atividades com muitas alterações de atividades/tarefas
                      </ToggleButton>
                      <ToggleButton type='checkbox' id="tag08" name="tag08" value="tag08" onChange={handleChange} >
                        Ao usar tecnologia MOBILE
                      </ToggleButton>
                      <ToggleButton type='checkbox' id="tag09" name="tag09" value="tag09" onChange={handleChange} >
                        Ao usar Deep Learnig (DL)
                      </ToggleButton>
                    </ToggleButtonGroup>
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                    <h2>Como você vai ralizar a avaliação? </h2>
                    </label>
                    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className='botoes'>
                      <ToggleButton type='checkbox' id="tag10" name="tag10" value="tag10" onChange={handleChange}>
                        Usando autoavaliações pelos próprios participantes
                      </ToggleButton>
                      <ToggleButton type='checkbox' id="tag11" name="tag11" value="tag11" onChange={handleChange}>
                        Utilizando base de textos (emails, sites de perguntas e respostas)
                      </ToggleButton>
                      <ToggleButton type='checkbox' id="tag12" name="tag12" value="tag12" onChange={handleChange}>
                        Transcrições de áudios/gravações
                      </ToggleButton>
                      <ToggleButton type='checkbox' id="tag15" name="tag15" value="tag15" onChange={handleChange}>
                        Usando questionários
                      </ToggleButton>
                      <ToggleButton type='checkbox' id="tag16" name="tag16" value="tag16" onChange={handleChange}>
                        Usando entrevistas
                      </ToggleButton>
                      <ToggleButton type='checkbox' id="tag17" name="tag17" value="tag17" onChange={handleChange}>
                        Usando mineração de dados
                      </ToggleButton>
                    </ToggleButtonGroup>
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                        <h2>Qual o número de participantes da avaliação de DX?</h2>
                        (pode ser respondido com o número provável de colaboradores da organização)
                    </label>
                    <ToggleButtonGroup type="radio" name="tagnumero" defaultValue={1} className='botoes'>
                      <ToggleButton type='checkbox' id='1' value={1} onChange={handleChange}>
                        1 - 50
                      </ToggleButton>
                      <ToggleButton type='checkbox' id='51' value={51} onChange={handleChange}>
                        51 - 100
                      </ToggleButton>
                      <ToggleButton type='checkbox' id='101' value={101} onChange={handleChange}>
                        101 - 1000
                      </ToggleButton>
                      <ToggleButton type='checkbox' id='1001' value={1001} onChange={handleChange}>
                        Acima de 1000
                      </ToggleButton>
                    </ToggleButtonGroup>
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                        <h2>Qual o nível de experiência profissional dos participantes da avaliação de DX?</h2>
                        (Os níveis são distribuídos da seguinte forma: 1 a 3 anos, iniciante; 3 a 5 anos, experiente; acima de 5 anos, especialista)
                    </label>
                    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className='botoes'>
                      <ToggleButton type='checkbox' id="tag20" name="tag20" value="tag20" onChange={handleChange}>
                        Especialista
                      </ToggleButton>
                      <ToggleButton type='checkbox' id="tag19" name="tag19" value="tag19" onChange={handleChange}>
                        Experiente
                      </ToggleButton>
                      <ToggleButton type='checkbox' id="tag18" name="tag18" value="tag18" onChange={handleChange}>
                        Iniciante
                      </ToggleButton>
                    </ToggleButtonGroup>
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                        <h2>A avaliação de DX vai ser realizada de que forma?</h2>
                    </label>
                    <ToggleButtonGroup type="radio" defaultValue={1} name='tagforma' className='botoes'>
                      <ToggleButton type='radio' id="tagr1" value="tag21" onChange={handleChange}>
                        Remotamente
                      </ToggleButton>
                      <ToggleButton type='radio' id="tagr2" value="tag22" onChange={handleChange}>
                        Presencial
                      </ToggleButton>
                      <ToggleButton type='radio' id="tagr3" value="tag23" onChange={handleChange}>
                        Híbrida
                      </ToggleButton>
                    </ToggleButtonGroup>
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                        <h2>Qual o ambiente da avaliação?</h2>
                    </label>
                    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className='botoes'>
                      <ToggleButton type='checkbox' id="tag13" name="tag13" value="tag13" onChange={handleChange}>
                        Academia
                      </ToggleButton>
                      <ToggleButton type='checkbox' id="tag14" name="tag14" value="tag14" onChange={handleChange}>
                        Indústria
                      </ToggleButton>
                     </ToggleButtonGroup>
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                        <h2>Qual o tempo disponível aproximado para utilização da técnica na avaliação?</h2>
                        <p>(em minutos)</p>
                    </label>
                    <ToggleButtonGroup type="radio" defaultValue={1} name='tagtempo' className='botoes'>
                      <ToggleButton type='radio' id="tagr4" value="3" onChange={handleChange}>
                        1 - 3
                      </ToggleButton>
                      <ToggleButton type='radio' id="tagr5" value="6" onChange={handleChange}>
                        4 - 6
                      </ToggleButton>
                      <ToggleButton type='radio' id="tagr6" value="12" onChange={handleChange}>
                        6 - 12
                      </ToggleButton>
                      <ToggleButton type='radio' id="tagr7" value="13" onChange={handleChange}>
                        Acima de 12
                      </ToggleButton>
                    </ToggleButtonGroup>
              </Carousel.Item>
            </Carousel>

            <Button type='submit'>Enviar</Button>
            <img
            src={imagem_assistente}
            alt="robodex"
            className="img-fluid imagem-sobreposta"
            onClick={handleSubmit}
            />
            
        </Form>

        <Link to={"/robodex"}>
          
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