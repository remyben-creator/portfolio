import { ProjectCard } from './ProjectCards';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import colorSharp2 from '../assets/img/color-sharp2.png';
import { Link } from 'react-router-dom';

import { Route } from 'react-router-dom';

import friends from "../assets/img/friends.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";



export const Projects = () => {


    <Route path="/Friends">
        <Link to="/Friends">Friends</Link>
    </Route>


    const projects = [
        {
        title: "Project 1",
        description: "This is a project",
        imgUrl: friends,
        link: "/Friends",

        },
        {
        title: "Project 2",
        description: "This is a project",
        imgUrl: projImg2,
        link: "https://www.google.com",

        },
        {
        title: "Project 3",
        description: "This is a project",
        imgUrl: projImg3,
        link: "https://www.google.com",

        },
    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <div className='project-bx'>
                        <h2> Projects </h2>
                        <p>This is currently a placeholder text for a project</p>
                            <br></br>
                            <p>This is another placeholder</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="link-1">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-1">Tab One</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-2">Tab Two</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-3">Tab Three</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="link-1">
                                        <Row>
                                            {
                                                projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="link-2">
                                            <p> placeholder </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="link-3">
                                    <Row>
                                            <p> placeholder </p>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>

    )

}