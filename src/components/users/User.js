import React, { Component } from "react";
// import { connect } from "react-redux";

class User extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <h3>Name: {user.name}</h3>
        {user.organizationable.type === "brand" ? (
          <p>Company: {this.props.user.organizationable.brand.name}</p>
        ) : (
          <p>Company: {this.props.user.organizationable.supplier.name}</p>
        )}
      </div>
    );
  }
}

export default User;
// export default connect(
//   null,
//   { deleteUser }
// )(User);
