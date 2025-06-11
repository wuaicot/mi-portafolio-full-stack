import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer glass-effect mb-4 ">
      <Row className="align-items-center text-center text-md-start">
        <Col xs={12} md={4} className="mb-3 mb-md-0">
          <h3 className="mb-0">Diseñado y desarrollado por Naycol R. Linares V.</h3>
        </Col>

        <Col xs={12} md={4} className="mb-2 mb-md-0">
          <h3 className="mb-0">
            © {year} <span className="purple"> WUAICOT</span>
          </h3>
        </Col>

        <Col xs={12} md={4} className="footer-body">
          
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
