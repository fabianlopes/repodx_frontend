import React, { useState } from 'react';
import { Container, Row, Modal, Button, Form, Carousel, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Cabecalho from '../components/cabecalho';
import { Link } from 'react-router-dom';
import tedxa from '../data/TEDXA.json';
import TabelaSearch from '../components/tabelapesquisa';
import imagem_assistente from '../imagens/robodex-semfala.png';
import balao from '../imagens/balao-aberto.png';
import balao2 from '../imagens/balao-aberto2.png';
import BotaoVoltar from '../components/botaovoltar';

function RoboDex() {
  
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [tabelaFiltro, setTabelaFiltro] = useState([]);
  const tecnicas = tedxa;
  
  function handleChange(event) {
    const { value, checked } = event.target;

    if (checked) {
      setFormData({
        ...formData,
        [event.target.value]: event.target.value
      });
    } else if (formData[value]) {      
      const updatedFormData = { ...formData };
      delete updatedFormData[value];
      setFormData(updatedFormData);
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
  };
  
  return (

    <Container fluid className='robodex'>
      <Row>
          <Cabecalho />        
      </Row>
      <Row className='justify-content-center' >
        <p>Asistente de recomendação - Responda as questões e envie as respostas para obter as sugestões de técnicas</p>
        <BotaoVoltar to='/' text='Voltar'/>
      </Row>
      <Row>
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
                    <h2>Utilize os controles para navegação entre as perguntas</h2>                    
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                      <h2>O que você quer avaliar?</h2>
                    </label>
                    <ToggleButtonGroup type="checkbox"  className='grupobotoestg' >
                      <ToggleButton type='checkbox' className='botoestg' id="tag01" name="tag01" value="tag01" onChange={handleChange} >
                        Emoções, humor e sentimentos durante o desenvolvimento de software
                      </ToggleButton>                      
                      <ToggleButton type='checkbox' className='botoestg' id="tag02" name="tag02" value="tag02" onChange={handleChange} >
                        Emoções, humor e sentimentos após o desenvolvimento de software
                      </ToggleButton>                      
                      <ToggleButton type='checkbox' className='botoestg' id="tag03" name="tag03" value="tag03" onChange={handleChange} >
                        Emoções, humor e sentimentos durante as mudanças de atividade/tarefa
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag04" name="tag24" value="tag04" onChange={handleChange} >
                        Emoções, humor e sentimentos durante o aprendizado de novas tecnologias
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag30" name="tag30" value="tag30" onChange={handleChange} >
                        Emoções, humor e sentimentos durante o uso de uma ferramenta, tecnologia ou metodologia
                      </ToggleButton>                      
                      <ToggleButton type='checkbox' className='botoestg' id="tag28" name="tag28" value="tag28" onChange={handleChange} >
                        Emoções, humor e sentimentos durante elogios, perdas, acidentes ou em ambientes hostis
                      </ToggleButton>
                    </ToggleButtonGroup>
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                      <h2>Qual atividade você quer avaliar?</h2>
                    </label>
                    <ToggleButtonGroup type="checkbox" className='grupobotoestg'>
                      <ToggleButton type='checkbox' className='botoestg' id="tag05" name="tag05" value="tag05" onChange={handleChange} >
                        Atividades com reuniões
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag06" name="tag06" value="tag06" onChange={handleChange} >
                        Atividades com muitas intervenções/estímulos
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag07" name="tag07" value="tag07" onChange={handleChange} >
                        Atividades com muitas alterações de atividades/tarefas
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag08" name="tag08" value="tag08" onChange={handleChange} >
                        Atividades que envolvam tecnologias móveis
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag09" name="tag09" value="tag09" onChange={handleChange} >
                        Atividades que envolvam aprendizado de máquina
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag04" name="tag04" value="tag04" onChange={handleChange} >
                        Atividades que envolvam requisitos
                      </ToggleButton>
                    </ToggleButtonGroup>
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                    <h2>Como você vai realizar a avaliação? </h2>
                    </label>
                    <ToggleButtonGroup type="checkbox"  className='grupobotoestg'>
                      <ToggleButton type='checkbox' className='botoestg' id="tag10" name="tag10" value="tag10" onChange={handleChange}>
                        Usando autoavaliações pelos próprios participantes
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag12" name="tag12" value="tag12" onChange={handleChange}>
                        Usando áudios/gravações
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag15" name="tag15" value="tag15" onChange={handleChange}>
                        Usando questionários
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag16" name="tag16" value="tag16" onChange={handleChange}>
                        Usando entrevistas
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag17" name="tag17" value="tag17" onChange={handleChange}>
                        Usando mineração de dados (bases de texto, emails, sites de perguntas e respostas, fóruns etc)
                      </ToggleButton>
                    </ToggleButtonGroup>
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                        <h2>Qual o número de participantes da avaliação de DX?</h2>
                        (pode ser respondido com o número provável de colaboradores da organização)
                    </label>
                    <ToggleButtonGroup type="radio" name="tagnumero" className='grupobotoestg'>
                      <ToggleButton type='radio' className='botoestg' id='1' value={1} onChange={handleChange}>
                        1 - 50
                      </ToggleButton>
                      <ToggleButton type='radio' className='botoestg' id='51' value={51} onChange={handleChange}>
                        51 - 100
                      </ToggleButton>
                      <ToggleButton type='radio' className='botoestg' id='101' value={101} onChange={handleChange}>
                        101 - 1000
                      </ToggleButton>
                      <ToggleButton type='radio' className='botoestg' id='1001' value={1001} onChange={handleChange}>
                        Acima de 1000
                      </ToggleButton>
                    </ToggleButtonGroup>
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                        <h2>Qual o nível de experiência profissional dos participantes da avaliação de DX?</h2>
                    </label>
                    <ToggleButtonGroup type="checkbox"  className='grupobotoestg'>                      
                      <ToggleButton type='checkbox' className='botoestg' id="tag18" name="tag18" value="tag18" onChange={handleChange}>
                        Iniciante (até 3 anos)
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag19" name="tag19" value="tag19" onChange={handleChange}>
                        Experiente (3 a 5 anos)
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag20" name="tag20" value="tag20" onChange={handleChange}>
                        Especialista (acima de 5 anos)
                      </ToggleButton>
                    </ToggleButtonGroup>
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                        <h2>A avaliação de DX vai ser realizada de que forma?</h2>
                    </label>
                    <ToggleButtonGroup type="radio" name='tagforma' className='grupobotoestg'>
                      <ToggleButton className='botoestg' type='radio' id="tagr1" value="tag21" onChange={handleChange}>
                        Remotamente
                      </ToggleButton>
                      <ToggleButton className='botoestg' type='radio' id="tagr2" value="tag22" onChange={handleChange}>
                        Presencial
                      </ToggleButton>
                      <ToggleButton className='botoestg' type='radio' id="tagr3" value="tag23" onChange={handleChange}>
                        Híbrida
                      </ToggleButton>
                    </ToggleButtonGroup>
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                        <h2>Qual o ambiente da avaliação?</h2>
                    </label>
                    <ToggleButtonGroup type="checkbox"  className='grupobotoestg'>
                      <ToggleButton type='checkbox' className='botoestg' id="tag13" name="tag13" value="tag13" onChange={handleChange}>
                        Academia
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag14" name="tag14" value="tag14" onChange={handleChange}>
                        Indústria
                      </ToggleButton>
                     </ToggleButtonGroup>
              </Carousel.Item>
              <Carousel.Item>
                    <label>
                      <h2>Você quer avaliar uma emoção, humor ou sentimento específico?</h2>
                    </label>
                    <ToggleButtonGroup type="checkbox"  className='grupobotoestg' >
                      <ToggleButton type='checkbox' className='botoestg' id="tag26" name="tag26" value="tag26" onChange={handleChange} >
                        Felicidade
                      </ToggleButton>                      
                      <ToggleButton type='checkbox' className='botoestg' id="tag27" name="tag27" value="tag27" onChange={handleChange} >
                        Valência, excitação ou dominância
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag29" name="tag29" value="tag29" onChange={handleChange} >
                        Profundidade, foco, concentração e agradabilidade
                      </ToggleButton>
                      <ToggleButton type='checkbox' className='botoestg' id="tag30" name="tag30" value="tag30" onChange={handleChange} >
                        Tédio, ansiedade, confusão, curiosidade, raiva, excitação, esperança, frustração, interesse, orgulho, surpresa, vergonha, alívio
                      </ToggleButton>
                    </ToggleButtonGroup>
              </Carousel.Item>
            </Carousel>            

            <div className='carousel-images-container' >
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
              <div className="overlay-image-direita">
                <img
                  src={balao2}
                  alt="balao"
                  className="img-fluid imagem-balao"
                />
                <img
                  src={imagem_assistente}
                  alt="robodex"
                  className="img-fluid imagem-enviar"
                />                
              </div>
              <Button onClick={handleSubmit} className='buttonclick'>ENVIAR OPÇÕES</Button>
            </div>            
        </Form>
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