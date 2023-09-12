import logo from './logo.svg';
import Navbar from './Navbar';
import React from 'react'
import Home from './Home';
import Project from './Project';
import Footer from './Footer';
import About from './About';
import { HashRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <HashRouter>
    <div className="App">
      <Navbar/>
      <div className = "content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element = {<About />} />
        </Routes>
        
      </div>
      
    </div>
    <div>
      <Footer />
    </div>
     </HashRouter>
    
    
    
  );
}

export default App;
