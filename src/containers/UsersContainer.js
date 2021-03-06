import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../components/actions/actions";

import Users from "../components/users/Users";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div style={{ marginTop: 54, padding: "0 50px" }}>
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
