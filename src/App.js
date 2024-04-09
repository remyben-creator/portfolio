import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Friends" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

function Project() {
  const location = useLocation();
  const { title, description, imgUrl } = location.state || {};

  console.log({ title, description, imgUrl });


  return (
    <div style={{ paddingTop: '200px' }}>
      <Col sm={6} md={4} >
            <div className="project-imgbx">
                <img src={imgUrl} />
            </div>
            <div className="project-text">
                <h4>{title}</h4>
                <span>{" | " + description}</span>
            </div>
        </Col>
    </div>
  );
}

export function Home() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <>
      <Banner />
        <div ref={skillsRef}><Skills /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={contactsRef}><ContactForm /></div>
      <Footer />
    </>
  );
}

export default App;
