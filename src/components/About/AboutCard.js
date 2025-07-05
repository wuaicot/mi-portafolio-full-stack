import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hola Mundo! <span className="purple">Naycol R. Linares, </span> */}
            En programación  me identifico como <span className="purple"> wuaicot</span>
            <br />
            Actualmente trabajo como desarrollador de aplicaciones web en modalidad freelance.            <br />
            Completé un BootCamp especializado Full Stack y otros cursos
            <br />
            <br />
            ¡Además de codificar, hay otras actividades que me encanta hacer!          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Jugar Videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight />  Escribir en blogs sobre tecnología
            </li>
            <li className="about-activity">
              <ImPointRight /> Trabajos part-time no relacionados con la programación
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "¡Esfuérzate por aprender algo nuevo cada día!"{" "}
          </p>
          <footer className="blockquote-footer">wuaicot</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
