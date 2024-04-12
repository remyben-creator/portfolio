
import './App.css';
import React, { useRef } from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';




// Images 
import friends from "./assets/img/friends2.jpg";
import friends1 from "./assets/img/friends_app1.png";
import marketplace from "./assets/img/brewerscloset.png";
import app1 from "./assets/img/app1.png";
import app2 from "./assets/img/app2.png";
import app3 from "./assets/img/app3.png";
import app4 from "./assets/img/app4.png";
import chef from "./assets/img/chef.png";
import ai from "./assets/img/ai.jpg";
import pokemon1 from "./assets/img/pokemon1.png";
import manakinbird from "./assets/img/manakinbird.jpg";
import butterfly from "./assets/img/butterfly.jpg";


function App() {
  return (
    <Router>
      <div>
        
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Marketplace" element={<Marketplace />} />
          <Route path="/Pokemon" element={<Pokemon />} />
          <Route path="/Manakins" element={<Manakins />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/MLAnimals" element={<MLAnimals />} /> 
        </Routes>
      </div>
    </Router>
  );
}



function Friends() {
  return (
    <div style={{ paddingTop: '200px' }}>
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} ms={6} xl={7}>
                        <h1> Friends Application </h1>
                        <ul>
                          <li>Links:</li>
                            <ul>
                              <li>GitHub: <a href="https://github.com/remyben-creator/FriendsApp">
                              https://github.com/remyben-creator/FriendsApp</a></li>
                              <li>Website: <a href="https://friendsonrails-34bb813bdd6f.herokuapp.com/">
                              https://friendsonrails-34bb813bdd6f.herokuapp.com/</a></li>
                            </ul>
                          <li>Description:</li>
                            <ul>
                              <li>Developed a Friends App from scratch using Ruby on Rails, following a tutorial as a learning guide and subsequently enhancing its functionality with new gems.</li>
                              <li>Implemented CRUD architecture for managing user accounts, friends, and chat functionalities within the application.</li>
                              <li>Integrated and customized Devise gem for user authentication, ensuring secure access to the application's features.</li>
                              <li>Utilized Mailboxer gem to enable messaging and chat features between users, enhancing user engagement and interaction.</li>
                              <li>Enhanced user experience by incorporating Simple Form gem for efficient form creation and validation.</li>
                              <li>Website hosting through Heroku.</li>
                            </ul>
                        </ul>
                        
                    </Col>
                    <Col xs={12} ms={6} xl={5}>
                        <img src={friends} alt="Friends" />
                        <img src={friends1} alt="Friends1" />
                    </Col>
                </Row>
            </Container>
    </div>
  );
}

