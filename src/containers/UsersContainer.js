import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../components/actions/actions";

import Users from "../components/users/Users";
// import UserProfile from "../components/users/UserProfile";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <Users users={this.props.users} loading={this.props.loading} />
      </div>
    );
  }
}

//add state from store to props, but still need to pass in props to <Users/>
const mapStateToProps = state => {
  return {
    loading: state.loading,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersContainer);
