import React, { Component } from "react";
import {
  Route,
  Switch
  // withRouter
} from "react-router-dom";

// import { Input } from "antd";

import GarmentList from "./GarmentList";
import Garment from "./Garment";
import GarmentFormEdit from "./GarmentFormEdit";

// const Search = Input.Search;

class Garments extends Component {
  render() {
    // console.log("garments", this.props.garments);
    // console.log("materials", this.props.materials);
    return (
      <Switch>
        <Route exact path="/garments">
          <ul>
            {/* <Search
              placeholder="Search"
              onSearch={value => console.log(value)}
              style={{ width: 200, marginBottom: 20 }}
            /> */}
            <h2 className=".page-title">Garments</h2>
            {/* {this.props.loading ? <Icon type="loading" theme="outlined" />"Loading, please wait..." : null} */}

            {this.props.garments ? (
              <GarmentList garments={this.props.garments} />
            ) : null}
            {/* {this.props.garments
              ? this.props.garments.map(garment => (
                  <GarmentList garment={garment} key={garment.id} />
                ))
              : null} */}
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
