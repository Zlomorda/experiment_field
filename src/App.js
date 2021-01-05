import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navbar />
          <div className="Main">
            <Route path="/posts" render={() => <Profile posts={this.props.state} dispatch={this.props.dispatch} />} />
            <Route path="/dialogs" render={() => <Dialogs messages={this.props.state.messages} dialogs={this.props.state.dialogs} />} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
