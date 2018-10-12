import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const Navbar = () => {
  return (
    <div>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo">APParel</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1" href="/users">
              sign up
            </Menu.Item>
            <Menu.Item key="2">login</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
};

export default Navbar;
