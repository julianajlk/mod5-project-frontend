import React, { Component } from "react";

// import { connect } from "react-redux";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

class UserLogin extends Component {
  state = {
    name: "",
    email: ""
  };

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state.radio_id, this.state.organization);
    this.setState({
      name: "",
      email: ""
    });
  };

  handleOnChange = event => {
    //[event.target.name] will be replaced with name/email/organization depending on where the input is
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={event => this.handleOnSubmit(event)}>
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

          <FormItem wrapperCol={{ span: 12, offset: 5 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </FormItem>
        </form>
      </div>
    );
  }
}

export default UserLogin;
