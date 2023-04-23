import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import tedax from '../data/TEDXA.json'


function Tecnica() {

  const { id } = useParams();
  const tecnica = tedax.filter(Item => Item.ID === id);
  
  return (

    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{tecnica[0].nome}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{tecnica[0].ID}</Card.Subtitle>
            <Card.Text>
            {tecnica[0].resumo}
            </Card.Text>
            <ListGroup variant="flush">
            <ListGroup.Item>{tecnica[0].contexto}</ListGroup.Item>
            <ListGroup.Item>{tecnica[0].utilizacao}</ListGroup.Item>
            <ListGroup.Item>{tecnica[0].motivo}</ListGroup.Item>
        </ListGroup>
        </Card.Body>
    </Card>
    );
}

export default Tecnica;