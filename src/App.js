import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import NxtWatchContext from './context/NxtWatchContext'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
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
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/video/:id" component={VideoItemDetails} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </NxtWatchContext.Provider>
      </>
    )
  }
}
export default App
