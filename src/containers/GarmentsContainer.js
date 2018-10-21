import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchGarments } from "../components/actions/actions";

import Garments from "../components/garments/Garments";

class GarmentsContainer extends Component {
  componentDidMount() {
    this.props.fetchGarments();
  }

  render() {
    return (
      <div>
        <Garments garments={this.props.garments} />
      </div>
    );
  }
}

//add state from store to props, but still need to pass in props to <Garments/>
const mapStateToProps = state => {
  // console.log("GarmentsContainer", state);
  return {
    garments: state.garments
  };
};

export default connect(
  mapStateToProps,
  { fetchGarments }
)(GarmentsContainer);
