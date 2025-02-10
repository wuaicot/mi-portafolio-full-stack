import React, { useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ icon: null, description: "" });

  const handleShow = (icon, description) => {
    setModalContent({ icon, description });
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const techDetails = [
    { icon: <CgCPlusPlus />, description: "C++: Un lenguaje potente para la programación a nivel de sistema." },
    // eslint-disable-next-line no-script-url
    { icon: <DiJavascript1 />, description: "JavaScript: El lenguaje de la web para experiencias interactivas." },
    { icon: <TbBrandGolang />, description: "Golang: un lenguaje moderno para un desarrollo backend eficiente." },
    { icon: <DiNodejs />, description: "Node.js: Tiempo de ejecución de JavaScript para crear aplicaciones backend escalables." },
    { icon: <DiReact />, description: "React: Una biblioteca para crear interfaces de usuario rápidas y dinámicas." },
    { icon: <SiSolidity />, description: "Solidity:Un lenguaje para desarrollar contratos inteligentes en Ethereum." },
    { icon: <DiMongodb />, description: "MongoDB: Una base de datos NoSQL para aplicaciones modernas." },
    { icon: <SiNextdotjs />, description: "Next.js:Un marco React para la renderización del lado del servidor y la generación de sitios estáticos." },
    { icon: <DiGit />, description: "Git: Sistema de control de versiones para rastrear cambios en el código." },
    { icon: <SiFirebase />, description: "Firebase: una plataforma para crear y escalar aplicaciones móviles y web." },
    { icon: <SiRedis />, description: "Redis: Una base de datos en memoria para un acceso rápido a los datos." },
    { icon: <SiPostgresql />, description: "PostgreSQL: Una potente base de datos relacional de código abierto." },
    { icon: <DiPython />, description: "Python: Un lenguaje versátil para scripts, ciencia de datos y más." },
    { icon: <DiJava />, description: "Java: Un lenguaje robusto para aplicaciones multiplataforma." },
  ];

  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techDetails.map((tech, index) => (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons"
            onClick={() => handleShow(tech.icon, tech.description)}
            style={{ cursor: "pointer" }}
          >
            {tech.icon}
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
          <Modal.Title>Technology Detail</Modal.Title>
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

export default Techstack;








// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <CgCPlusPlus />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <TbBrandGolang />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiNodejs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiReact />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSolidity />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiMongodb />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiNextdotjs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiGit />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiFirebase />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiRedis />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostgresql />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPython />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJava />
//       </Col>
//     </Row>
//   );
// }

// export default Techstack;