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
                    <br></br>
                        <h2> Skills </h2>
                        <br></br>
                        <Carousel responsive={responsive}>
                            <h3>Hard Worker</h3>
                            <h3>Quick Learner</h3>
                            <h3>Curious</h3>
                        </Carousel>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
