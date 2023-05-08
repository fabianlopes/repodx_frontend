import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaExpand } from 'react-icons/fa';

function ZoomableImage({ src }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="zoomable-image" onClick={handleShow}>
        <img src={src} alt="Imagem" data-toggle="tooltip" title='Clique na imagem para dar zoom' />
        <FaExpand className="icon" />
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="d-flex justify-content-center">
          <img src={src} alt="Imagem" className="modal-image" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ZoomableImage;
