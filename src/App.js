import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Project from './Pages/ProjectPage/Project';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { HashRouter, Route, Routes } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Experience from './Pages/Experience';
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
