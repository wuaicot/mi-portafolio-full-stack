import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import profileImg from "../../Assets/unnamed.jpg";
import SEO from "../SEO";

function About() {
  return (
    <main>
      <SEO 
        title="Sobre Mí"
        description="Conoce la trayectoria de Naycol Linares, Desarrollador Full Stack. Especialista en React, Node.js y NestJS con un enfoque en la innovación y soluciones digitales de alto impacto."
        keywords="Sobre Naycol Linares, Full Stack Developer Experience, React Developer Chile, Node.js Expert, Habilidades Programación"
        url="about"
      />
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
                  alt="Naycol Rodolfo Linares Villasmil - Desarrollador Full Stack"
                  className="img-fluid"
                  style={{ borderRadius: "50%", maxWidth: "150px" }}
                />
              </div>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="Naycol Linares - Especialista en Desarrollo Web y IA" className="img-fluid" />
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
    </main>
  );
}

export default About;





//import { SiChatbot, SiFigma, SiTrello, SiShopify, SiAstro, SiTailwindcss, SiBootstrap, SiVite, SiTypescript } from "react-icons/si";