import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSuppliers } from "../components/actions/actions";

import Suppliers from "../components/suppliers/Suppliers";

class SuppliersContainer extends Component {
  componentDidMount() {
    this.props.fetchSuppliers();
  }

  render() {
    return (
      <div style={{ marginTop: 54, padding: "0 80px" }}>
        <Suppliers
          suppliers={this.props.suppliers}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

//add state from store to props, but still need to pass in props to <UserForm/>
const mapStateToProps = state => {
  return {
    suppliers: state.suppliers,
    loading: state.loading
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSuppliers
  }
)(SuppliersContainer);
