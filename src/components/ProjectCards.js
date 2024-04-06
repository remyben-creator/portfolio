import { Col } from 'react-bootstrap';


export const ProjectCard = ({title, description, imgUrl, link }) => {
    return (
        <Col sm={6} md={4} >
            <div className="project-imgbx">
                <img src={imgUrl} />
            </div>
            <div className="project-text">
                <h4>{title}</h4>
                <a href={link}>View Project</a>
                <span>{" | " + description}</span>
            </div>
        </Col>

    )
};