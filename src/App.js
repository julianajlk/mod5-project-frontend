import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Row, Col, BackTop, Icon } from "antd";

import "./App.css";
import UsersContainer from "./containers/UsersContainer";
import OrganizationsContainer from "./containers/OrganizationsContainer";
import GarmentsContainer from "./containers/GarmentsContainer";
import MaterialsContainer from "./containers/MaterialsContainer";
import SuppliersContainer from "./containers/SuppliersContainer";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={UserLogin} />
          <Route path="/signup" component={OrganizationsContainer} />
          <Route path="/suppliers" component={SuppliersContainer} />
          <Route path="/users" component={UsersContainer} />
          <Row>
            <Route path="/garments">
              <Col span={6}>
                <SideMenu />
              </Col>
            </Route>

            <Col span={18}>
              <Switch>
                <Route path="/materials" component={MaterialsContainer} />
                <Route path="/garments" component={GarmentsContainer} />
              </Switch>
            </Col>
          </Row>
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
