import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Project1 } from './components/Project1';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner />
        <ContactForm />
        <Skills />
        <Projects />
        <Footer />

        <Link to="/">Home</Link>
        <Link to="/Project1">Project 1</Link>

        <Routes>
          <Route path="/" exact>
            <h1>Home Page</h1>
          </Route>
          <Route path="/project1">
            <h1>Project 1</h1>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
