import { Col } from 'react-bootstrap';

export const Project1 = ({title, description, imgUrl, link }) => {
    return (
        <Col sm={6} md={4} >
            <div className="project-imgbx">
                <img src={imgUrl} />
            </div>
            <div className="project-text">
                <h4>{title}</h4>
                <span>{" | " + description}</span>
            </div>
        </Col>

    )
};