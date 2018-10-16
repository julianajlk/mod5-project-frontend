import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { Card, Divider, Tabs, Collapse, Drawer, Button } from "antd";

// const { Meta } = Card;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

class Garment extends Component {
  state = {
    isEditing: false,
    visible: false,
    placement: "left",
    top: 10
  };

  callback = key => {
    console.log(key);
  };

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

  onChange = e => {
    this.setState({
      placement: e.target.value
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
    return (
      <div>
        <React.Fragment>
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
        </React.Fragment>

        {this.props.selectedGarment ? (
          <React.Fragment>
            <img alt="example" src={this.props.selectedGarment.image_url} />
            <h2>Item Name: {this.props.selectedGarment.name}</h2>
            <h3>Season: {this.props.selectedGarment.season}</h3>
            <Divider orientation="left">General Info</Divider>
            <p>Location: {this.props.selectedGarment.location}</p>
            <p>Status: {this.props.selectedGarment.status}</p>
            <Divider orientation="left">Materials Info</Divider>
            <p>Fabrication: {this.props.selectedGarment.fabrication}</p>
            <p>Trims: {this.props.selectedGarment.trim}</p>
            <Divider orientation="left">Sizing Info</Divider>
            <p>Sizing: {this.props.selectedGarment.sizing}</p>
            <p>Measurements: {this.props.selectedGarment.measurement}</p>
            <Divider orientation="left">Comments</Divider>
            <p>Fit Comments: {this.props.selectedGarment.fit_comment}</p>
            <p>Other Comments: {this.props.selectedGarment.comment}</p>

            <img alt="example" src={this.props.selectedGarment.image_url} />
            <h2>Item Name: {this.props.selectedGarment.name}</h2>
            <h3>Season: {this.props.selectedGarment.season}</h3>
            <Tabs onChange={this.callback} type="card">
              <TabPane tab="General Info" key="1">
                <p>Location: {this.props.selectedGarment.location}</p>
                <p>Status: {this.props.selectedGarment.status}</p>
              </TabPane>
              <TabPane tab="Materials Info" key="2">
                <p>Fabrication: {this.props.selectedGarment.fabrication}</p>
                <p>Trims: {this.props.selectedGarment.trim}</p>
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

            <img alt="example" src={this.props.selectedGarment.image_url} />
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
                <p>Trims: {this.props.selectedGarment.trim}</p>
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
