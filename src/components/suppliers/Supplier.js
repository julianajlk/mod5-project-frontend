import React, { Component } from "react";
import { connect } from "react-redux";

import Map from "../other/Map.js";

import { Divider, Row, Col, Button, Icon, Avatar } from "antd";

class Supplier extends Component {
  render() {
    // let materialIdFromUrl = parseInt(window.location.href.split("/")[4]);
    //
    // let selectedMaterial = this.props.materials.find(
    //   material => material.id === materialIdFromUrl
    // );

    return (
      <div className="main-div">
        {this.props.selectedSupplier ? (
          <React.Fragment>
            <Row>
              <Col span={16} style={{ paddingRight: 20 }}>
                <Avatar
                  shape="square"
                  size={100}
                  style={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    marginBottom: 20
                  }}
                >
                  {this.props.selectedSupplier.name.charAt(0)}
                  {/* {this.props.selectedSupplier.name.split(" ")[0].charAt(0) +
                    this.props.selectedSupplier.name.split(" ")[1].charAt(0)} */}
                </Avatar>

                <h2>Supplier: {this.props.selectedSupplier.name}</h2>
                <h3>Location: {this.props.selectedSupplier.location}</h3>

                <Divider orientation="left">General Info</Divider>
                <h4>Materials available: </h4>
                {this.props.selectedSupplier.materials.map(material => (
                  <p>{material.name}</p>
                ))}
              </Col>
              <Col span={8}>
                <Map selectedSupplier={this.props.selectedSupplier} />
              </Col>
            </Row>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let selectedSupplier = state.suppliers.find(
    supplier => supplier.id === parseInt(ownProps.supplierId)
  );
  return {
    selectedSupplier: selectedSupplier
  };
};

export default connect(mapStateToProps)(Supplier);
