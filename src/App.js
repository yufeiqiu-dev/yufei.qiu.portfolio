import logo from './logo.svg';
import Navbar from './Navbar';
import React from 'react'
import Home from './Home';
import Project from './Project';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import { HashRouter, Route, Routes } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Experience from './Experience';
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element = {<About />} />
          <Route path = "/contact" element = {<Contact />} />
          <Route path ="/experience" element ={<Experience/>} />
        </Routes>

      
    </div>
    
     </HashRouter>
    
    
    
  );
}

export default App;
