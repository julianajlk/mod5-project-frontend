import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Card } from "antd";

const UserProfile = props => {
  console.log(
    "UserProfile",
    props,
    props.match.params,
    props.match.params.userId
  );
  const { user } = props;
  // let selectedUserId = props.match.params.userId
  // let selectedUser
  return (
    <div>
      <Card
        title="Card title"
        extra={<a href="#">Edit</a>}
        style={{ width: 300 }}
      >
        <h3> Name: </h3>
        <p> Compant </p>
        {/* <h3>Name: {user.name}</h3> */}
        {/* {user.organizationable.type === "brand" ? (
          <p>Company: {props.user.organizationable.brand.name}</p>
        ) : (
          <p>Company: {props.user.organizationable.supplier.name}</p>
        )} */}
      </Card>
    </div>
  );
};

// export default UserProfile;

const mapStateToProps = (state, props) => {
  let user = state.users.find(u => u.id === props.match.params.userId);
  return {
    user: user
  };
};

export default connect(mapStateToProps)(UserProfile);
