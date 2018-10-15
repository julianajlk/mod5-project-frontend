import React from "react";

import { Card } from "antd";
import { Link } from "react-router-dom";

const User = props => {
  const { user } = props;

  return (
    <Link className="item" to={`/users/${user.id}`}>
      <Card
        title={user.name}
        // extra={<a href="/signup">Edit</a>} <Link/> is an "a" tag, cannot have "a" tag inside another "a" tag
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
