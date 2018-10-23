import React from "react";
import { Menu, Icon, Affix } from "antd";
import { connect } from "react-redux";

const SubMenu = Menu.SubMenu;

class NavBar extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  state = {
    openKeys: ["sub1"],
    left: 50
    // filterSeason:
    // filterCategory:
    // filterLocation:
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    return (
      <Affix offsetTop={this.state.left}>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          onChange={() => {
            this.setState({
              left: this.state.left + 10
            });
          }}
          style={{ width: 256 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="ordered-list" theme="outlined" />
                <span>Garment List</span>
              </span>
            }
          >
            {this.props.garments.map(garment => (
              <Menu.Item key={garment.id}>
                <a href={`/garments/${garment.id}`}>{garment.name}</a>
              </Menu.Item>
            ))}
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="schedule" theme="outlined" />
                <span>Season</span>
              </span>
            }
          >
            <Menu.Item>
              <a href={`/garments/`}>Cruise 2019</a>
            </Menu.Item>
            <Menu.Item>
              <a href={`/garments/`}>Spring 2019</a>
            </Menu.Item>
            <Menu.Item>
              <a href={`/garments/`}>Fall 2019</a>
            </Menu.Item>
            <Menu.Item>
              <a href={`/garments/`}>Cruise 2020</a>
            </Menu.Item>
            <Menu.Item>
              <a href={`/garments/`}>Spring 2020</a>
            </Menu.Item>
            <Menu.Item>
              <a href={`/garments/`}>Fall 2020</a>
            </Menu.Item>

            {/* fix later: unique method */}
            {/* const sampleValues = [1, 4, 5, 2, 'a', 'e', 'b', 'e', 2, 2, 4];
const uniqueValues = [...new Set(sampleValues)];  */}
            {/* {this.props.garments.filter(garment => garment.season).map(g => (
              <Menu.Item key={g.id}>
                {" "}
                <a href={`/garments/${g.id}`}>{g.season}</a>
              </Menu.Item>
            ))} */}

            {/* <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu> */}
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="tag" theme="outlined" />
                <span>Category</span>
              </span>
            }
          >
            <Menu.Item>
              <a href={`/garments/`}>Tops</a>
            </Menu.Item>
            <Menu.Item>
              <a href={`/garments/`}>Bottoms</a>
            </Menu.Item>
            <Menu.Item>
              <a href={`/garments/`}>Dresses</a>
            </Menu.Item>
            <Menu.Item>
              <a href={`/garments/`}>Outerwear</a>
            </Menu.Item>
            {/* {this.props.garments.filter(garment => garment.category).map(g => (
              <Menu.Item key={g.id}>
                {" "}
                <a href={`/garments/${g.id}`}>{g.category}</a>
              </Menu.Item>
            ))} */}
          </SubMenu>
        </Menu>
      </Affix>
    );
  }
}

const mapStateToProps = state => {
  return {
    garments: state.garments
  };
};

export default connect(mapStateToProps)(NavBar);
