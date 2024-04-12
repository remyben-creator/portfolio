import { Container, Row, Col } from 'react-bootstrap';
//import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/wave.png";
//import 'animate.css';
//import TrackVisibility from 'react-on-screen';

//, backgroundColor: 'white', padding: '10px', borderRadius: '5px'
export const Banner = () => {
  
    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} ms={6} xl={7}>
                            <div>
                                <span className="tagline">Welcome to my Portfolio!</span>
                                <h1 style={{ color: 'black', backgroundColor: 'white', padding: '10px', borderRadius: '5px'}}>{"Hi, I'm Benjamin "}<span className="wrap"></span></h1>
                                <p style={{ color: 'black', backgroundColor: 'white', padding: '10px', borderRadius: '5px'}}>
                                    I am a Junior at Vassar College studying Computer Science and Mathematics. I also 
                                    studied for a semester at Yale NUS college in Singapore. Thanks for taking a look at
                                    my portfolio. Please feel free to check out my <a href="/#projects">projects</a> and <a href="/#contacts">contact</a> me if you have any questions.</p>

                            </div>
                    </Col>
                    <Col xs={12} ms={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
