import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

class Map extends Component {
  render() {
    return (
      <div>
        <img
          width="300"
          src={this.props.selectedSupplier.map_url}
          alt="Google Map"
        />
      </div>
    );
  }
}
export default Map;
