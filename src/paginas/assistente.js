import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import { Link } from 'react-router-dom';
import tedxa from '../data/TEDXA.json';
import TabelaSearch from '../components/tabelapesquisa';

function Assistente() {
  
  const [formData, setFormData] = useState([]);
  const [tabelaFiltro, setTabelaFiltro] = useState([]);
  const tecnicas = tedxa;  

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
            <Form>
              <Row>
              <Col xs='8'>
                <div className="form-check shadow bg-light border-primary">
                <label>                  
                  O que você quer avaliar?<br/>
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
                <div className="form-check shadow bg-light border-primary">
                <label>
                  Em que momento você quer avaliar? <br/>
                </label>
                <Form.Group>
                    <Form.Check inline type="checkbox" label="Reuniôes" name='tag05' value="tag05" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Atividades com muitas intervenções/estímulos" name='tag06' value="tag06" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Atividades com muitas alterações de atividades/tarefas" name='tag07' value="tag07" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Ao usar tecnologia MOBILE" name='tag08' value="tag08" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Ao usar Deep Learnig (DL)" name='tag09' value="tag09" onChange={handleChange} />
                    
                </Form.Group>
                </div>
                <div className="form-check shadow bg-light border-primary">
                <label>
                  Como você vai ralizar a avaliação? <br/>
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
                    Qual o nível de experiência profissional dos participantes da avaliação de DX que será realizada? <br></br>
                    (Os níveis são distribuídos da seguinte forma: 1 a 3 anos, iniciante; 3 a 5 anos, experiente; acima de 5 anos, especialista)
                </label>
                <Form.Group>
                    <Form.Check inline type="checkbox" name='tag20' label="Especialista" value="tag20" onChange={handleChange} />
                    <Form.Check inline type="checkbox" name='tag19' label="Experiente" value="tag19" onChange={handleChange} />
                    <Form.Check inline type="checkbox" name='tag18' label="Iniciante" value="tag18" onChange={handleChange} />
                </Form.Group>
                </div>
                <div className="form-check shadow bg-light border-primary">
                <label>
                    A avaliação de DX vai ser realizada de que forma?
                </label>
                <Form.Group>
                    <Form.Check inline type="radio" label="Remotamente" name='tagr1' value="tag21" onChange={handleChange} />
                    <Form.Check inline type="radio" label="Presencial" name='tagr1' value="tag22" onChange={handleChange} />
                    <Form.Check inline type="radio" label="Hibrida" name='tagr1' value="tag23" onChange={handleChange} />
                </Form.Group>
                </div>
                <div className="form-check shadow bg-light border-primary">
                <label>
                    Qual o ambiente da avaliação? <br/>
                </label>
                <Form.Group>
                    <Form.Check inline type="checkbox" label="Academia" name='tag13' value="tag13" onChange={handleChange} />
                    <Form.Check inline type="checkbox" label="Indústria" name='tag14' value="tag14" onChange={handleChange} />
                </Form.Group>
                </div>                
                <div className="form-check shadow bg-light border-primary">
                <label>
                    Qual o tempo disponível aproximado para utilização da técnica de avaliação de DX (em minutos)?
                </label>
                <Form.Group>
                    <Form.Check inline type="radio" label="1 - 3" name='tagr2' value="3" onChange={handleChange} />
                    <Form.Check inline type="radio" label="4 - 6" name='tagr2' value="6" onChange={handleChange} />
                    <Form.Check inline type="radio" label="6 - 12" name='tagr2' value="12" onChange={handleChange} />
                    <Form.Check inline type="radio" label="acima de 12" name='tagr2' value="13" onChange={handleChange} />
                </Form.Group>
                </div>                
                </Col>
                <Col xs='4'>
                  <TabelaSearch data={tabelaFiltro}/>
              </Col>
              </Row>
            </Form>
          </div>        
      </Row>

    </Container>
  );
}

export default Assistente;