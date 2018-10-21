import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Row, Col } from "antd";

import "./App.css";
import UsersContainer from "./containers/UsersContainer";
import OrganizationsContainer from "./containers/OrganizationsContainer";
import GarmentsContainer from "./containers/GarmentsContainer";
import MaterialsContainer from "./containers/MaterialsContainer";
import NavBar from "./components/other/NavBar";
import SideMenu from "./components/other/SideMenu";
import Home from "./components/other/Home";
import UserLogin from "./components/users/UserLogin";

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Row>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Content style={{ padding: "0 50px", marginTop: 84 }}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={OrganizationsContainer} />
                <Route path="/login" component={UserLogin} />
                <Route path="/users" component={UsersContainer} />
                <Route path="/garments" component={GarmentsContainer} />
                <Route path="/materials" component={MaterialsContainer} />
              </Switch>
            </Content>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
