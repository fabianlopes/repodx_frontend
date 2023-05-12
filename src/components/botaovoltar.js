import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BotaoVoltar({ to, text }) {
  return (
    <Button className='botaovoltar' as={Link} to={to}>
      {text}
    </Button>
  );
}

export default BotaoVoltar;
