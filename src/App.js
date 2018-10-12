import React, { Component } from "react";
import { Layout } from "antd";

import "./App.css";
import UsersContainer from "./containers/UsersContainer";
import OrganizationsContainer from "./containers/OrganizationsContainer";
import Navbar from "./components/other/Navbar";

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Content style={{ padding: "0 50px", marginTop: 84 }}>
          <OrganizationsContainer />
          <UsersContainer />
        </Content>
      </div>
    );
  }
}

export default App;
