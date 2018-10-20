import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
// import { Icon } from "antd";

import GarmentList from "./GarmentList";
import Garment from "./Garment";
import GarmentFormEdit from "./GarmentFormEdit";

class Garments extends Component {
  render() {
    console.log(this.props.garments);
    return (
      <Switch>
        <Route exact path="/garments">
          <ul>
            <h2 className=".page-title">Garments</h2>
            {/* {this.props.loading ? <Icon type="loading" theme="outlined" />"Loading, please wait..." : null} */}
            {this.props.garments
              ? this.props.garments.map(garment => (
                  <GarmentList garment={garment} key={garment.id} />
                ))
              : null}
          </ul>
        </Route>
        <Route
          path="/garments/:garmentId"
          render={data => {
            return (
              <Garment
                garmentId={data.match.params.garmentId}
                garments={this.props.garments}
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
