//src/components/Home/Home.js
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import SEO from "../SEO";

function Home() {
  return (
    <main>
      <SEO 
        title="Home"
        description="Explora el portafolio de Naycol Linares, Desarrollador Full Stack experto en React, Node.js y soluciones innovadoras de IA. Potencia tu negocio con software de alta calidad."
        keywords="Full Stack Developer, React Expert, Node.js Specialist, Desarrollador Web Chile, AI Integration, Naycol Linares, Wuaicot"
      />
      <Container fluid className="home-section " id="home">
        <Particle />
        <Container className="home-content pt-5 ">
          <Row className="align-items-center">
            <Col
              xs={12}
              md={7}
              className="home-header text-center text-md-start pt-4 pt-md-5"
            >
              <h1 className="heading home-title mb-3">
                Hola!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name mb-4">
                Soy
                <strong className="main-name">
                  {" "}
                  Naycol Rodolfo Linares Villasmil
                </strong>
              </h1>

              <div className="typewriter-container text-md-start text-center px-3 px-md-0">
                <Type />
              </div>
            </Col>

            <Col
              xs={12}
              md={5}
              className="d-flex justify-content-center mt-4 mt-md-0"
            >
              <img
                src={homeLogo}
                alt="Naycol Linares - Full Stack Developer Portfolio Illustration"
                className="img-fluid"
                style={{ maxHeight: "400px", width: "100%", objectFit: "contain" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </main>
  );
}

export default Home;

