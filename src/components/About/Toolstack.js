import React, { useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiDiscord,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ icon: null, description: "" });

  const handleShow = (icon, description) => {
    setModalContent({ icon, description });
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const toolDetails = [
    { icon: <SiMacos />, description: "macOS: Un sistema operativo diseñado para dispositivos Apple." },
    { icon: <SiVisualstudiocode />, description: "VS Code: Un editor de código potente y popular." },
    { icon: <SiPostman />, description: "Postman: Una herramienta para pruebas y colaboración de API." },
    { icon: <SiSlack />, description: "Slack: Una plataforma de mensajería para la colaboración en equipo." },
    { icon: <SiVercel />, description: "Vercel: Una plataforma para alojar aplicaciones web modernas." },
    { icon: <SiDiscord />, description: "Discord: Una aplicación de comunicación para comunidades y equipos." },
    { icon: <SiGithub />, description: "GitHub: Una plataforma para el control de versiones y la colaboración de código." },
  ];

  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {toolDetails.map((tool, index) => (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons"
            onClick={() => handleShow(tool.icon, tool.description)}
            style={{ cursor: "pointer" }}
          >
            {tool.icon}
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="md"
        style={{ "--bs-modal-bg": "#d9b8ff" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tool Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
            {modalContent.icon}
          </div>
          <p>{modalContent.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Toolstack;
