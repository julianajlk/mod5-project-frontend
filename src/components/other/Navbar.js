import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { Header } = Layout;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends React.Component {
  state = {
    current: ""
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Link exact to="/" className="logo">
            APParel
          </Link>
          <Link exact to="/users">
            All Users
          </Link>
          <Menu.Item key="signup">
            <NavLink to="/signup">
              <Icon type="form" theme="outlined" />
              Sign Up
            </NavLink>
          </Menu.Item>
          <Menu.Item key="login">
            <NavLink to="/login">
              <Icon type="user" theme="outlined" />
              Login
            </NavLink>
          </Menu.Item>
          <Menu.Item key="user">
            <NavLink to={`/users/1`}>
              <Icon type="smile" theme="outlined" />
              User
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const NavbarWithRouter = withRouter(Navbar);

export default NavbarWithRouter;
