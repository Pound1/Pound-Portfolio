import './App.css';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './pages/navBar';
import ProjectDetails from './pages/ProjectDetails';
import Gallery from './pages/Gallery';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="Pound-Portfolio/" element={<Hero />} />
          <Route
            path="Pound-Portfolio/pages/ProjectDetails"
            element={<Projects />}
          />
          <Route path="Pound-Portfolio/pages/Gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
