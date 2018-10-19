import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Form,
  Input,
  Button,
  Select,
  Radio,
  DatePicker,
  Upload,
  message,
  Icon
} from "antd";

import { updateUser } from "../actions/actions";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class UserForm extends Component {
  state = {
    name: "",
    email: "",
    file_upload: "",
    dob: "",
    phone: "",
    location: "",
    position: "",
    department: "",
    organizationable_type: "",
    radio_id: "",
    organization: ""
  };

  handleOnSubmit = event => {
    event.preventDefault();
    let newUser = {
      name: this.state.name,
      email: this.state.email,
      dob: this.state.dob,
      phone: this.state.phone,
      location: this.state.location,
      position: this.state.position,
      department: this.state.department,
      organizationable_type: this.state.organizationable_type,
      organizationable_id: this.state.radio_id
    };
    let file = {
      file_upload: this.state.file_upload
    };
    this.props.updateUser(newUser, file);

    // this.props.history.push("/users/" + this.props.user.id);
    this.setState({
      name: "",
      email: "",
      dob: "",
      phone: "",
      location: "",
      position: "",
      deparment: "",
      organizationable_type: "",
      radio_id: "",
      organization: ""
    });
  };

  handleSelectChange = value => {
    this.setState({
      organizationable_type: value
    });
  };

  handleOnChange = event => {
    //[event.target.name] will be replaced with name/email/organization depending on where the input is
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleRadioChange = event => {
    console.log(`radio checked:${event.target.value}`);
    // console.log("radio", event.target.value[0], event.target.value[1]);
    this.setState({
      radio_id: event.target.value[0],
      organization: event.target.value[1]
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
    console.log(this.props.selectedUser);
    return (
      <div>
        <h2 className="page-title">Edit Profile</h2>
        <img
          className="profile-picture-edit"
          alt="Profile Picture"
          src={this.props.selectedUser.url}
        />
        <FormItem
          label="Profile Picture"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          <Button>
            <label>
              <Icon type="upload" />
              {this.state.file_upload !== ""
                ? " Picture Uploaded"
                : " Click to Upload"}
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

          {/* <Upload {...props} onChange={this.handlePictureUpload}>
            <Button>
              <Icon type="upload" /> Click to Upload
            </Button>
          </Upload> */}
        </FormItem>

        <form onSubmit={event => this.handleOnSubmit(event)}>
          <FormItem
            label="Name"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            <Input
              placeholder={this.props.selectedUser.name}
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
              placeholder={this.props.selectedUser.email}
              type="text"
              name="email"
              value={this.state.email}
              onChange={event => this.handleOnChange(event)}
            />
          </FormItem>

          <FormItem
            label="DOB"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            <DatePicker onChange={this.handleDateChange} />
          </FormItem>
          <FormItem
            label="Phone"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            <Input
              placeholder={this.props.selectedUser.phone}
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
              placeholder={this.props.selectedUser.location}
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
              placeholder={this.props.selectedUser.position}
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
              placeholder={this.props.selectedUser.department}
              type="text"
              name="department"
              value={this.state.department}
              onChange={event => this.handleOnChange(event)}
            />
          </FormItem>
          <FormItem
            label="Company Type"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            <Select
              placeholder="Get organizationable type here"
              onChange={this.handleSelectChange}
            >
              <Select.Option value="Brand">Brand</Select.Option>
              <Select.Option value="Supplier">Supplier</Select.Option>
            </Select>
          </FormItem>

          <div>
            <RadioGroup onChange={this.handleRadioChange} defaultValue="">
              {this.state.organizationable_type === "Brand"
                ? this.props.brands &&
                  this.props.brands.map(brand => (
                    <RadioButton value={[brand.id, brand.name]}>
                      {brand.name}
                    </RadioButton>
                  ))
                : this.state.organizationable_type === "Supplier"
                  ? this.props.suppliers &&
                    this.props.suppliers.map(supplier => (
                      <RadioButton value={[supplier.id, supplier.name]}>
                        {supplier.name}
                      </RadioButton>
                    ))
                  : null}
            </RadioGroup>

            <RadioGroup defaultValue="a">
              <RadioButton value="a">Hello</RadioButton>
              <RadioButton value="b">Goodbye</RadioButton>
            </RadioGroup>
          </div>
          <div style={{ marginTop: 16 }}>
            <FormItem wrapperCol={{ span: 12, offset: 5 }}>
              <Button type="primary" htmlType="submit">
                Update Profile
              </Button>
            </FormItem>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { updateUser }
)(UserForm);
