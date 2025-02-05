import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.webp";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMITAME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Me enamoré de la programación y estoy en constante apredizaje
              <br />
              <br />
              Soy fluido en lenguajes y tecnologías como
              <i>
                <b className="purple">
                  {" "}
                  Javascript, HTML, CSS, TypeScript, Node, React, Redux,
                  postgre-SQL, entre otros
                </b>
              </i>
              <br />
              <br />
              Mi campo de interés es la creación de nuevas &nbsp;
              <i>
                <b className="purple">tecnologías y aplicaciones web </b> y
                también en áreas relacionadas con <b className="purple">IA.</b>
              </i>
              <br />
              <br />
              Siempre que puedo, también hago adelantos en el código de algunos
              productos que estoy desarrollando con{" "}
              <b className="purple">Node.js</b>,
              <i>
                <b className="purple">
                  {" "}
                  Biblioteca y marcos de trabajo de Javascript modernos
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js, Next.js | Vite | Astro.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              Siéntete libre de <span className="purple">conectar </span>conmigo
              en:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/wuaicot"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/naiycol"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/wuaicot/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/naycol.linares"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
