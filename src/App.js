import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Music from './pages/Music';
import Art from './pages/Art';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component= {Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/art" component={Art} />
        </Switch>
      </Router>
    </div>
    
  )
}

export default App;
