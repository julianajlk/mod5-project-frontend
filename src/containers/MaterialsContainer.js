import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMaterials } from "../components/actions/actions";

import Materials from "../components/materials/Materials";

class MaterialsContainer extends Component {
  componentDidMount() {
    this.props.fetchMaterials();
  }

  render() {
    return (
      <div style={{ marginTop: 54, padding: "0 50px" }}>
        <Materials materials={this.props.materials} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    materials: state.materials
  };
};

export default connect(
  mapStateToProps,
  { fetchMaterials }
)(MaterialsContainer);
