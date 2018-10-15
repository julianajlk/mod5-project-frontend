import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Menu, Icon } from "antd";

class Navbar extends React.Component {
  //use NavLink vs. Link to have "active" instead of setting the key to state
  //<Link/> must be inside a <Menu.Item />
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
          <Menu.Item>
            <Link to="/users" className="logo">
              APParel
            </Link>
          </Menu.Item>

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
