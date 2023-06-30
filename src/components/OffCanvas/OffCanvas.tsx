import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Offcanvas, Nav } from "../../utilis/Bootstrap";

interface OffCanvasExampleProps {
  name: string;
  placement: string;
}

function OffCanvasExample({ name, placement, ...props }: OffCanvasExampleProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Quirky Chronicles: Tales of the Unexpected</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            <Nav.Link as={Link} to='/'>Homepage</Nav.Link>
            <Nav.Link as={Link} to='/episode-1'>Episode 1</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function CanvasPlacement() {
  return (
    <>
      {['start'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement}/>
      ))}
    </>
  );
}

export default CanvasPlacement;