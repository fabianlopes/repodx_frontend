import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

function FilteredTable() {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({
    afetiva: '',
    cognitiva: '',
    conotativa: "",
    academia: ""
  });

  useEffect(() => {
    const fetchTableData = async () => {
    
    try {
      
      const response = await axios( {
        method: 'post',
        url: 'http://localhost:3000/api/tecnicas',
        headers: {
          'Content-Type': 'application/json'
        },
        data: formData

    });
      setTableData(response.data);   
    } catch (error) {
      console.error(error);
    }

    };
    fetchTableData();
  }, [formData]); 

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    
  }

  return (
    
    <div className="container h-100 w-100">
      <div className="form-container" class="shadow bg-light border-primary">
        <div class="shadow bg-light border-primary text-center">
            <h2>O que precisamos saber</h2>    
            <h3>Aqui precisamos saber informa&ccedil;&otilde;es para poder auxiliar melhor na sele&ccedil;&atilde;o da t&eacute;cnica de avalia&ccedil;&atilde;o de DX</h3>
        </div>
        <form>

            <div class="form-check shadow bg-light border-primary">
            <label>
                Qual a area da DX voce quer avaliar?
                <p>(Não conhece as áreas da DX? clique <a href="/definicao">AQUI</a> para maiores informações)</p>
            </label>            
            <Form.Group>                
                <Form.Check inline type="checkbox" label="cognitiva" value="cognitiva" onChange={handleChange} />
                <Form.Check inline type="checkbox" label="afetiva" value="afetiva" onChange={handleChange} />
                <Form.Check inline type="checkbox" label="conotativa" value="conotativa" onChange={handleChange} />
            </Form.Group>
            </div>
            <div class="form-check shadow bg-light border-primary">
            <label>
                Qual o método que voce deseja utilizar para avaliação de DX?
                <p>(Frameworks podem conter artefatos, questionários e entrevistas em conjunto)</p>
            </label>
            <Form.Group>
                <Form.Check inline type="checkbox" label="questionario" value="questionario" onChange={handleChange} />
                <Form.Check inline type="checkbox" label="entrevista" value="entrevista" onChange={handleChange} />
                <Form.Check inline type="checkbox" label="framework" value="framework" onChange={handleChange} />
            </Form.Group>
            </div>
            <div class="form-check shadow bg-light border-primary">
            <label>
                Qual o método que voce deseja utilizar para avaliação de DX?
                <p>(Frameworks podem conter artefatos, questionários e entrevistas em conjunto)</p>
            </label>
            <Form.Group>
                <Form.Check inline type="checkbox" label="questionario" value="questionario" onChange={handleChange} />
                <Form.Check inline type="checkbox" label="entrevista" value="entrevista" onChange={handleChange} />
                <Form.Check inline type="checkbox" label="framework" value="framework" onChange={handleChange} />
            </Form.Group>
            </div>            
            <div class="form-check shadow bg-light border-primary">
            <label>
                Qual o nível de experiência dos participantes da avaliação de DX?
                <p>(Os níveis são distribuídos da seguinte forma: 1 a 3 anos, iniciante; 3 a 5 anos, experiente; acima de 5 anos, especialista)</p>
            </label>
            <Form.Group>
                <Form.Check inline type="checkbox" label="especialista" value="especialista" onChange={handleChange} />
                <Form.Check inline type="checkbox" label="experiente" value="experiente" onChange={handleChange} />
                <Form.Check inline type="checkbox" label="iniciante" value="iniciante" onChange={handleChange} />
            </Form.Group>
            </div>
            <div class="form-check shadow bg-light border-primary">
            <label>
                Voce conhece o ambiente onde será realizada a avaliação?                
            </label>
            <Form.Group>
                <Form.Check inline type="radio" label="remoto" value="remoto" onChange={handleChange} />
                <Form.Check inline type="radio" label="presencial" value="presencial" onChange={handleChange} />
                <Form.Check inline type="radio" label="hibrido" value="hibrido" onChange={handleChange} />
            </Form.Group>
            </div>
            <div class="form-check shadow bg-light border-primary">
            <label>
                Qual o número de colaboradores participarão da avaliação de DX?
                <p>(pode ser respondido com o número provável de colaboradores da organização)</p>                
            </label>
            <Form.Group>
                <Form.Check inline type="radio" label="1 - 50" value="101 - 1000" onChange={handleChange} />
                <Form.Check inline type="radio" label="51 - 100" value="101 - 1000" onChange={handleChange} />
                <Form.Check inline type="radio" label="101 - 1000" value="101 - 1000" onChange={handleChange} />
                <Form.Check inline type="radio" label="acima de 1000" value="acima de 1000" onChange={handleChange} />
            </Form.Group>
            </div>
            <div class="form-check shadow bg-light border-primary">
            <label>
                Voce acompanhará os participantes durante a avaliação?
            </label>
            <Form.Group>
                <Form.Check inline type="radio" label="sim" value="sim" onChange={handleChange} />
                <Form.Check inline type="radio" label="nao" value="nao" onChange={handleChange} />                
            </Form.Group>
            </div>            

        </form>
      </div>
      <div className="table-container">
            <div class="shadow bg-light border-primary text-center">
                <h2>Sugestão de Técnicas</h2>
            </div>
            <table striped bordered hover>
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
    </div>
  );
}

function DynamicView() {
  const [tableData, setTableData] = useState([]);
  const [filterData, setFilterData] = useState({
    academia: true,
    conotativa: true,
    framework: true
  });

  useEffect(() => {
    const fetchTableData = async () => {
      const response = await axios.post('http://localhost:3000/api/tecnicas');
      setTableData(response.data);
    };
    fetchTableData();
  }, []); 

  function handleCheckboxChange(event) {
    setFilterData({
      ...tableData,
      [event.target.name]: event.target.checked
    });
  }

  function filterTableData() {
    return tableData.map(row => {
      const filteredRow = {};
      for (const [key, value] of Object.entries(row)) {
        if (filterData[key]) {
          filteredRow[key] = value;
        }
      }
      return filteredRow;
    });
  }

  return (
    <div>
      <form>
        <label>
          conotativa:
          <input
            type="checkbox"
            name="conotativa"
            checked={filterData.conotativa}
            onChange={handleCheckboxChange}
          />
        </label>
        <label>
          academia:
          <input
            type="checkbox"
            name="academia"
            checked={filterData.academia}
            onChange={handleCheckboxChange}
          />
        </label>
        <label>
          framework:
          <input
            type="checkbox"
            name="framework"
            checked={filterData.framework}
            onChange={handleCheckboxChange}
          />
        </label>
      </form>
      <table>
        <thead>
          <tr>
            {Object.entries(tableData).map(([key, value]) => {
              if (value) {
                return <th key={key}>{key}</th>;
              } else {
                return null;
              }
            })}
          </tr>
        </thead>
        <tbody>
          {filterTableData().map((row, index) => {
            return (
              <tr key={index}>
                {Object.entries(row).map(([key, value]) => {
                  return <td key={key}>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Resumo</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (            
            <tr key={item.id}>
              <td>{item.ID}</td>
              <td>{item.nome}</td>
              <td>{item.resumo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilteredTable;;