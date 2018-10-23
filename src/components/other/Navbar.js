import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Menu, Icon, Affix } from "antd";

class NavBar extends React.Component {
  //use NavLink vs. Link to have "active" instead of setting the key to state
  //<Link/> must be inside a <Menu.Item /> (inheritance issue with non-nested component)
  state = {
    current: "",
    top: 0
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key,
      top: this.state.top + 1
    });
  };
  render() {
    return (
      <div>
        <Affix offsetTop={this.state.top}>
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

            <Menu.Item key="garments">
              <NavLink to={`/garments`}>
                <Icon type="skin" theme="outlined" />
                Garments
              </NavLink>
            </Menu.Item>
            <Menu.Item key="materials">
              <NavLink to={`/materials`}>
                <Icon type="pushpin" theme="outlined" />
                Materials
              </NavLink>
            </Menu.Item>
            <Menu.Item key="signup" style={{ float: "right" }}>
              <NavLink to="/signup">
                <Icon type="form" theme="outlined" />
                Sign Up
              </NavLink>
            </Menu.Item>
            <Menu.Item key="login" style={{ float: "right" }}>
              <NavLink to="/login">
                <Icon type="user" theme="outlined" />
                Login
              </NavLink>
            </Menu.Item>
            <Menu.Item key="user" style={{ float: "right" }}>
              <NavLink to={`/users/1`}>
                <Icon type="smile" theme="twoTone" twoToneColor="#ffa154" />
                User 1
              </NavLink>
            </Menu.Item>
          </Menu>
        </Affix>
      </div>
    );
  }
}

const NavBarWithRouter = withRouter(NavBar);

export default NavBarWithRouter;
