import React, { Component } from "react";
import { connect } from "react-redux";

import { Layout, Row, Col, Icon } from "antd";

import { fetchGarments } from "../components/actions/actions";

import Garments from "../components/garments/Garments";
import SideMenu from "../components/other/SideMenu";

const { Content } = Layout;

class GarmentsContainer extends Component {
  componentDidMount() {
    this.props.fetchGarments();
  }

  render() {
    return (
      <div style={{ marginTop: 60, padding: "0 80px" }}>
        <Garments garments={this.props.garments} loading={this.props.loading} />
      </div>
    );
  }
}

//add state from store to props, but still need to pass in props to <Garments/>
const mapStateToProps = state => {
  // console.log("GarmentsContainer", state);
  return {
    loading: state.loading,
    garments: state.garments
  };
};

export default connect(
  mapStateToProps,
  { fetchGarments }
)(GarmentsContainer);
