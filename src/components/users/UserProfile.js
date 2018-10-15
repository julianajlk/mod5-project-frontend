import React, { Component } from "react";
import { connect } from "react-redux";

import { Card, Input, Form, Button } from "antd";

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
    return (
      <div>
        <Card
          title="User Profile"
          extra={<a onClick={this.toggleEditing}>Edit</a>}
          style={{ width: 300 }}
        >
          {this.state.isEditing ? (
            <Form onSubmit={event => this.handleOnSubmit(event)}>
              <FormItem label="Name">
                <Input
                  placeholder={this.props.selectedUser.name}
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={event => this.handleOnChange(event)}
                />
              </FormItem>
              <FormItem label="Email">
                <Input
                  placeholder={this.props.selectedUser.email}
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={event => this.handleOnChange(event)}
                />
              </FormItem>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form>
          ) : this.props.selectedUser ? (
            <React.Fragment>
              <h3>Name: {this.props.selectedUser.name}</h3>
              <p>Email: {this.props.selectedUser.email}</p>
              {this.props.selectedUser &&
              this.props.selectedUser.organizationable.type === "brand" ? (
                <p>
                  Company: {this.props.selectedUser.organizationable.brand.name}
                </p>
              ) : (
                <p>
                  Company:{" "}
                  {this.props.selectedUser.organizationable.supplier.name}
                </p>
              )}
            </React.Fragment>
          ) : null}
        </Card>
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
