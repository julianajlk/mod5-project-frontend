import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Select, Radio } from "antd";

import { addUser } from "../actions/actions";

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
    console.log(this.state.radio_id, this.state.organization);
    if (this.state.organizationable_type === "brand") {
      this.props.addUser({
        name: this.state.name,
        email: this.state.email,
        organizationable: {
          type: this.state.organizationable_type,
          brand: {
            id: this.state.radio_id,
            name: this.state.organization
          }
        }
      });
    } else if (this.state.organizationable_type === "supplier") {
      this.props.addUser({
        name: this.state.name,
        email: this.state.email,
        organizationable: {
          type: this.state.organizationable_type,
          supplier: {
            id: this.state.radio_id,
            name: this.state.organization
          }
        }
      });
    }

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
    console.log("radio", event.target.value[0], event.target.value[1]);
    this.setState({
      radio_id: event.target.value[0],
      organization: event.target.value[1]
    });
  };

  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };

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
              <Select.Option value="brand">Brand</Select.Option>
              <Select.Option value="supplier">Supplier</Select.Option>
            </Select>
          </FormItem>

          <RadioGroup onChange={this.handleRadioChange} defaultValue={null}>
            {this.state.organizationable_type === "brand"
              ? this.props.brands &&
                this.props.brands.map(brand => (
                  <RadioButton value={[brand.id, brand.name]}>
                    {brand.name}
                  </RadioButton>
                ))
              : this.state.organizationable_type === "supplier"
                ? this.props.suppliers &&
                  this.props.suppliers.map(supplier => (
                    <RadioButton value={[supplier.id, supplier.name]}>
                      {supplier.name}
                    </RadioButton>
                  ))
                : null}
          </RadioGroup>

          <FormItem wrapperCol={{ span: 12, offset: 5 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addUser }
)(UserForm);
