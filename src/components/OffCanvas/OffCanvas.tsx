import React, { useState } from 'react';
import { Button, Offcanvas } from "../../utilis/Bootstrap";

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
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui exercitationem fuga eos eius temporibus unde. Similique iure eligendi accusantium totam excepturi vero doloremque non maiores repellendus, quisquam sunt distinctio numquam!
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function CanvasPlacement() {
  return (
    <>
      {['start'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default CanvasPlacement;