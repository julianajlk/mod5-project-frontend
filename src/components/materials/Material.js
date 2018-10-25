import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  Divider,
  // Tabs,
  // Collapse,
  // Drawer,
  Button,
  Icon,
  Avatar
} from "antd";

class Material extends Component {
  render() {
    // let materialIdFromUrl = parseInt(window.location.href.split("/")[4]);
    //
    // let selectedMaterial = this.props.materials.find(
    //   material => material.id === materialIdFromUrl
    // );

    return (
      <div className="main-div">
        <Link to={`/materials`}>
          <p>
            <Icon type="left" theme="outlined" /> All Materials
          </p>
        </Link>

        {this.props.selectedMaterial ? (
          <React.Fragment>
            <img
              src={this.props.selectedMaterial.image_url}
              style={{ width: 250, marginBottom: 20 }}
            />
            {/* <Avatar
              shape="square"
              size={100}
              icon="question"
              style={{ marginBottom: 10 }}
            /> */}
            <h2>Material: {this.props.selectedMaterial.name}</h2>
            <h3>Category: {this.props.selectedMaterial.category}</h3>
            <h3>
              Supplier:{" "}
              <Link
                to={`/suppliers/${this.props.selectedMaterial.supplier.id}`}
              >
                {this.props.selectedMaterial.supplier.name}
              </Link>
            </h3>
            {/* <Button
              size="small"
              style={{
                color: "#ffa154",
                fontSize: "12px",
                float: "left",
                marginTop: 10,
                marginBottom: 20
              }}
              onClick={this.toggleFullView}
            >
              <Icon type="plus-circle" theme="outlined" />
              Add to My Garment
            </Button> */}

            <Divider orientation="left">General Info</Divider>
            <p>Price: {this.props.selectedMaterial.price}</p>
            <p>Size: {this.props.selectedMaterial.size}</p>
            <p>Color: {this.props.selectedMaterial.color}</p>
            <p>Usage: {this.props.selectedMaterial.usage}</p>
            <Divider orientation="left">Other</Divider>
            <p>Comments: {this.props.selectedMaterial.comment}</p>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let selectedMaterial = state.materials.find(
    material => material.id === parseInt(ownProps.materialId)
  );
  console.log("selectedMaterial", selectedMaterial);
  return {
    selectedMaterial: selectedMaterial,
    materials: state.materials
  };
};

export default connect(mapStateToProps)(Material);
