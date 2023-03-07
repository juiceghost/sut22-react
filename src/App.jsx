import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="grid-container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </nav>
        <main>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <Switch>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/contact">
              <h1>Contact</h1>
            </Route>
            <Route path="/portfolio">
              <h1>Portfolio</h1>
            </Route>
            <Route path="/">
              <h1>Main</h1>
            </Route>
          </Switch>
        </main>
        <footer>(C) Krille</footer>
      </div>
    </Router>
  )
}

export default App
