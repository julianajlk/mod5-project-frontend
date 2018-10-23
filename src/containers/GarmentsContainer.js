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
      <div>
        <Row>
          <Col span={6}>
            <SideMenu garments={this.props.garments} />
          </Col>
        </Row>
        <Row>
          <Col span={18}>
            <Garments
              garments={this.props.garments}
              loading={this.props.loading}
            />
          </Col>
        </Row>
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
