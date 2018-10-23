import React, { Component } from "react";
import {
  Route,
  Switch
  // withRouter
} from "react-router-dom";

import { Icon, Spin } from "antd";

import User from "./User";
import UserProfile from "./UserProfile";
import UserFormEdit from "./UserFormEdit";

class Users extends Component {
  render() {
    const loadingIcon = (
      <Icon
        type="loading"
        theme="outlined"
        style={{ fontSize: 30, marginBottom: 30 }}
        spin
      />
    );

    //data comes from route, need a render function to pass in userId as props to UserProfile.
    return (
      <Switch>
        <Route exact path="/users">
          <ul>
            {this.props.loading ? (
              <div className="loading-div">
                <Spin indicator={loadingIcon} />
                <h4>l o a d i n g ...</h4>
              </div>
            ) : null}
            {this.props.users
              ? this.props.users.map(user => <User user={user} key={user.id} />)
              : null}
          </ul>
        </Route>
        <Route
          exact
          path="/users/:userId"
          render={data => {
            return <UserProfile userId={data.match.params.userId} />;
          }}
        />
        <Route
          path="/users/:userId/edit"
          render={data => {
            return (
              <UserFormEdit
                userId={data.match.params.userId}
                users={this.props.users}
              />
            );
          }}
        />
      </Switch>
    );
  }
}

export default Users;
