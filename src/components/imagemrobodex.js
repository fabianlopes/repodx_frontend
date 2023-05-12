import React from 'react';
import { Container, Image } from 'react-bootstrap';

function ImagemRobodex(imagem, click) {
  return (
    <Container>
        <Image
            src={imagem}
            alt="robodex"
            className="img-fluid imagem-robodex"
            onClick={click}
            />
    </Container>
    
  );
}

export default ImagemRobodex;
