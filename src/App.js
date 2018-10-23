import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Row, Col, BackTop, Icon } from "antd";

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Content style={{ padding: "0 50px", marginTop: 64 }}>
            <Route path="/signup" component={OrganizationsContainer} />
            <Route path="/login" component={UserLogin} />
            <Route path="/users" component={UsersContainer} />
            <Route path="/materials" component={MaterialsContainer} />
          </Content>
        </Switch>
        <Switch>
          <Route path="/garments">
            <Row>
              <Col span={6}>
                <SideMenu />
              </Col>
              <Col span={18}>
                <Content
                // style={{ padding: "0 50px", marginTop: 64 }}
                >
                  <GarmentsContainer />
                </Content>
              </Col>
            </Row>
          </Route>
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
