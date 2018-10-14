import React from "react";
import { Link } from "react-router-dom";

const User = props => {
  // console.log("this.props", this.props);
  // console.log("this.props.user", this.props.user);
  // console.log(this.props.user.organizationable);

  const { user } = props;

  return (
    <Link className="item" to={`/users/${user.id}`}>
      <div>
        <h3>Name: {user.name}</h3>
        {user.organizationable.type === "brand" ? (
          <p>Company: {props.user.organizationable.brand.name}</p>
        ) : (
          <p>Company: {props.user.organizationable.supplier.name}</p>
        )}
      </div>
    </Link>
  );
};

export default User;
// export default connect(
//   null,
//   { deleteUser }
// )(User);
