import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Row, Col } from 'react-bootstrap';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className='skills-bx'>
                        <h2> Skills </h2>
                        <p>This is currently a placeholder text for a skill
                            <br></br>
                            <p>This is another placeholder</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item"> 
                                <img src={meter1} alt="Image" />
                                <h5> Web Development </h5>
                                </div>
                                <div className="item"> 
                                <img src={meter2} alt="Image" />
                                <h5> Android Devlopment </h5>
                                </div>
                                <div className="item"> 
                                <img src={meter3} alt="Image" />
                                <h5> JavaScript </h5>
                                </div>
                                <div className="item"> 
                                <img src={meter1} alt="Image" />
                                <h5> React </h5>
                                </div>
                            </Carousel>
                        </p>

                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-img-lefta" src={colorSharp}/>
        </section>
    )
}