function Marketplace() {
  return (
    <div style={{ paddingTop: '200px' }}>
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} ms={6} xl={7}>
                        <h1> Vassar MarketPlace Application </h1>
                        <ul>
                          <li>Links:</li>
                            <ul>
                              <li>GitHub: <a href="https://github.com/remyben-creator/Marketplace-Application">
                              https://github.com/remyben-creator/Marketplace-Application</a></li>
                            </ul>
                          <li>Description:</li>
                            <ul>
                              <li>Users can create accounts using their Vassar College email addresses, and act as both buyers and sellers on the platform.</li>
                              <li>Sellers can post items for sale, manage their posted items, and view interested buyers.</li>
                              <li>Buyers can browse the 10 most recently posted items, and use a search feature to find specific items they are looking for.</li>
                              <li>The application has a built-in moderator that prohibits items violating the Terms of Service from being posted, and only allows Vassar College students to create accounts to maintain the integrity of the target audience.</li>
                              <li>Cloud storage through Google FireStore.</li>
                              <li>Image to bitmap conversion for efficient storage.</li>
                            </ul>
                        </ul>
                        <Col> 
                          <img src={app1} alt="Marketplace1" />
                        </Col>
                        <Col>
                          <img src={app2} alt="Marketplace2" />
                        </Col>
                        <Col>
                          <img src={app3} alt="Marketplace3" />
                        </Col>
                        <Col>
                          <img src={app4} alt="Marketplace4" />
                        </Col>
                    </Col>
                    <Col xs={12} ms={6} xl={5}>
                        <img src={marketplace} alt="Marketplace" />
                    </Col>
                </Row>
            </Container>
    </div>
  );

}
function Pokemon() {
  return (
    <div style={{ paddingTop: '200px' }}>
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} ms={6} xl={7}>
                        <h1> Pokemon Reverse Engineering </h1>
                        <ul>
                          <li>Links:</li>
                            <ul>
                              <li>GitHub: <a href="https://github.com/remyben-creator/PokeReverseEngineering">
                              https://github.com/remyben-creator/PokeReverseEngineering</a></li>
                            </ul>
                          <li>Description:</li>
                            <ul>
                              <li>Forked from pret/pokefirered and pret/pokered on Github for diassembled code.</li>
                              <li>Minor Chagnes and bug fixes so far to familiarize myself with the games.</li>
                              <li>Will be adding more features and functionalities in the future.</li>
                              <li>C for Pokemon firered.</li>
                              <li>Assembly for Pokemon Blue.</li>
                              <li>Plan to create a Firered rougelike that uses ML for oppenent generation with Kaggle dataset.</li>
                            </ul>
                        </ul>
                    </Col>
                    <Col xs={12} ms={6} xl={5}>
                        <img src={pokemon1} alt="Pokemon1" />
                    </Col>
                </Row>
            </Container>
    </div>);
}
function Manakins() {
  return (
    <div style={{ paddingTop: '200px' }}>
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} ms={6} xl={7}>
                        <h1> Courting Habit of The Lance Tailed Manakin </h1>
                        <ul>
                          <li>Links:</li>
                            <ul>
                              <li>GitHub: <a href="https://github.com/remyben-creator/Courting-Habit-of-Manakins">
                              https://github.com/remyben-creator/Courting-Habit-of-Manakins</a></li>
                              <li>Example in wild: <a href="https://www.youtube.com/watch?v=uYZhcpkweAg">
                              https://www.youtube.com/watch?v=uYZhcpkweAg</a></li>
                            </ul>
                          <li>Description:</li>
                            <ul>
                              <li>Agent Based Model in Netlogo to model the courting habits of Manakin birds in the wild.</li>
                              <li>Fully devloped decision making and dacing of Lance Tailed Manakin.</li>
                              <li>Independant Variables: Number of Breeding Grounds, and number of female and male birds.</li>
                              <li>Random Breeding Ground placement for different simulation outcomes.</li>
                              </ul>
                        </ul>
                    </Col>
                    <Col xs={12} ms={6} xl={5}>
                        <img src={manakinbird} alt="Manakinbird" />
                    </Col>
                </Row>
            </Container>
    </div>);
}
function Recipes() {
  return (
    <div style={{ paddingTop: '200px' }}>
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} ms={6} xl={7}>
                        <h1> OPENAI Recipe Maker </h1>
                        <ul>
                          <li>Links:</li>
                            <ul>
                              <li>GitHub: <a href="https://github.com/remyben-creator/AI-Personal-Project">
                              https://github.com/remyben-creator/AI-Personal-Project</a></li>
                            </ul>
                          <li>Description:</li>
                            <ul>
                              <li>View Model software application design - Tkinter View.</li>
                              <li>Utilizes OPENAI-API calls to reliably break down user inputs into variables used as parameters to call
                                  functions telling the AI in which ways to conversationally respond.</li>
                              <li>PostgreSQL table personally loaded with online recipe database for the AI to refer to as recommending
                                  recipes.</li>
                            </ul>
                        </ul>
                    </Col>
                    <Col xs={12} ms={6} xl={5}>
                        <img src={ai} alt="AI" />
                        <img src={chef} alt="Chef" />
                    </Col>
                </Row>
            </Container>
    </div>);
}
function MLAnimals() {
  return (
    <div style={{ paddingTop: '200px' }}>
            <Container>
                <Row className="aling-items-center">
                    <Col xs={12} ms={6} xl={7}>
                        <h1> CNN Animal Classifier </h1>
                        <ul>
                          <li>Links:</li>
                            <ul>
                            <li>GitHub: <a href="https://github.com/remyben-creator/AnimalsML">
                            https://github.com/remyben-creator/AnimalsML</a></li>
                            </ul>
                          <li>Description:</li>
                            <ul>
                              <li>I implemented a Convolutional Neural Network (CNN) model featuring two convolutional layers with 32 and 64 filters respectively, each with a kernel size of 3x3 and ReLU activation.</li>
                              <li>Utilized a max pooling layer with a pool size of 2x2 to reduce the spatial dimensions of the input data.</li>
                              <li>Global average pooling layer and finally a dense layer with 5 units and softmax activation function.</li>
                              <li>Trained this model and other pretrained models to compare success rates with identifying 5 classes of animals.</li>
                              <li>Butterfly, Cow, Sheep, Squirrel, Elephant</li>
                              <li>Weblink allows for image selection to be fed to my trained model from scratch and the best performing model after training with 5 class image dataset.</li>
                            </ul>
                        </ul>
                    </Col>
                    <Col xs={12} ms={6} xl={5}>
                        <img src={butterfly} alt="Butterfly" />
                    </Col>
                </Row>
            </Container>
    </div>);
}


export function Home() {

  const contactsRef = useRef(null);
  const projectsRef = useRef(null);
        
  <Banner />

  return (
    <>

      <div ref={projectsRef}><Projects /></div> 
      <div ref={contactsRef}><ContactForm /></div>
      <Footer />
    </>
  );
}

export default App;
