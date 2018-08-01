import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home';

const App = () => (
  <Router>
    <div>
      <main>
        <Route exact path='/' component={Home} />
      </main>
    </div>
  </Router>
)

export default App