import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./App.css";
import UsersContainer from "./containers/UsersContainer";
import OrganizationsContainer from "./containers/OrganizationsContainer";
import Navbar from "./components/other/Navbar";
import Home from "./components/other/Home";
import UserLogin from "./components/users/UserLogin";
import UserProfile from "./components/users/UserProfile";

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
            <Route exact path="/users" component={UsersContainer} />
            {/* <Route exact path="/users/1" component={UserProfile} /> */}
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;
