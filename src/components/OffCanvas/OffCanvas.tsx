import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  Book } from 'react-bootstrap-icons';
import { Button, Offcanvas, Nav } from "../../utilis/Bootstrap";

interface OffCanvasExampleProps {
  placement: string;
}

function OffCanvasExample({ placement, ...props }: OffCanvasExampleProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        < Book color="silver" size={25} />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Table of Content</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/visual-1'>Visual One</Nav.Link>
            <Nav.Link as={Link} to='/visual-2'>Visual Two</Nav.Link>
            <Nav.Link as={Link} to='/visual-3'>Visual Three</Nav.Link>
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
        <OffCanvasExample key={idx} placement={placement} />
      ))}
    </>
  );
}

export default CanvasPlacement;