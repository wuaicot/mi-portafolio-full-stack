import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section py-0  px-3" id="about ">
      <Row className="justify-content-center ">
        <Col
          lg={8}
          md={10}
          sm={12}
          className="home-about-description text-center"
        >
          <h1
            className=" text-uppercase fw-bold purple "
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.4rem)",
              paddingTop: "0",
              transform: "translateY(-50px)",
            }}
          >
            PERMÍTAME <span className="purple">PRESENTARME</span>
          </h1>
          <p className=" text-justify text-md-center">
            Me apasiona la programación y estoy en constante aprendizaje.
            <br />
            <br />
            Soy fluido en las siguientes tecnologías:
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              {[
                "Javascript",
                "Typescript",
                "Taildwind.css",
                "Html",
                "Node/NestJS",
                "Express",
                "React/NextJS",
                "Redux",
                "PostgreSQL/Prisma",
              ].map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <br />
            <br />
            Mi campo de interés es la innovación de herramientas digitales
            &nbsp;
            <i>
              <b className="purple">y soluciones basadas en IA</b>.
            </i>
            <br />
            <br />
            Siempre que puedo, también trabajo en el código de algunos productos
            personales
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center ">
        <Col md={12} className="home-about-social text-center">
          <h1 className="mb-3">CONTACTAME</h1>
          <p className="mb-4">Puedes hacer clic en:</p>
          <ul className="home-about-social-links d-flex flex-wrap justify-content-center gap-3 p-0">
            <li className="social-icons">
              <a
                href="https://github.com/wuaicot"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons github"
              >
                <AiFillGithub size={32} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/naiycol"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons twitter"
              >
                <AiOutlineTwitter size={32} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/wuaicot/"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons linkedin"
              >
                <FaLinkedinIn size={32} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/naycol.linares"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons instagram"
              >
                <AiFillInstagram size={32} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.youtube.com/@wuaicot"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons youtube"
              >
                <AiFillYoutube size={32} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/56963380684"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons whatsapp"
              >
                <FaWhatsapp size={32} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;
