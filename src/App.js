import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import NxtWatchContext from './context/NxtWatchContext'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    toggleTheme: true,
  }

  render() {
    const {toggleTheme} = this.state
    return (
      <>
        <NxtWatchContext.Provider value={{toggleTheme}}>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/" component={Home} />
          </Switch>
        </NxtWatchContext.Provider>
      </>
    )
  }
}
export default App
