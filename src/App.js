import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from "./Components/Navbar"

import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
// import Pictures from './Components/Pictures';



function App() {
  return (
    <Router>
      <div className="main">
        <Navbar/>
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Services" component={Services} />
          {/* <Route exact path="/Picture" component={Pictures} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
