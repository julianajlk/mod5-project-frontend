import React, { Component } from "react";
import {
  Route,
  Switch
  // withRouter
} from "react-router-dom";

import { Icon, Spin } from "antd";

import GarmentList from "./GarmentList";
import Garment from "./Garment";
import GarmentFormEdit from "./GarmentFormEdit";

class Garments extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/garments">
          <ul>
            <h2 className=".page-title">Your Garments</h2>

            {this.props.garments ? (
              <GarmentList
                garments={this.props.garments}
                loading={this.props.loading}
              />
            ) : null}
          </ul>
        </Route>
        <Route
          path="/garments/:garmentId"
          render={data => {
            return (
              <Garment
                garmentId={data.match.params.garmentId}
                garments={this.props.garments}
                materials={this.props.materials}
                loading={this.props.loading}
              />
            );
          }}
        />
        <Route
          path="/garments/:garmentId"
          render={data => {
            return (
              <GarmentFormEdit
                garmentId={data.match.params.garmentId}
                garments={this.props.garments}
              />
            );
          }}
        />
      </Switch>
    );
  }
}

export default Garments;
