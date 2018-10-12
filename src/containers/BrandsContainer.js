import React, { Component } from "react";
import { connect } from "react-redux";
import UserForm from "../components/users/UserForm";

import { fetchBrands } from "../components/actions/actions";

class BrandsContainer extends Component {
  componentDidMount() {
    this.props.fetchBrands();
  }

  render() {
    return (
      <div>
        <UserForm brands={this.props.brands} />
      </div>
    );
  }
}

//add state from store to props, but still need to pass in props to <UserForm/>
const mapStateToProps = state => {
  return {
    brands: state.brands
  };
};

export default connect(
  mapStateToProps,
  { fetchBrands }
)(BrandsContainer);
