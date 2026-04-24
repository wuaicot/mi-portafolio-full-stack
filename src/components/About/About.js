import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import profileImg from "../../Assets/unnamed.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <img
                src={profileImg}
                alt="Naycol Rodolfo Linares Villasmil - Foto de perfil"
                className="img-fluid"
                style={{ borderRadius: "50%", maxWidth: "150px" }}
              />
            </div>
            {/* <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Hola <strong className="purple">!</strong>
            </h1>                                  */}
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="Naycol Rodolfo Linares Villasmil - Ilustración sobre mí" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Habilidades <strong className="purple">Profesionales </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Herramientas</strong> que uso
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;





//import { SiChatbot, SiFigma, SiTrello, SiShopify, SiAstro, SiTailwindcss, SiBootstrap, SiVite, SiTypescript } from "react-icons/si";