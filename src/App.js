import React, { Component } from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Posts from './Components/Posts/Posts'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Navbar />
                <Posts />
            </div>
        )
    }
}

export default App
