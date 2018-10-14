import React from "react";
import { Link } from "react-router-dom";

const UserProfile = props => {
  console.log("UserProfile", props.match);
  const { user } = props;

  return (
    <div>
      <h3>Name: {user.name}</h3>
      {user.organizationable.type === "brand" ? (
        <p>Company: {props.user.organizationable.brand.name}</p>
      ) : (
        <p>Company: {props.user.organizationable.supplier.name}</p>
      )}
    </div>
  );
};

export default UserProfile;
// export default connect(
//   null,
//   { deleteUser }
// )(User);
