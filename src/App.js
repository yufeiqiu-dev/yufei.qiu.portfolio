import logo from './logo.svg';
import Navbar from './Navbar';
import React from 'react'
import Home from './Home';
import Project from './Project';
import Footer from './Footer';
import About from './About';
import { HashRouter, Route, Routes } from 'react-router-dom';
import {Helmet} from "react-helmet";
function App() {
  return (
    <HashRouter>
    <div className="App">
    <Helmet>
       <meta charSet="utf-8" />
        <title>Porfolio</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
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
