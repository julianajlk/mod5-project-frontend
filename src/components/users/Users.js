import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  render() {
    //condition to allow for fetch
    return (
      <ul>
        {this.props.loading ? "Loading, please wait..." : null}
        {this.props.users
          ? this.props.users.map(user => <User user={user} key={user.id} />)
          : null}
      </ul>
    );
  }
}

export default Users;
