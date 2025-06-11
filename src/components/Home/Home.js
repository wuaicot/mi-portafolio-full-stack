//src/components/Home/Home.js
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
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
                  Naycol R. Linares Villasmil
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
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px", width: "100%", objectFit: "contain" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

