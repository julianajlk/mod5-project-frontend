import React, { Component } from "react";
import { connect } from "react-redux";

import UserFormEdit from "./UserFormEdit";

import { Input, Form, Button, Icon, Row, Col, Divider } from "antd";

import { updateUser } from "../actions/actions";

const FormItem = Form.Item;

class UserProfile extends Component {
  state = {
    isEditing: false,
    name: "",
    email: ""
  };

  toggleEditing = event => {
    this.setState({
      isEditing: !this.state.isEditing,
      name: this.props.selectedUser.name,
      email: this.props.selectedUser.email
    });
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
      isEditing: !this.state.isEditing,
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
      marginBottom: 16
    };

    const DescriptionItem = ({ title, content }) => (
      <div
        style={{
          fontSize: 14,
          lineHeight: "22px",
          marginBottom: 7,
          color: "rgba(0,0,0,0.65)"
          // textAlign: "center"
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
      <div>
        <React.Fragment>
          {this.state.isEditing ? (
            <UserFormEdit selectedUser={this.props.selectedUser} />
          ) : this.props.selectedUser ? (
            <React.Fragment>
              <Row>
                <Col span={8}>
                  <img
                    className="profile-picture"
                    alt="Profile Picture"
                    src={this.props.selectedUser.url}
                  />
                </Col>
                <Col span={16}>
                  <h2 className="page-title">User Profile</h2>
                  {/* <h2
                    className="page-title"
                    style={{ ...pStyle, marginBottom: 24 }}
                  >
                    User Profile
                  </h2> */}
                  <a onClick={this.toggleEditing}>
                    {" "}
                    <Icon type="edit" theme="outlined" />
                  </a>
                  <h3>Name: {this.props.selectedUser.name}</h3>
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
        </React.Fragment>
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

export default connect(
  mapStateToProps,
  { updateUser }
)(UserProfile);
