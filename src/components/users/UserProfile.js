import React from "react";
import { connect } from "react-redux";

import { Card } from "antd";

const UserProfile = props => {
  return (
    <div>
      <Card
        title="User Profile"
        extra={<a href="/">Edit</a>}
        style={{ width: 300 }}
      >
        {props.selectedUser ? (
          <React.Fragment>
            <h3>Name: {props.selectedUser.name}</h3>
            {props.selectedUser &&
            props.selectedUser.organizationable.type === "brand" ? (
              <p>Company: {props.selectedUser.organizationable.brand.name}</p>
            ) : (
              <p>
                Company: {props.selectedUser.organizationable.supplier.name}
              </p>
            )}
          </React.Fragment>
        ) : null}
      </Card>
    </div>
  );
};

//ownProps are props from parent. The parent (<Users/>) needs to pass in props in a render function - render={data => {return <UserProfile userId={data.match.params.userId} />;}} - here the props passed is the userId, from data(route). Need to do this here and not on the component because by the time it gets to the component state.users is undefined (lifecycle).
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  // console.log(state, state.users, ownProps.userId);
  let selectedUser = state.users.find(
    user => user.id === parseInt(ownProps.userId)
  );
  // console.log("selectedUser", selectedUser);
  return {
    selectedUser: selectedUser
  };
};

export default connect(mapStateToProps)(UserProfile);
