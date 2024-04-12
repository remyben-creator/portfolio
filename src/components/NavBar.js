import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo2.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { Link, Route } from 'react-router-dom';


export const NavBar = () => {
    
    <Route path="/">
        <Link to="/">Home</Link>
    </Route>

    const [activeLink,  setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll)
    })

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
      <div style={{display: 'flex', alignItems: 'center'}}>
            <img src={logo} alt="Logo" style={{width: '800px', height: '200px'}}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" > 
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#home" 
                      className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'}
                      onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="/#projects"
                      className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'}
                      onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="/#contacts"
                      className={activeLink === 'contacts' ? 'active-navbar-link' : 'navbar-link'}
                      onClick={() => onUpdateActiveLink('contacts')}>ContactForm</Nav.Link>
            

          </Nav>
          <span className="navber-text"  style={{display: 'flex', alignItems: 'center'}}>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/benjamin-remy-b46b8822b/"><img src={navIcon1} alt=""></img></a>
                <a href="https://github.com/remyben-creator"><img src={navIcon2} alt=""></img></a>
            </div>
          </span>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    );
}
