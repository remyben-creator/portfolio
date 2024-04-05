import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { ArrrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";

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
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>{"Hi, I'm Benjamin"}<span className="wrap">web developer</span></h1>
                        <p>I'm not sure what goes here yet! </p>
                    </Col>
                    <Col xs={12} ms={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}