import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BackTop, Layout, Icon } from "antd";

import "./App.css";
import NavBar from "./components/other/NavBar";
import Home from "./components/other/Home";
import UsersContainer from "./containers/UsersContainer";
import OrganizationsContainer from "./containers/OrganizationsContainer";
import GarmentsContainer from "./containers/GarmentsContainer";
import MaterialsContainer from "./containers/MaterialsContainer";
import UserLogin from "./components/users/UserLogin";

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/garments" component={GarmentsContainer} />
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={OrganizationsContainer} />
          <Route path="/login" component={UserLogin} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/materials" component={MaterialsContainer} />
        </Switch>

        <BackTop>
          <div className="ant-back-top-inner">
            <Icon type="up" theme="outlined" />
          </div>
        </BackTop>
      </div>
    );
  }
}

export default App;
