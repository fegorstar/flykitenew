import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './/pages/Services';
import Portfolio from './pages/Portfolio';
import GOtvNight from './pages/GOtvNight';

function App() {


  return (

    <div className="main_window">
  <Router>
    
    <Header/>
      <Route  path="/" exact> 
      <Home/>
      </Route>

      <Route exact path="/about">  
      <About/>
      </Route>

      <Route exact path="/service">    
     <Services/>
      </Route>

      <Route exact path="/portfolio">    
     <Portfolio/>
      </Route>

      <Route exact path="/gotvBoxingNight">    
      <GOtvNight/>
      </Route>

      <Route exact path="/contact">    
     <Contact/>
      </Route>

  </Router>
  </div>
  );
}

export default App;