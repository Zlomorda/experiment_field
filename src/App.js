import React, { Component } from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Posts from './Components/Posts/Posts'
import Dialogs from './Components/Dialogs/Dialogs'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Navbar />
                <div className="Main">
                    {/* <Posts /> */}
                    <Dialogs />
                </div>
            </div>
        )
    }
}

export default App
