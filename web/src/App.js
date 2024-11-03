import React from 'react';
import{ BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Tasklist from './components/Tasklist';
import About from './components/About';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tasklist" element={<Tasklist />} />
      </Routes>
    </Router>
  );
}

export default App;
