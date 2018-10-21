import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMaterials } from "../components/actions/actions";

import Materials from "../components/materials/Materials";
import Garment from "../components/garments/Garment";

class MaterialsContainer extends Component {
  componentDidMount() {
    this.props.fetchMaterials();
  }

  render() {
    return (
      <div>
        <Materials materials={this.props.materials} />
        <Garment materials={this.props.materials} />
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
