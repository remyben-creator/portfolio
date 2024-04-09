import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const ProjectCard = ({title, description, imgUrl, link }) => {
    return (
        <Col sm={6} md={4} >
            <div className="project-imgbx">
                <img src={imgUrl} />
            </div>
            <div className="project-text">
                <h4>{title}</h4>
                <Link to={link}>View Project</Link>
                <span>{" | " + description}</span>
            </div>
        </Col>

    )
};