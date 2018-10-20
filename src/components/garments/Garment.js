import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { Divider, Tabs, Collapse, Drawer, Button, Icon, Rate } from "antd";

import GarmentForm from "./GarmentForm";
import GarmentFormEdit from "./GarmentFormEdit";

// const { Meta } = Card;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

class Garment extends Component {
  state = {
    visible: false,
    visibleEdit: false,
    top: 10
  };

  state = {
    value: 3
  };

  //rate
  handleChange = value => {
    this.setState({ value });
  };

  //tabs
  callback = key => {
    console.log(key);
  };

  //create drawer
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  //edit drawer
  showDrawerEdit = () => {
    this.setState({
      visibleEdit: true
    });
  };

  onCloseEdit = () => {
    this.setState({
      visibleEdit: false
    });
  };

  //   const text = (
  //   <p style={{ paddingLeft: 24 }}>
  //     A dog is a type of domesticated animal.
  //     Known for its loyalty and faithfulness,
  //     it can be found as a welcome guest in many households across the world.
  //   </p>
  // );

  render() {
    const { value } = this.state;
    return (
      <div>
        <React.Fragment>
          <Button onClick={this.showDrawer}>Create New Garment</Button>
          <Drawer
            title="New Garment"
            placement="left"
            closable={true}
            onClose={this.onClose}
            visible={this.state.visible}
            width={720}
            // style={{
            //   height: "calc(100% - 55px)",
            //   overflow: "auto",
            //   paddingBottom: 53
            // }}
          >
            <GarmentForm />
          </Drawer>
        </React.Fragment>
        <React.Fragment>
          <Button onClick={this.showDrawerEdit} style={{ marginLeft: 15 }}>
            <Icon type="edit" theme="outlined" />
            Edit This Garment
          </Button>
          <Drawer
            title="Update Garment"
            placement="left"
            closable={true}
            onClose={this.onCloseEdit}
            visible={this.state.visibleEdit}
            width={720}
          >
            <GarmentFormEdit selectedGarment={this.props.selectedGarment} />
          </Drawer>
        </React.Fragment>
        {/* <React.Fragment>
          <Button onClick={this.showDrawer}>Garment List</Button>
          <Drawer
            title="All Garments"
            placement={this.state.placement}
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            {this.props.garments &&
              this.props.garments.map(garment => (
                <ul>
                  <a href={`/garments/${garment.id}`}>{garment.name} </a>
                </ul>
              ))}
          </Drawer>
        </React.Fragment> */}

        {this.props.selectedGarment ? (
          <React.Fragment>
            <img
              alt="example"
              src={this.props.selectedGarment.url}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 30,
                width: 300
              }}
            />
            <h2>Item Name: {this.props.selectedGarment.name}</h2>
            <h3>Season: {this.props.selectedGarment.season}</h3>
            <span>
              <Rate
                onChange={this.handleChange}
                value={value}
                character={<Icon type="check-circle" theme="outlined" />}
                allowClear
              />
              {value && (
                <span className="ant-rate-text">{value} samples approved </span>
              )}
            </span>

            <Divider orientation="left">General Info</Divider>
            <p>Location: {this.props.selectedGarment.location}</p>
            <p>Status: {this.props.selectedGarment.status}</p>
            <Divider orientation="left">Materials Info</Divider>
            <p>Fabrication: {this.props.selectedGarment.fabrication}</p>
            <p>Trims Quantity: </p>
            <li>Buttons - {this.props.selectedGarment.trim_button}</li>
            <li>Zippers - {this.props.selectedGarment.trim_zipper}</li>
            <li>Labels - {this.props.selectedGarment.trim_label}</li>
            <li>Hantags - {this.props.selectedGarment.trim_hangtag}</li>

            <Divider orientation="left">Sizing Info</Divider>
            <p>Sizing: {this.props.selectedGarment.sizing}</p>
            <p>Measurements: {this.props.selectedGarment.measurement}</p>
            <Divider orientation="left">Comments</Divider>
            <p>Fit Comments: {this.props.selectedGarment.fit_comment}</p>
            <p>Other Comments: {this.props.selectedGarment.comment}</p>

            <img
              alt="example"
              src={this.props.selectedGarment.url}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 30,
                width: 300
              }}
            />
            <h2>Item Name: {this.props.selectedGarment.name}</h2>
            <h3>Season: {this.props.selectedGarment.season}</h3>
            <Tabs onChange={this.callback} type="card">
              <TabPane tab="General Info" key="1">
                <p>Location: {this.props.selectedGarment.location}</p>
                <p>Status: {this.props.selectedGarment.status}</p>
              </TabPane>
              <TabPane tab="Materials Info" key="2">
                <p>Fabrication: {this.props.selectedGarment.fabrication}</p>
                <p>Trims Quantity: </p>
                <li>Buttons - {this.props.selectedGarment.trim_button}</li>
                <li>Zippers - {this.props.selectedGarment.trim_zipper}</li>
                <li>Labels - {this.props.selectedGarment.trim_label}</li>
                <li>Hantags - {this.props.selectedGarment.trim_hangtag}</li>
              </TabPane>
              <TabPane tab="Sizing Info" key="3">
                <p>Sizing: {this.props.selectedGarment.sizing}</p>
                <p>Measurements: {this.props.selectedGarment.measurement}</p>
              </TabPane>
              <TabPane tab="Comments" key="4">
                <p>Fit Comments: {this.props.selectedGarment.fit_comment}</p>
                <p>Other Comments: {this.props.selectedGarment.comment}</p>
              </TabPane>
            </Tabs>

            <img
              alt="example"
              src={this.props.selectedGarment.url}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: 30,
                width: 300
              }}
            />
            <h2>Item Name: {this.props.selectedGarment.name}</h2>
            <h3>Season: {this.props.selectedGarment.season}</h3>
            <Collapse bordered={false} defaultActiveKey={["1"]}>
              <Panel header="General Info" key="1">
                {/* {text} */}
                <p>Location: {this.props.selectedGarment.location}</p>
                <p>Status: {this.props.selectedGarment.status}</p>
              </Panel>
              <Panel header="Materials Info" key="2">
                <p>Fabrication: {this.props.selectedGarment.fabrication}</p>
                <p>Trims Quantity: </p>
                <li>Buttons - {this.props.selectedGarment.trim_button}</li>
                <li>Zippers - {this.props.selectedGarment.trim_zipper}</li>
                <li>Labels - {this.props.selectedGarment.trim_label}</li>
                <li>Hantags - {this.props.selectedGarment.trim_hangtag}</li>
              </Panel>
              <Panel header="Sizing Info" key="3">
                <p>Sizing: {this.props.selectedGarment.sizing}</p>
                <p>Measurements: {this.props.selectedGarment.measurement}</p>
              </Panel>
              <Panel header="Comments" key="4">
                <p>Fit Comments: {this.props.selectedGarment.fit_comment}</p>
                <p>Other Comments: {this.props.selectedGarment.comment}</p>
              </Panel>
            </Collapse>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("Garment", state, state.garments, ownProps, ownProps.garmentId);
  let selectedGarment = state.garments.find(
    garment => garment.id === parseInt(ownProps.garmentId)
  );
  // console.log("selectedGarment", selectedGarment);
  return {
    selectedGarment: selectedGarment,
    garments: state.garments
  };
};

export default connect(mapStateToProps)(Garment);
