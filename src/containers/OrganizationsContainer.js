import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBrands, fetchSuppliers } from "../components/actions/actions";
import UserForm from "../components/users/UserForm";

class OrganizationsContainer extends Component {
  componentDidMount() {
    this.props.fetchBrands();
    this.props.fetchSuppliers();
  }

  render() {
    return (
      <div style={{ marginTop: 54, padding: "0 80px" }}>
        <UserForm brands={this.props.brands} suppliers={this.props.suppliers} />
      </div>
    );
  }
}

//add state from store to props, but still need to pass in props to <UserForm/>
const mapStateToProps = state => {
  return {
    brands: state.brands,
    suppliers: state.suppliers
  };
};

export default connect(
  mapStateToProps,
  {
    fetchBrands,
    fetchSuppliers
  }
)(OrganizationsContainer);
