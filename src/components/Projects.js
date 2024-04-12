import { ProjectCard } from './ProjectCards';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import colorSharp2 from '../assets/img/color-sharp2.png';
import React from 'react';
import { Link, Route } from 'react-router-dom';


import friends from "../assets/img/friends2.jpg";
import brewer from "../assets/img/brewerscloset.png";
import pokemon1 from "../assets/img/pokemon1.png";
import manakin from "../assets/img/manakinbird.jpg";
import chefhat from "../assets/img/chef.png";
import butterfly from "../assets/img/butterfly.jpg";



export const Projects = () => {


    <div>
        <Route path="/Friends">
            <Link to="/Friends">Friends</Link>
        </Route>
        
        <Route path="/Marketplace">
            <Link to="/Marketplace">Marketplace</Link>
        </Route>

        <Route path="/Pokemon">
            <Link to="/Pokemon">Pokemon</Link>
        </Route>

        <Route path="/Manakins">
            <Link to="/Manakins">Manakins</Link>
        </Route>

        <Route path="/Recipes">
            <Link to="/Recipes">Recipes</Link>
        </Route>

        <Route path="/MLAnimals">
            <Link to="/MLAnimals">MLAnimals</Link>
        </Route>
    </div>

    const projects1 = [
        {
        title: "Friends Application",
        description: "Ruby on Rails application for friend making.",
        imgUrl: friends,
        link: "/Friends",

        },
        {
        title: "Marketplace Application",
        description: "Java Android Application for buying and selling items on campus.",
        imgUrl: brewer,
        link: "/Marketplace",

        }

    ];
    const projects2 = [
        {
            title: "AI Recipe Creation Application",
            description: "OPENAI API calls for recipe creation.",
            imgUrl: chefhat,
            link: "/Recipes",
        
            },
            {
            title: "Animal Image Classification",
            description: "Keras Models for classifying animal images.",
            imgUrl: butterfly,
            link: "/MLAnimals",
        
            }
    ];
    const projects3 = [
        {
            title: "Pokemon Reverse Engineering",
            description: "C and Assembly code for reverse engineering Pokemon Red and Blue.",
            imgUrl: pokemon1,
            link: "/Pokemon",
    
            },
            {
            title: "Lance Tailed Manakin Mating Dance",
            description: "Netlogo ABM for modeling courtship behavior in Lance Tailed Manakins.",
            imgUrl: manakin,
            link: "/Manakins",
        
            }

    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <div className='project-bx'>
                        <h2> Projects </h2>
                        <p>My Personal Projects</p>
                            
                            <Tab.Container id="projects-tabs" defaultActiveKey="link-1">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-1">Software Engineering</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-2">AI and ML</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-3">Miscellaneous</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="link-1">
                                        <Row>
                                            {
                                                projects1.map((project, index) => {
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
                                            <Row>
                                            {
                                                projects2.map((project, index) => {
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
                                    <Tab.Pane eventKey="link-3">
                                    <Row>
                                    {
                                                projects3.map((project, index) => {
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