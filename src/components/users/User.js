import React from "react";
// import { connect } from "react-redux";
import { Card } from "antd";
import { Link } from "react-router-dom";

// import UserProfile from "./UserProfile";

const User = props => {
  const { user } = props;

  return (
    <Link className="item" to={`/users/${user.id}`}>
      <Card
        title={user.name}
        extra={<a href="#">Edit</a>}
        style={{ width: 300 }}
      >
        {user.organizationable.type === "brand" ? (
          <p>Company: {user.organizationable.brand.name}</p>
        ) : (
          <p>Company: {user.organizationable.supplier.name}</p>
        )}
      </Card>
    </Link>
  );
};

export default User;
