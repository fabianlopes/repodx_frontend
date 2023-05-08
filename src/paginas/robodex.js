import React, { useState, useEffect } from 'react';
import { Container, Row, Modal, Button, Form, Tab, Tabs } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import { Link } from 'react-router-dom';
import tedxa from '../data/TEDXA.json';
import TabelaSearch from '../components/tabelapesquisa';
import imagem_assistente from '../imagens/assistente.png'

function RoboDex() {
  
  //const [key, setKey] = useState('step1');
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState([]);  
  const [showModal, setShowModal] = useState(false);
  const [tabelaFiltro, setTabelaFiltro] = useState([]);
  const tecnicas = tedxa;  
  var tecnicasFiltro = tecnicas;

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

  const handleNextClick = () => {
    setActiveTab(activeTab + 1);
  };

  return (

    <Container fluid>
      <Row>
          <Cabecalho />        
      </Row>
      <Row className="d-flex justify-content-center align-items-center vh-50">
        <Form >
          <Tabs centered activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
            <Tab eventKey={0} title="Step 1">
              <div className="shadow bg-light border-primary text-center">
                  <h2>O que precisamos saber</h2>    
                  <p>Aqui precisamos saber informa&ccedil;&otilde;es para poder auxiliar melhor na sele&ccedil;&atilde;o da t&eacute;cnica de avalia&ccedil;&atilde;o de DX</p>
                  Não conhece as definições da DX? clique <Link to='/dxinfo'>AQUI</Link> para maiores informações
              </div>              
            </Tab>
            <Tab eventKey={1} title="Step 2">
              <div className="form-check shadow bg-light border-primary">
              <label>                  
                <h2>O que você quer avaliar?</h2>
              </label>            
              <Form.Group>                
                  <Form.Check inline type="checkbox" label="Emoções e humor durante o desenvolvimento de software" name='tag01' value="tag01" onChange={handleChange} />
                  <Form.Check inline type="checkbox" label="Emoções e humor após o desenvolvimento de software" name='tag02' value="tag02" onChange={handleChange} />
                  <Form.Check inline type="checkbox" label="Mudanças de atividade/Tarefa" name='tag03' value="tag03" onChange={handleChange} />
                  <Form.Check inline type="checkbox" label="Análise de Requisitos" name='tag04' value="tag04" onChange={handleChange} />
                  <Form.Check inline type="checkbox" label="Aprendizado de tecnologia" name='tag24' value="tag24" onChange={handleChange} />
                  <Form.Check inline type="checkbox" label="O estado afetivo dos participantes (positivos ou negativos)" name='tag25' value="tag25" onChange={handleChange} />
                  <Form.Check inline type="checkbox" label="A felicidade dos participantes no processo de desenvolvimento de software" name='tag26' value="tag26" onChange={handleChange} />
                  <Form.Check inline type="checkbox" label="Bases de textos/emails (JSON, XML, EML, TXT)" name='tag11' value="tag11" onChange={handleChange} />
                  <Form.Check inline type="checkbox" label="Dimensões afetivas (valência, excitação e dominância)" name='tag27' value="tag27" onChange={handleChange} />
                  <Form.Check inline type="checkbox" label="Eventos afetivos (elogios, satisfação, perdas, acidentes, ambientes hostis etc)" name='tag28' value="tag28" onChange={handleChange} />
                  <Form.Check inline type="checkbox" label="Profundidade, foco, concentração e agradabilidade" name='tag29' value="tag29" onChange={handleChange} />
                  <Form.Check inline type="checkbox" label="Uma ferramenta, tecnologia ou metodologia" name='tag30' value="tag30" onChange={handleChange} />
              </Form.Group>
              </div>              
            </Tab>
            <Tab eventKey={2} title="Step 3">
              <div className="form-check shadow bg-light border-primary">
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
              </div>
              
            </Tab>
            <Tab eventKey={3} title="Step 4">
              <div className="form-check shadow bg-light border-primary">
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
              </div>
              
            </Tab>
            <Tab eventKey={4} title="Step 5">
              <div className="form-check shadow bg-light border-primary">
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
              </div>
              
            </Tab>
            <Tab eventKey={5} title="Step 6">
              <div className="form-check shadow bg-light border-primary">
              <label>
                  <h2>Qual o nível de experiência profissional dos participantes da avaliação de DX que será realizada?</h2>
                  (Os níveis são distribuídos da seguinte forma: 1 a 3 anos, iniciante; 3 a 5 anos, experiente; acima de 5 anos, especialista)
              </label>
              <Form.Group>
                  <Form.Check inline type="checkbox" name='tag20' label="Especialista" value="tag20" onChange={handleChange} />
                  <Form.Check inline type="checkbox" name='tag19' label="Experiente" value="tag19" onChange={handleChange} />
                  <Form.Check inline type="checkbox" name='tag18' label="Iniciante" value="tag18" onChange={handleChange} />
              </Form.Group>
              </div>
              
            </Tab>
            <Tab eventKey={6} title="Step 7">
              <div className="form-check shadow bg-light border-primary">
              <label>
                  <h2>A avaliação de DX vai ser realizada de que forma?</h2>
              </label>
              <Form.Group>
                  <Form.Check inline type="radio" label="Remotamente" name='tagr1' value="tag21" onChange={handleChange} />
                  <Form.Check inline type="radio" label="Presencial" name='tagr1' value="tag22" onChange={handleChange} />
                  <Form.Check inline type="radio" label="Hibrida" name='tagr1' value="tag23" onChange={handleChange} />
              </Form.Group>
              </div>
              
            </Tab>
            <Tab eventKey={7} title="Step 8">
              <div className="form-check shadow bg-light border-primary">
              <label>
                  <h2>Qual o ambiente da avaliação?</h2>
              </label>
              <Form.Group>
                  <Form.Check inline type="checkbox" label="Academia" name='tag13' value="tag13" onChange={handleChange} />
                  <Form.Check inline type="checkbox" label="Indústria" name='tag14' value="tag14" onChange={handleChange} />
              </Form.Group>
              </div>
              
            </Tab>
            <Tab eventKey={8} title="Step 9">
              <div className="form-check shadow bg-light border-primary">
              <label>
                  <h2>Qual o tempo disponível aproximado para utilização da técnica de avaliação de DX (em minutos)?</h2>
              </label>
              <Form.Group>
                  <Form.Check inline type="radio" label="1 - 3" name='tagr2' value="3" onChange={handleChange} />
                  <Form.Check inline type="radio" label="4 - 6" name='tagr2' value="6" onChange={handleChange} />
                  <Form.Check inline type="radio" label="6 - 12" name='tagr2' value="12" onChange={handleChange} />
                  <Form.Check inline type="radio" label="acima de 12" name='tagr2' value="13" onChange={handleChange} />
              </Form.Group>
              </div>
              
            </Tab>
            
          </Tabs>

          <Button onClick={handleNextClick}>Próximo</Button>
          <Button onClick={handleSubmit}>Enviar</Button>

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