import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Icon, Row, Col, Divider } from "antd";

class UserProfile extends Component {
  state = {
    name: "",
    email: ""
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.updateUser({
      name: this.state.name,
      email: this.state.email,
      userId: this.props.selectedUser.id
    });
    this.setState({
      name: "",
      email: ""
    });
  };

  render() {
    const pStyle = {
      fontSize: 16,
      color: "rgba(0,0,0,0.85)",
      lineHeight: "24px",
      display: "inline-block",
      marginBottom: 16,
      fontWeight: 600
    };

    const DescriptionItem = ({ title, content }) => (
      <div
        style={{
          fontSize: 14,
          lineHeight: "22px",
          marginBottom: 7,
          color: "rgba(0,0,0,0.65)"
        }}
      >
        <p
          style={{
            marginRight: 8,
            display: "inline-block",
            color: "rgba(0,0,0,0.85)"
          }}
        >
          {title}:
        </p>
        {content}
      </div>
    );
    console.log(this.props.selectedUser);
    return (
      <div className="main-div">
        {/* If I had the <UserFormEdit/> component here, <Route> would be inside <Link> */}
        {/* <Link to={`/users/${this.props.selectedUser.id}/edit`}>
              <Route path={`/users/${this.props.selectedUser.id}/edit`}>
                <UserFormEdit selectedUser={this.props.selectedUser} />
              </Route>
            </Link> */}

        {this.props.selectedUser ? (
          <React.Fragment>
            <Row>
              <Col span={8}>
                <img
                  className="profile-picture"
                  alt="Profile"
                  src={this.props.selectedUser.url}
                />
              </Col>
              <Col span={16}>
                <h2 className="page-title" style={{ marginRight: 10 }}>
                  {this.props.selectedUser.name}
                </h2>

                {/* Route to switch from <UserProfile/> to <UserFormEdit/> is on <Users/> */}
                <Link to={`/users/${this.props.selectedUser.id}/edit`}>
                  <Icon type="edit" theme="outlined" />
                </Link>

                <h3>About: {this.props.selectedUser.about}</h3>
              </Col>
            </Row>
            <Divider />
            <p style={pStyle}>Personal Info</p>
            <Row>
              <Col span={12}>
                <DescriptionItem
                  title="Location"
                  content={this.props.selectedUser.location}
                />
                <DescriptionItem
                  title="Birthday"
                  content={this.props.selectedUser.dob}
                />
              </Col>
              <Col span={12}>
                <DescriptionItem
                  title="Email"
                  content={this.props.selectedUser.email}
                />
              </Col>
            </Row>

            <Divider />
            <p style={pStyle}>Company</p>
            <Row>
              <Col span={12}>
                <DescriptionItem
                  title="Position"
                  content={this.props.selectedUser.position}
                />
              </Col>
              <Col span={12}>
                <DescriptionItem
                  title="Department"
                  content={this.props.selectedUser.department}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem
                  title="Company Type"
                  content={this.props.selectedUser.organizationable.type}
                />
              </Col>
              {this.props.selectedUser &&
              this.props.selectedUser.organizationable.type === "brand" ? (
                <Col span={12}>
                  <DescriptionItem
                    title="Company Name"
                    content={
                      this.props.selectedUser.organizationable.brand.name
                    }
                  />
                </Col>
              ) : (
                <Col span={12}>
                  <DescriptionItem
                    title="Company Name"
                    content={
                      this.props.selectedUser.organizationable.supplier.name
                    }
                  />
                </Col>
              )}
            </Row>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

//ownProps are props from parent. The parent (<Users/>) needs to pass in props in a render function - render={data => {return <UserProfile userId={data.match.params.userId} />;}} - here the props passed is the userId, from data(route). Need to do this here and not on the component because by the time it gets to the component state.users is undefined (lifecycle).
const mapStateToProps = (state, ownProps) => {
  // console.log("UserProfile", state, state.users, ownProps, ownProps.userId);
  let selectedUser = state.users.find(
    user => user.id === parseInt(ownProps.userId)
  );
  // console.log("selectedUser", selectedUser);
  return {
    selectedUser: selectedUser
  };
};

export default connect(mapStateToProps)(UserProfile);
