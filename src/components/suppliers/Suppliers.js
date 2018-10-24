import React, { Component } from "react";
import {
  Route,
  Switch
  // withRouter
} from "react-router-dom";

import { Icon, Spin } from "antd";

import SupplierList from "./SupplierList";
import Supplier from "./Supplier";

class Suppliers extends Component {
  render() {
    const loadingIcon = (
      <Icon
        type="loading"
        theme="outlined"
        style={{ fontSize: 30, marginBottom: 30 }}
        spin
      />
    );

    //data comes from route, need a render function to pass in userId as props to Supplier.
    return (
      <Switch>
        <Route exact path="/suppliers">
          <ul>
            {this.props.loading ? (
              <div className="loading-div">
                <Spin indicator={loadingIcon} />
                <h4>l o a d i n g ...</h4>
              </div>
            ) : null}
            {this.props.suppliers
              ? this.props.suppliers.map(supplier => (
                  <SupplierList supplier={supplier} key={supplier.id} />
                ))
              : null}
          </ul>
        </Route>
        <Route
          exact
          path="/suppliers/:supplierId"
          render={data => {
            return <Supplier supplierId={data.match.params.supplierId} />;
          }}
        />
      </Switch>
    );
  }
}

export default Suppliers;
