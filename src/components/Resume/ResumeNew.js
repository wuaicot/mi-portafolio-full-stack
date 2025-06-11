import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/FS-CV_Naycol_Linares.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const { width } = useWindowDimensions();
  const scale = width > 992 ? 1.7 : width > 768 ? 1.2 : 0.8;

  return (
    <Container fluid className="resume-section py-5" id="resume">
      <Particle />
      <Row className="justify-content-center mb-4">
        <Col xs={12} sm={6} md={4} className="text-center">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="glass-effect w-100"
          >
            <AiOutlineDownload size={20} />&nbsp; Descargar CV
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} className="d-flex justify-content-center">
          <Document file={pdf} className="resume-document">
            <Page pageNumber={1} scale={scale} />
          </Document>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col xs={12} sm={6} md={4} className="text-center">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="glass-effect w-100"
          >
            <AiOutlineDownload size={20} />&nbsp; Descargar CV
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeNew;
