import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Select, Radio } from "antd";

import { createUser } from "../actions/actions";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class UserForm extends Component {
  state = {
    name: "",
    email: "",
    organizationable_type: "",
    radio_id: "",
    organization: ""
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createUser({
      name: this.state.name,
      email: this.state.email,
      organizationable_type: this.state.organizationable_type,
      organizationable_id: this.state.radio_id
    });
    // this.props.history.push("/users/" + this.props.user.id);
    this.setState({
      name: "",
      email: "",
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

  render() {
    return (
      <div>
        <h3>Create User</h3>
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
          <FormItem
            label="Company Type"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            <Select
              placeholder="Select Company Type"
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
                Sign Up
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
  { createUser }
)(UserForm);
