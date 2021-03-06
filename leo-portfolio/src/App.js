import './app.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import AboutMe from './components/aboutMe/AboutMe';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/about-me" element={<AboutMe />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;