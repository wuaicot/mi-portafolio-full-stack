import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ruleta from "../../Assets/Projects/ruleta.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import demoe from "../../Assets/Projects/demo-e-commerce.png";
import demoScroll from "../../Assets/Projects/demo-Scroll.png";
import dropshipping from "../../Assets/Projects/demoDropShippingLaptop.png";
import enesperalaptop from "../../Assets/Projects/enesperalaptop.png";
import landinglaptop from "../../Assets/Projects/landinglaptop.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import libroderegistros from "../../Assets/Projects/libroderegistros.png";
import cuadrusistem from "../../Assets/Projects/cuadrusistem.png";
import SEO from "../SEO";

function Projects() {
  return (
    <main>
      <SEO 
        title="Proyectos"
        description="Explora los proyectos de Naycol Linares: E-commerce, Aplicaciones de IA, Sistemas de Gestión y experiencias 3D multijugador. Soluciones Full Stack con React, Node.js y más."
        keywords="Proyectos Full Stack, Portafolio React, Desarrollador Node.js, Aplicaciones IA, Next.js Projects, Naycol Linares Portfolio"
        url="project"
      />
      <Container fluid className="project-section py-5" id="projects">
        <Particle />
        <Container>
          <h1 className="project-heading text-center mb-3 mt-5">
            Mis Proyectos <strong className="purple">Recientes</strong>
          </h1>
          <p className="text-center text-white mb-5">
            Aquí hay algunos proyectos en los que he trabajado últimamente
          </p>
          <Row className="justify-content-center gx-4 gy-4">
            {[
              {
                img: cuadrusistem,
                title: "CuadruSistem",
                description:
                  "Sistema integral de gestión administrativa diseñado para la optimización de procesos empresariales. Desarrollado con una arquitectura escalable utilizando Express, Vite y TypeScript, garantizando alta disponibilidad.",
                ghLink: "",
                demoLink: "https://cuadrusistem-obelisco-production-3428.up.railway.app/"
              },
              {
                img: libroderegistros,
                title: "Libro de Registros 2.0",
                description:
                  "Plataforma avanzada de control de asistencia y gestión de accesos con autenticación robusta. Construida con Next.js y NestJS, optimizando la persistencia de datos y el tiempo de respuesta del servidor.",
                ghLink: "",
                demoLink: "https://conozca-libro-de-registros-2-0.vercel.app/"
              },
              {
                img: landinglaptop,
                title: "Modern Landing Page",
                description:
                  "Desarrollo de landing page de alta conversión con enfoque en UX/UI responsivo. Implementación de animaciones fluidas y optimización de Core Web Vitals para mejorar el posicionamiento SEO.",
                ghLink: "https://github.com/wuaicot/landingpage-templete.git",
                demoLink: "https://landingpage-templete.vercel.app/"
              },
              {
                img: enesperalaptop,
                title: "Enespera.com",
                description:
                  "Aplicación del sector Real Estate para la reserva y gestión de propiedades en tiempo real. Gestión de estado complejo con Redux y una interfaz optimizada para dispositivos móviles.",
                ghLink: "",
                demoLink: "https://www.enespera.com/"
              },
              {
                img: chatify,
                title: "Chatify",
                description:
                  "Aplicación de mensajería instantánea con Firebase. Permite comunicación en tiempo real, transferencia de archivos y reacciones, priorizando la baja latencia y la seguridad de los datos.",
                ghLink: "https://github.com/wuaicot/Chatify",
                demoLink: "https://chatify-49.web.app/"
              },
              {
                img: dropshipping,
                title: "E-Commerce Automático",
                description:
                  "Solución de DropShipping integrada con APIs de logística (Printful) y pagos (Snipcart). Automatización de inventario y pedidos utilizando Next.js y Node.js.",
                ghLink: "https://github.com/wuaicot/demo_dropshipping.git",
                demoLink: "https://demo-dropshipping.vercel.app/"
              },
              {
                img: demoe,
                title: "Shopify Custom Store",
                description:
                  "Experiencia de compra premium integrada con el ecosistema de Shopify. Uso de TypeScript para un código robusto y Next.js para una renderización ultra rápida.",
                ghLink:
                  "https://github.com/wuaicot/Demo-e-comerceWuaicot.git",
                demoLink: "https://demo-e-comerce-wuaicot.vercel.app/"
              },
              {
                img: demoScroll,
                title: "Performance Analytics",
                description:
                  "Laboratorio de optimización de rendimiento enfocado en técnicas de renderizado y scroll fluido. Caso de estudio sobre eficiencia de carga en el frontend.",
                ghLink: "https://github.com/wuaicot/new-page-new.git",
                demoLink: "https://new-page-new.vercel.app/"
              },
              {
                img: bitsOfCode,
                title: "Tech Blog Professional",
                description:
                  "Plataforma de contenidos técnicos basada en Markdown. Sistema de gestión de contenidos ligero que prioriza la legibilidad y el SEO orgánico.",
                ghLink: "https://github.com/wuaicot/Blog-Wuaicot.git",
                demoLink: "https://blog-wuaicot-rust.vercel.app/"
              },
              {
                img: editor,
                title: "Cloud Code Editor",
                description:
                  "Editor de código colaborativo con soporte para Markdown. Ofrece previsualización instantánea en el navegador y persistencia de sesiones con React.js.",
                ghLink: "https://github.com/wuaicot/Editor.io",
                demoLink: "https://editor.soumya-jit.tech/"
              },
              {
                img: ruleta,
                title: "3D Multiplayer Experience",
                description:
                  "Juego inmersivo multijugador con gráficos 3D. Integración de Babylon.js para el motor gráfico y Socket.io para la sincronización de estado en tiempo real entre múltiples usuarios.",
                ghLink: "https://github.com/wuaicot/WUAICOT-RULETA.git",
                demoLink:
                  "https://wuaicot-ruleta-n2qj-theta.vercel.app/"
              }
            ].map((proj, idx) => (
              <Col xs={12} sm={6} md={4} key={idx} className="d-flex">
                <ProjectCard
                  imgPath={proj.img}
                  isBlog={false}
                  title={proj.title}
                  description={proj.description}
                  ghLink={proj.ghLink}
                  demoLink={proj.demoLink}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </main>
  );
}

export default Projects;
