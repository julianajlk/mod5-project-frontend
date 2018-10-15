import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./App.css";
import UsersContainer from "./containers/UsersContainer";
import OrganizationsContainer from "./containers/OrganizationsContainer";
import Navbar from "./components/other/Navbar";
import Home from "./components/other/Home";
import UserLogin from "./components/users/UserLogin";

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Content style={{ padding: "0 50px", marginTop: 84 }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={OrganizationsContainer} />
            <Route path="/login" component={UserLogin} />
            <Route path="/users" component={UsersContainer} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;
