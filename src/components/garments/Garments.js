import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import GarmentList from "./GarmentList";
import Garment from "./Garment";
import GarmentFormEdit from "./GarmentFormEdit";

class Garments extends Component {
  render() {
    // console.log("Garments", this.props.garments);

    return (
      <Switch>
        <Route exact path="/garments">
          <ul>
            <h4>Welcome, {<Link to={`users/9`}>Felipe</Link>}!</h4>

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
              <div>
                <Garment garmentId={data.match.params.garmentId} />
                <GarmentFormEdit garmentId={data.match.params.garmentId} />
              </div>
            );
          }}
        />
        {/* <Route
          path="/garments/:garmentId/edit"
          render={data => {
            return <GarmentFormEdit garmentId={data.match.params.garmentId} />;
          }}
        /> */}
      </Switch>
    );
  }
}

export default Garments;
