import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
      </Switch>
    )
  }
}

export default App
