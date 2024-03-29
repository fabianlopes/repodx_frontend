import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TabelaSearch({ data }) {

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

  return (
    
    <>
      <input type="text" placeholder="Pesquisar..." onChange={handleSearch} />
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th style={{ width: '40%' }}>Resumo</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => {
              return (
                <tr key={index} data-toogle="tooltip" title={row.resumo}>                
                  <td><Link to={`/tecnica/${row.ID}`} target='_blank'>{row.ID}</Link></td>
                  <td><Link to={`/tecnica/${row.ID}`} target='_blank'>{row.nome}</Link></td>
                  <td>{row.resumo}</td>
                </tr>
                );
            })}
          </tbody>
        </Table>
    </>
    
  );
}

export default TabelaSearch;