import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Table, InputGroup, Image, Form } from 'react-bootstrap';
import tedxa from '../data/TEDXA.json';

function Tabela({ data }) {

  const [searchTerm, setSearchTerm] = useState('');  

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    Object.keys(item).some(
      (key) =>
        typeof item[key] === 'string' &&
        item[key].toLowerCase().includes(searchTerm)
    )
  );

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchTableData = async () => {
    
    try {
      if (data) {setTableData(filteredData)}
      else {setTableData(tedxa);}      
    } catch (error) {
      console.error(error);
    }

    };
    fetchTableData();
  }, []);

  return (

    <Container>
      <Row>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" onChange={handleSearch}>
            <img src='https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fbr%2Ficone-gratis%2Fpesquisa_3858323&psig=AOvVaw0z3Rau8aXG_M3iyFZuT77C&ust=1682254252959000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjYzM3Dvf4CFQAAAAAdAAAAABAD'/>
          </InputGroup.Text>
          <Form.Control
            placeholder="Pesquisa"
            aria-label="Pesquisa"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Row>  
      <Row>
        <Table striped bordered hover>
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
        </Table>
      </Row>
    </Container>

  );
}

export default Tabela;