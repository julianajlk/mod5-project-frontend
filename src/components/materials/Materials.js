import React, { Component } from "react";
import {
  Route,
  Switch
  // withRouter
} from "react-router-dom";

import MaterialList from "./MaterialList";
import Material from "./Material";

class Materials extends Component {
  render() {
    console.log("materials", this.props.materials);
    return (
      <Switch>
        <Route exact path="/materials">
          <ul>
            <h2 className=".page-title">Materials</h2>
            {/* {this.props.loading ? <Icon type="loading" theme="outlined" />"Loading, please wait..." : null} */}
            {this.props.materials
              ? this.props.materials.map(material => (
                  <MaterialList material={material} key={material.id} />
                ))
              : null}
          </ul>
        </Route>

        <Route
          path="/materials/:materialId"
          render={data => {
            return (
              <Material
                materialId={data.match.params.materialId}
                materials={this.props.materials}
              />
            );
          }}
        />

        {/* <Route
          path="/materials/:materialId"
          render={data => {
            return (
              <MaterialFormEdit
                materialId={data.match.params.materialId}
                materials={this.props.materials}
              />
            );
          }}
        /> */}
      </Switch>
    );
  }
}

export default Materials;
