import React, { Component } from "react";
import UsersContainer from "./containers/UsersContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <UsersContainer />
      </div>
    );
  }
}

export default App;
