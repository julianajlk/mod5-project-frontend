import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchGarments } from "../actions/actions";
import GarmentForm from "../garments/GarmentForm";

import { Menu, Icon, Affix, Drawer, Button } from "antd";

const SubMenu = Menu.SubMenu;

class SideMenu extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  state = {
    openKeys: ["sub1"],
    top: 50,
    visible: false,
    uniqueMaterials: []
  };

  //mapStateToProps + fetch to access garments in all material pages
  componentDidMount() {
    this.props.fetchGarments();
    //find unique materials
    console.log("0", this.props.garments);
    if (this.props.garments) {
      const garmentMaterialArray = this.props.garments.map(garment =>
        garment.materials.map(material => material.name)
      );
      console.log("1", garmentMaterialArray);
      const materialArray = garmentMaterialArray.flat();
      console.log("2", materialArray);
      let unique = [...new Set(materialArray)];
      console.log("3", unique);
      this.setState({
        uniqueMaterials: unique
      });
    }
  }

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

  //create drawer
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onCloseDrawer = () => {
    console.log("onCloseDrawer");
    this.setState({
      visible: false
    });
  };

  render() {
    console.log("unique", this.state.uniqueMaterials);

    return (
      <Affix offsetTop={this.state.top}>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          onChange={() => {
            this.setState({
              top: this.state.top + 10
            });
          }}
          style={{ width: 256 }}
        >
          <React.Fragment>
            <Button
              onClick={this.showDrawer}
              style={{ marginLeft: 40, marginTop: 20, marginBottom: 10 }}
            >
              Create New Garment
            </Button>
            <Drawer
              title="New Garment"
              placement="left"
              closable={true}
              onClose={this.onCloseDrawer}
              visible={this.state.visible}
              width={720}
            >
              <GarmentForm
                materials={this.props.materials}
                showDrawer={this.showDrawer}
                onClose={this.onCloseDrawer}
              />
            </Drawer>
          </React.Fragment>

          <SubMenu
            key="sub1"
            title={
              <span className="sidemenu-category">
                <Icon type="ordered-list" theme="outlined" />
                <span>Your Garments</span>
              </span>
            }
          >
            {this.props.garments.map(garment => (
              <Menu.Item key={garment.id}>
                <Link className="item" to={`/garments/${garment.id}`}>
                  {garment.name}
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span className="sidemenu-category">
                <Icon type="pushpin" theme="outlined" />
                <span>Your Materials</span>
              </span>
            }
          >
            {this.state.uniqueMaterials.map(material => (
              <Menu.Item key={material.id}>
                <Link className="item" to={`/materials/${material.id}`}>
                  {material.name}
                </Link>
              </Menu.Item>
            ))}

            {/* {this.props.materials.map(material => (
              <Menu.Item key={material.id}>
                <Link className="item" to={`/materials/${material.id}`}>
                  {material.name}
                </Link>
              </Menu.Item>
            ))} */}
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span className="sidemenu-category">
                <Icon type="team" theme="outlined" />
                <span>Your Suppliers</span>
              </span>
            }
          >
            {this.props.materials.map(material => (
              <Menu.Item key={material.id}>
                <Link className="item" to={`/materials/${material.id}`}>
                  {material.supplier.name}
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </Affix>
    );
  }
}

const mapStateToProps = state => {
  return {
    garments: state.garments,
    materials: state.materials
  };
};

export default connect(
  mapStateToProps,
  { fetchGarments }
)(SideMenu);
