import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import User from "./User";
import UserProfile from "./UserProfile";
// import UserForm from "./UserForm";

class Users extends Component {
  render() {
    //data comes from route, need a render function to pass in userId as props to UserProfile.
    return (
      <Switch>
        <Route exact path="/users">
          <ul>
            {this.props.loading ? "Loading, please wait..." : null}
            {this.props.users
              ? this.props.users.map(user => <User user={user} key={user.id} />)
              : null}
          </ul>
        </Route>
        <Route
          path="/users/:userId"
          render={data => {
            return <UserProfile userId={data.match.params.userId} />;
          }}
        />
        {/* <Route
          path="/signup"
          render={data => {
            return <UserForm userId={data.match.params.userId} />;
          }}
        /> */}
      </Switch>
    );
  }
}

export default Users;
