import React, { Component } from "react";

import "./App.css";
import UsersContainer from "./containers/UsersContainer";
import BrandsContainer from "./containers/BrandsContainer";
import SuppliersContainer from "./containers/SuppliersContainer";
import Navbar from "./components/other/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Navbar />
        <UsersContainer />
        <BrandsContainer />
        <SuppliersContainer />
      </div>
    );
  }
}

export default App;
