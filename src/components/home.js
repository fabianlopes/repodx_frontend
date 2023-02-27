import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import imagem_dx from '../imagens/CicloDX.png';
import imagem_assistente from '../imagens/assistente.png'
import Cabecalho from './cabecalho';
import { Link } from 'react-router-dom';


function Home() {

  //const [searchTerm, setSearchTerm] = useState([]);
  const [tableData, setTableData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();    
    
    const searchTerm = {tags:event.target.search.value};
    console.log('Pesquisar por:', searchTerm);
    
    const fetchTableData = async () => {
        
        try {
          
          const response = await axios( {
            method: 'post',
            url: 'http://localhost:3000/api/tecnicas',
            headers: {
              'Content-Type': 'application/json'
            },
            data: searchTerm
    
        });
        setTableData(response.data);   
        } catch (error) {
          console.error(error);
        }
    
        }
    fetchTableData();
    };
  
  return (    

    <Container fluid>
      <Row>
        <Col xs={12}>
        <Cabecalho />
        </Col>
      </Row>
      <Row>

        <Form onSubmit={handleSubmit} className="form-container">
                <FormControl
                type="text"
                placeholder="Pesquisar"
                name='search'
                />
                <Button variant="outline-success" type="submit">Pesquisar</Button>
        </Form>

      </Row>
      <Row>            
            <Col xs={5}>
                <Link to="/dxinfo">
                    <img src={imagem_dx} alt="ciclodx" className="img-fluid imagem-fundo" />
                </Link>
                <Link to="/assistente">
                    <img src={imagem_assistente} alt="assistente" className="img-fluid imagem-sobreposta" />
                </Link>
            </Col>
            <Col>
                <div className="table-container">
                    <div className="shadow bg-light border-primary text-center">
                        <h2>Sugestão de Técnicas</h2>
                    </div>
                    <table className='striped bordered hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => {
                                return (
                            <tr key={index} data-toogle="tooltip" title={row.resumo}>
                                <td>{row.ID}</td>
                                <td>{row.nome}</td>
                            </tr>
                            );
                            })}
                        </tbody>
                    </table>
                </div>
            </Col>
      </Row>        
      
        <Row className="bg-dark text-white">
            <Col xs={12}>
                <p>Developer by FL</p>
            </Col>
        </Row>    

    </Container>
  );
}

export default Home;