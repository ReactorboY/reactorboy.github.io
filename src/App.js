import React,{Component} from 'react';
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from '../src/components/Home'
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact to='/' component={Home} />
      </Router>
    )
  }
}

export default App;
