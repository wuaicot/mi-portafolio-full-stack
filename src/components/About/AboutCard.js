import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola! Soy <span className="purple">Naycol Rodolfo Linares Villasmil</span>,
            desarrollador Full Stack con base en <span className="purple">Chile.</span>
            <br />
            Me especializo en construir aplicaciones web modernas, escalables y centradas en el usuario.
            <br />
            Actualmente, me desempeño como desarrollador freelance, liderando proyectos desde la arquitectura hasta el despliegue.
            <br />
            <br />
            ¡Además de escribir código, me apasiona:!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Explorar e integrar soluciones de Inteligencia Artificial
            </li>
            <li className="about-activity">
              <ImPointRight /> Escribir sobre tendencias tecnológicas en mi Blog
            </li>
            <li className="about-activity">
              <ImPointRight /> Participar en comunidades de código abierto
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "La tecnología es mejor cuando une a las personas y resuelve problemas reales."{" "}
          </p>
          <footer className="blockquote-footer">Naycol Linares</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
