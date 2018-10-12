import React, { Component } from "react";
import { connect } from "react-redux";
import UserForm from "../components/users/UserForm";

import { fetchSuppliers } from "../components/actions/actions";

class SuppliersContainer extends Component {
  componentDidMount() {
    this.props.fetchSuppliers();
  }

  render() {
    return (
      <div>
        <UserForm suppliers={this.props.suppliers} />
      </div>
    );
  }
}

//add state from store to props, but still need to pass in props to <UserForm/>
const mapStateToProps = state => {
  return {
    suppliers: state.suppliers
  };
};

export default connect(
  mapStateToProps,
  { fetchSuppliers }
)(SuppliersContainer);
