import React, { Component } from "react";

// import { connect } from "react-redux";
import { Form, Input, Button, Icon, Checkbox } from "antd";

const FormItem = Form.Item;

class UserLogin extends Component {
  state = {
    name: "",
    password: ""
  };

  handleOnSubmit = event => {
    event.preventDefault();

    this.setState({
      name: "",
      password: ""
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
        <Form
          onSubmit={event => this.handleOnSubmit(event)}
          className="login-form"
        >
          <FormItem
            label="Name"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={event => this.handleOnChange(event)}
            />
          </FormItem>
          <FormItem
            label="Password"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Password"
              type="text"
              name="password"
              value={this.state.email}
              onChange={event => this.handleOnChange(event)}
            />
          </FormItem>

          <FormItem>
            <Checkbox>Remember me</Checkbox>
            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </FormItem>

          <FormItem wrapperCol={{ span: 12, offset: 5 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
            Or <a href="/signup">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default UserLogin;
