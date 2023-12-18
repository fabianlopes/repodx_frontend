//import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Tabela({ data }) {

  const setData = data;

  return (
    
    <>      
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>              
            </tr>
          </thead>
          <tbody>
            {setData.map((row, index) => {
              return (
                <tr key={index} data-toogle="tooltip" title={row.resumo}>                
                  <td><Link to={`/tecnica/${row.ID}`} target='_blank'>{row.ID}</Link></td>
                  <td><Link to={`/tecnica/${row.ID}`} target='_blank'>{row.nome}</Link></td>                  
                </tr>
                );
            })}
          </tbody>
        </Table>
    </>
    
  );
}

export default Tabela;