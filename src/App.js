import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ContactForm />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
