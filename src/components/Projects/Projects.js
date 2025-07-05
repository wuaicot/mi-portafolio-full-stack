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

function Projects() {
  return (
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
              img: landinglaptop,
              title: "Demo-Landing Page",
              description:
                "Ejemplo de landing page minimalista, moderno y responsivo. ReactJS, HTML, CSS, JavaScript.",
              ghLink: "https://github.com/wuaicot/landingpage-templete.git",
              demoLink: "https://landingpage-templete.vercel.app/"
            },
            {
              img: enesperalaptop,
              title: "Enespera.com",
              description:
                "Aplicación web para reservas y compra de propiedades. React, Redux, CSS, JavaScript.",
              ghLink: "",
              demoLink: "https://www.enespera.com/"
            },
            {
              img: chatify,
              title: "Chatify",
              description:
                "Sala de chat personal con React.js, Material-UI, Firebase: mensajes en tiempo real, compartir imágenes, reacciones.",
              ghLink: "https://github.com/soumyajit4419/Chatify",
              demoLink: "https://chatify-49.web.app/"
            },
            {
              img: dropshipping,
              title: "Demo-DropShipping",
              description:
                "App que consume las APIs Printful y Snipcart con NextJS, NodeJS, TailwindCSS.",
              ghLink: "https://github.com/wuaicot/demo_dropshipping.git",
              demoLink: "https://demo-dropshipping.vercel.app/"
            },
            {
              img: demoe,
              title: "Demo E-Commerce",
              description:
                "Tienda en línea minimalista con NextJS, Shopify, NodeJS, TypeScript.",
              ghLink:
                "https://github.com/wuaicot/Demo-e-comerceWuaicot.git",
              demoLink: "https://demo-e-comerce-wuaicot.vercel.app/"
            },
            {
              img: demoScroll,
              title: "Scroll Performance Test",
              description:
                "Página web con rendimiento optimizado de scroll usando NextJS, TailwindCSS, JavaScript.",
              ghLink: "https://github.com/wuaicot/new-page-new.git",
              demoLink: "https://new-page-new.vercel.app/"
            },
            {
              img: bitsOfCode,
              title: "Blog-Wuaicot",
              description:
                "Blog personal con Next.js y TailwindCSS, contenido Markdown y modo oscuro.",
              ghLink: "https://github.com/wuaicot/Blog-Wuaicot.git",
              demoLink: "https://blog-wuaicot-rust.vercel.app/"
            },
            {
              img: editor,
              title: "Editor.io",
              description:
                "Editor de código y Markdown en línea con React.js: vista instantánea y guardado automático.",
              ghLink: "https://github.com/soumyajit4419/Editor.io",
              demoLink: "https://editor.soumya-jit.tech/"
            },
            {
              img: ruleta,
              title: "WUAICOT RULETA",
              description:
                "Juego de ruleta multijugador 3D con React, Babylon.js, Node.js, Express, Socket.io y MobX.",
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
  );
}

export default Projects;
