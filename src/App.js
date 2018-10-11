import React, { Component } from "react";

import "./App.css";
import UsersContainer from "./containers/UsersContainer";
import Navbar from "./components/other/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Navbar />
        <UsersContainer />
      </div>
    );
  }
}

export default App;
