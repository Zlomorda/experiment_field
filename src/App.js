import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Posts from "./Components/Posts/Posts";
import Dialogs from "./Components/Dialogs/Dialogs";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navbar />
          <div className="Main">
            <Route
              path="/posts"
              render={() => <Posts posts={this.props.state.posts} />}
            />
            <Route
              path="/dialogs"
              render={() => (
                <Dialogs
                  messages={this.props.state.messages}
                  dialogs={this.props.state.dialogs}
                />
              )}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
