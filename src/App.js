import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'; // Import the Header component
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shipper from './pages/Shipper';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Add the Header component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Shipper" element={<Shipper />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;