import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ruleta from "../../Assets/Projects/ruleta.png";
//import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import demoe from "../../Assets/Projects/demo-e-commerce.png";
import demoScroll from "../../Assets/Projects/demo-Scroll.png";
import dropshipping from "../../Assets/Projects/demoDropShippingLaptop.png";
import enesperalaptop from "../../Assets/Projects/enesperalaptop.png";
import landinglaptop from "../../Assets/Projects/landinglaptop.png";
//import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis Proyectos <strong className="purple">Recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algunos proyectos en los que he trabajado últimamente{" "}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landinglaptop}
              isBlog={false}
              title="Demo-Landing Page"
              description="este es un ejemplo de una landing page , con un diseño minimalista, moderno y responsivo para dispositivos móviles y de escritorio. Se utilizó ReactJS HTML, CSS y JavaScript para su creación"
              ghLink="https://github.com/wuaicot/landingpage-templete.git"
              demoLink="https://landingpage-templete.vercel.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landinglaptop}
              isBlog={false}
              title="Demo-Landing Page"
              description="este es un ejemplo de una landing page , con un diseño minimalista, moderno y responsivo para dispositivos móviles y de escritorio. Se utilizó ReactJS HTML, CSS y JavaScript para su creación"
              ghLink="https://github.com/wuaicot/landingpage-templete.git"
              demoLink="https://landingpage-templete.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enesperalaptop}
              isBlog={false}
              title="Enespera.com"
              description="una aplicacion web para recervas y compra de propiedades inmuebles. Se utilizó React, Redux, CSS y JavaScript para su creación"
              ghLink=""
              demoLink="https://www.enespera.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Sala de chat personal o espacio de trabajo para compartir recursos y pasar el rato con amigos, creado con react.js, Material-UI y Firebase. Tiene funciones que permiten al usuario enviar mensajes en tiempo real, compartir imágenes y admite reacciones en los mensajes"
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dropshipping}
              isBlog={false}
              title="Demo-DropShipping"
              description="Un ejemplo de una app que consume datos de las API¨s PRINTFULL y SNIPCART, CREADA CON NextJS, NpdeJS y Talidwindcss"
              ghLink="https://github.com/wuaicot/demo_dropshipping.git"
              demoLink="https://demo-dropshipping.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={demoe}
              isBlog={false}
              title="Demo E-Comerce"
              description="Un ejemplo de tienda en línea, con un diseño minimalista y moderno, con un diseño responsivo para dispositivos móviles y de escritorio. Se utilizó NextJS, Shopify, NodeJS y TypesCript para su creación"
              ghLink="https://github.com/wuaicot/Demo-e-comerceWuaicot.git"
              demoLink="https://demo-e-comerce-wuaicot.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={demoScroll}
              isBlog={false}
              title="Scroll Performance Test"
              description="Un ejemplo de página web con un comodo rendimiento en el desplazamiento scroll. Se utilizó NextJS, TailwindCSS y JavaScript (express) para su creación"
              ghLink="https://github.com/wuaicot/new-page-new.git"
              demoLink="https://new-page-new.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blog-Wuaicot"
              description="Mi página de blog personal está creada con Next.js y Tailwind CSS, que toma el contenido de los archivos de maquetación y lo renderiza con Next.js. Admite el modo oscuro y permite escribir blogs fácilmente con Markdown"
              ghLink="https://github.com/wuaicot/Blog-Wuaicot.git"
              demoLink="https://blog-wuaicot-rust.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Editor de código y Markdown en línea creado con react.js. Editor en línea que admite código HTML, CSS y JS con vista instantánea del sitio web. Editor de Markdown en línea para crear archivos README que admiten GFM, etiquetas HTML personalizadas con barra de herramientas y vista previa instantánea. Ambos editores admiten el guardado automático del trabajo mediante almacenamiento local."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ruleta}
              isBlog={false}
              title="WUAICOT RULETA"
              description="Una aplicación web full-stack que implementa un juego de ruleta multijugador. El frontend, desarrollado con React y Babylon.js, ofrece una experiencia 3D inmersiva. El backend, construido con Node.js, Express y Socket.io, gestiona la lógica del juego en tiempo real y la comunicación entre los jugadores.  MobX se utiliza para la gestión del estado en el frontend."
              ghLink="https://github.com/wuaicot/WUAICOT-RULETA.git"
              demoLink="https://wuaicot-ruleta-n2qj-theta.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
