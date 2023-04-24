import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Modal, Button, Table } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import { Link } from 'react-router-dom';
import tedxa from '../data/TEDXA.json';
import TabelaSearch from '../components/tabelapesquisa';

function Assistente() {
  
  const [formData, setFormData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [tabelaFiltro, setTabelaFiltro] = useState([]);
  const tecnicas = tedxa;
  var tecnicasFiltro = tecnicas;

  useEffect(() => {

    tecnicasFiltro = [];
    setTabelaFiltro(tecnicasFiltro);

  }, [formData]);
  
  function handleChange(event) {
    if (event.target.checked) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value      
      });
      console.log('aqui');
    }
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();

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

    setTabelaFiltro(tecnicasFiltro);
    setShowModal(true);
  }

  const handleClose = () => setShowModal(false);

  return (

    <Container fluid>
      <Row>
          <Cabecalho />        
      </Row>
      <Row>
        
          <div className="form-container shadow bg-light border-primary">      
          
            <div className="shadow bg-light border-primary text-center">
                <h2>O que precisamos saber</h2>    
                Aqui precisamos saber informa&ccedil;&otilde;es para poder auxiliar melhor na sele&ccedil;&atilde;o da t&eacute;cnica de avalia&ccedil;&atilde;o de DX<br/>
                Não conhece as definições da DX? clique <Link to='/dxinfo'>AQUI</Link> para maiores informações
            </div>
            <Form onSubmit={handleSubmit}>
              <Row>
              <Col xs='6'>
                <div className="form-check shadow bg-light border-primary">
                <label>                  
                  Avaliando um processo de desenvolvimento de software?<br/>                    
                </label>            
                <Form.Group>                
                    <Form.Check inline type="checkbox" label="Desenvolvimento (durante)" name='tag01' value="tag01" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Desenvolvimento (após)" name='tag02' value="tag02" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Mudança de atividade/Tarefa" name='tag03' value="tag03" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Análise de Requisitos" value="tag04" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Aprendizado de tecnologia" value="tag24" onChange={handleChange} />
                </Form.Group>
                </div>
                <div className="form-check shadow bg-light border-primary">
                <label>
                  Qual a característica da avaliação a ser realizada? <br/>
                </label>
                <Form.Group>
                    <Form.Check inline type="checkbox" label="Reunião" value="tag05" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Muitas intervenções/estímulos" value="tag06" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Muitas alterações de atividades/tarefas" value="tag07" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="MOBILE" value="tag08" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Deep Learnig (DL)" value="tag09" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Autoavaliação" value="tag10" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Base de textos (emails, perguntas e respostas)" value="tag11" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Áudios/gravações" value="tag12" onChange={handleChange} />
                </Form.Group>
                </div>
                <div className="form-check shadow bg-light border-primary">
                <label>
                    Qual o ambiente da avaliação de DX? <br/>                    
                </label>
                <Form.Group>
                    <Form.Check inline type="checkbox" label="Academia" value="tag13" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Indústria" value="tag14" onChange={handleChange} />
                </Form.Group>
                </div>
                <div className="form-check shadow bg-light border-primary">
                <label>
                    Qual o método que voce deseja utilizar para avaliação de DX? <br></br>
                    (Frameworks podem conter artefatos, questionários e entrevistas em conjunto)
                </label>
                <Form.Group>
                    <Form.Check inline type="checkbox" label="Questionário" value="tag15" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Entrevista" value="tag16" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Mineração" value="tag17" onChange={handleChange} />
                </Form.Group>
                </div>            
                </Col>
                <Col xs='6'>
                <div className="form-check shadow bg-light border-primary">
                <label>
                    Qual o nível de experiência dos participantes da avaliação de DX? <br></br>
                    (Os níveis são distribuídos da seguinte forma: 1 a 3 anos, iniciante; 3 a 5 anos, experiente; acima de 5 anos, especialista)
                </label>
                <Form.Group>
                    <Form.Check inline type="checkbox" label="Especialista" value="tag20" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Experiente" value="tag19" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Iniciante" value="tag18" onChange={handleChange} />
                </Form.Group>
                </div>
                <div className="form-check shadow bg-light border-primary">
                <label>
                    Voce conhece o ambiente onde será realizada a avaliação?                
                </label>
                <Form.Group>
                    <Form.Check inline type="radio" label="Remoto" value="tag21" onChange={handleChange} />
                    <Form.Check inline type="radio" label="Presencial" value="tag22" onChange={handleChange} />
                    <Form.Check inline type="radio" label="Hibrido" value="tag23" onChange={handleChange} />
                </Form.Group>
                </div>
                <div className="form-check shadow bg-light border-primary">
                <label>
                    Qual o número de participantes da avaliação de DX? <br></br>
                    (pode ser respondido com o número provável de colaboradores da organização)
                </label>
                <Form.Group>
                    <Form.Check inline type="radio" label="1 - 50" value="50" onChange={handleChange} />
                    <Form.Check inline type="radio" label="51 - 100" value="100" onChange={handleChange} />
                    <Form.Check inline type="radio" label="101 - 1000" value="1000" onChange={handleChange} />
                    <Form.Check inline type="radio" label="acima de 1000" value="1001" onChange={handleChange} />
                </Form.Group>
                </div>
                <div className="form-check shadow bg-light border-primary">
                <label>
                    Qual o tempo para utilização da técnica (meses)?
                </label>
                <Form.Group>
                    <Form.Check inline type="radio" label="1 - 3" value="3" onChange={handleChange} />
                    <Form.Check inline type="radio" label="4 - 6" value="6" onChange={handleChange} />
                    <Form.Check inline type="radio" label="6 - 12" value="12" onChange={handleChange} />
                    <Form.Check inline type="radio" label="acima de 12" value="13" onChange={handleChange} />
                </Form.Group>
                </div>                
                <Button type='submmit'>Enviar</Button>                
              </Col>
              </Row>
            </Form>
          </div>        
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

export default Assistente;