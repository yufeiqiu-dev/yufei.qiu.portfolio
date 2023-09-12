import logo from './logo.svg';
import Navbar from './Navbar';
import React from 'react'
import Home from './Home';
import Project from './Project';
import Footer from './Footer';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className = "content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      
    </div>
    <div>
      <Footer />
    </div>
     </Router>
    
    
    
  );
}

export default App;
