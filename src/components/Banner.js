import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
 import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/friends.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Full-Stack Developer', 'Machine Learning', 'AI Enthusiast', 'Problem Solver'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {
            clearInterval(tick)};}, [text])
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);        
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);}
        
        }
    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} ms={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? 'animated__animated animate__fadeIn': ""}>
                                <span className="tagline">Welcome to my Portfolio!</span>
                                <h1 style={{ color: 'black', backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>{"Hi, I'm Benjamin "}<span className="wrap"></span></h1>
                                <p style={{ color: 'black', backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
                                    I am a Junior at Vassar College studying Computer Science and Mathematics. I also 
                                    studied for a semester at Yale NUS college in Singapore. Thanks for taking a look at
                                    my portfolio. Please feel free to check out my <a href="/#projects">projects</a> and <a href="/contact">contact</a> me if you have any questions.</p>
                                <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25} /></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} ms={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}