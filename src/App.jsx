import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'

import About from './pages/About';
import Main from './pages/Main';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <div className="grid-container">
        <Navbar />
        <main>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </main>
        <footer>(C) Krille</footer>
      </div>
    </Router>
  )
}

export default App
