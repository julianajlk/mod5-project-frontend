import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input, Button, DatePicker, message, Icon, Row, Col } from "antd";

import { updateUser } from "../actions/actions";

const FormItem = Form.Item;

class UserFormEdit extends Component {
  //like DOM content loaded
  state = {
    name: "",
    email: "",
    about: "",
    file_upload: "",
    dob: "",
    phone: "",
    location: "",
    position: "",
    department: ""
  };
  componentDidMount() {
    this.setState({
      name: this.props.selectedUser.name,
      email: this.props.selectedUser.email,
      about: this.props.selectedUser.about,
      url: this.props.selectedUser.url,
      file_upload: "",
      dob: this.props.selectedUser.dob,
      phone: this.props.selectedUser.phone,
      location: this.props.selectedUser.location,
      position: this.props.selectedUser.position,
      department: this.props.selectedUser.department
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    let newUser = {
      name: this.state.name,
      email: this.state.email,
      about: this.state.about,
      dob: this.state.dob,
      phone: this.state.phone,
      location: this.state.location,
      position: this.state.position,
      department: this.state.department
    };
    let file = {
      file_upload: this.state.file_upload
    };
    this.props.updateUser(
      this.props.history.push,
      newUser,
      this.props.selectedUser.id,
      file
    );

    this.setState({
      name: "",
      email: "",
      about: "",
      dob: "",
      phone: "",
      location: "",
      position: "",
      deparment: ""
    });
  };

  handleOnChange = event => {
    //[event.target.name] will be replaced with name/email/organization depending on where the input is
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleDateChange = (date, dateString) => {
    console.log(date, dateString);
    this.setState({
      dob: dateString
    });
  };

  handlePictureUpload = event => {
    console.log("upload", event.target.files, event.target.info);
    if (event.target.files) {
      message.success(
        `${event.target.files[0].name} file uploaded successfully`
      );
    } else if (event.target.files === false) {
      message.error(`File upload failed.`);
    }
    this.setState({
      file_upload: event.target.files[0]
    });
  };

  render() {
    console.log("edit selectedUser", this.props.selectedUser);
    return (
      <div>
        {this.props.selectedUser ? (
          <React.Fragment>
            <Row>
              <Col span={8}>
                <img
                  className="profile-picture-edit"
                  alt="Profile Avatar"
                  src={this.state.url}
                  style={{ marginRight: 20, float: "right" }}
                />
              </Col>
              <Col span={16}>
                <h2 className="page-title">Edit Profile</h2>
                <FormItem label="Profile Picture">
                  <Button>
                    <label>
                      <Icon type="upload" />
                      {this.state.file_upload !== ""
                        ? " Picture Uploaded"
                        : " Upload New Picture"}
                      <input
                        type="file"
                        name="avatar"
                        id="avatar"
                        onChange={event => this.handlePictureUpload(event)}
                      />
                    </label>
                  </Button>
                  {this.state.file_upload !== "" ? (
                    <p>
                      <Icon type="paper-clip" theme="outlined" />{" "}
                      {this.state.file_upload.name}
                    </p>
                  ) : null}
                </FormItem>
              </Col>
            </Row>

            <Form onSubmit={event => this.handleOnSubmit(event)}>
              <FormItem
                label="Name"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
              >
                <Input
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={event => this.handleOnChange(event)}
                />
              </FormItem>
              <FormItem
                label="Email"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
              >
                <Input
                  placeholder="Email"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={event => this.handleOnChange(event)}
                />
              </FormItem>
              <FormItem
                label="About"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
              >
                <Input
                  placeholder="About"
                  type="text"
                  name="about"
                  value={this.state.about}
                  onChange={event => this.handleOnChange(event)}
                />
              </FormItem>
              <FormItem
                label="DOB"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
              >
                <DatePicker
                  placeholder={this.props.selectedUser.dob}
                  onChange={this.handleDateChange}
                />
              </FormItem>
              <FormItem
                label="Phone"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
              >
                <Input
                  placeholder="Phone"
                  type="text"
                  name="phone"
                  value={this.state.phone}
                  onChange={event => this.handleOnChange(event)}
                />
              </FormItem>
              <FormItem
                label="Location"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
              >
                <Input
                  placeholder="Location"
                  type="text"
                  name="location"
                  value={this.state.location}
                  onChange={event => this.handleOnChange(event)}
                />
              </FormItem>
              <FormItem
                label="Position"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
              >
                <Input
                  placeholder="Position"
                  type="text"
                  name="position"
                  value={this.state.position}
                  onChange={event => this.handleOnChange(event)}
                />
              </FormItem>
              <FormItem
                label="Department"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
              >
                <Input
                  placeholder="Department"
                  type="text"
                  name="department"
                  value={this.state.department}
                  onChange={event => this.handleOnChange(event)}
                />
              </FormItem>

              <div style={{ marginTop: 16 }}>
                <FormItem wrapperCol={{ span: 12, offset: 5 }}>
                  <Button type="primary" htmlType="submit">
                    Update Profile
                  </Button>
                  <Link to={`/users/${this.props.selectedUser.id}`}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ float: "right" }}
                      onClick={this.toggleEditing}
                    >
                      Cancel
                    </Button>
                  </Link>
                </FormItem>
              </div>
            </Form>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}
// if (this.props.users) {
//   let clickedUser = this.props.users.find(
//     user => user.id === this.props.userId
//   );
// }
// console.log(this.props.users);
// console.log("UserFormEdit", clickedUser);

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  console.log("ownprops", ownProps);
  console.log("state.users", state.users);

  let selectedUser = state.users.find(
    user => user.id === parseInt(ownProps.userId)
  );
  return {
    selectedUser: selectedUser,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { updateUser }
)(UserFormEdit);
