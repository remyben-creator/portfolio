import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

/// make sure to add backwards loop

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="aling-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>

                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1}/></a>                            
                            <a href=""><img src={navIcon2}/></a>
                        </div>
                    </Col>

                </Row>
            </Container>
        </footer>
    )

}