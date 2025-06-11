import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view glass-effect h-100 d-flex flex-column">
      <div className="overflow-hidden">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          className="img-fluid"
          style={{ objectFit: "cover", height: "200px", width: "100%" }}
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold mb-3">{props.title}</Card.Title>
        <Card.Text className="flex-grow-1 text-justify">
          {props.description}
        </Card.Text>
        <div className="mt-3 d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            className="glass-effect"
          >
            <BsGithub size={20} /> &nbsp;
            {props.isBlog ? "Blog" : "Ir a GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="glass-effect"
            >
              <CgWebsite size={20} /> &nbsp;
              Ver
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
