import React from 'react';
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from '../src/components/Home'

function App() {
  return (
    <Router>
        <Route exact to='/' component={Home} />
      </Router>
  );
}

export default App;
