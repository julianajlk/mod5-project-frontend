import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import User from "./User";
import UserProfile from "./UserProfile";

class Users extends Component {
  render() {
    //condition to allow for fetch
    return (
      <Switch>
        <Route exact path="/users/">
          <ul>
            {this.props.loading ? "Loading, please wait..." : null}
            {this.props.users
              ? this.props.users.map(user => <User user={user} key={user.id} />)
              : null}
          </ul>
        </Route>
        {/* <Route
          path="/users/1"
          render={users => {
            let selectedUser = this.state.users.find(user => user.id === 1);
            return <UserProfile user={selectedUser} />;
          }}
        /> */}
        {/* <Route exact path="/users/1">
          <ul>
            {this.props.users
              ? this.props.users.map(user => (
                  <UserProfile user={user} key={user.id} />
                ))
              : null}
          </ul>
        </Route> */}
      </Switch>
    );
  }
}

export default Users;
