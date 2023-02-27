import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tabela from './components/tabela';
import FilteredTable from './testes';
import './App.css';

function App() {

  /*
  const [tecnicas, setTecnicas] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/assistente')
      .then(res => setTecnicas(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/assistente', { title, completed: false })
      .then(res => setTecnicas([...tecnicas, res.data]))
      .catch(err => console.log(err));
    setTitle('');
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/tecnicas/${id}`)
      .then(res => setTecnicas(tecnicas.filter(tecnica => tecnica._id !== id)))
      .catch(err => console.log(err));
  };

  */

  return (

  <div>    
    <FilteredTable />    
  </div>    

    /*<div>
      <h1>Lista de Tecnicas</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <button>Add</button>
      </form>
      <ul>
        {tecnicas.map(tecnica => (
          <li key={tecnica._id}>
            {tecnica.nome}
            <button onClick={() => handleDelete(tecnica._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>*/
    
  );

}

export default App;