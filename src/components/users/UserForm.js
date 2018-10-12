import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Select } from "antd";

import { addUser } from "../actions/actions";

const FormItem = Form.Item;
const Option = Select.Option;

class UserForm extends Component {
  state = {
    name: "",
    email: "",
    organizationable_type: "",
    organization: ""
  };

  // handleOnSubmit = event => {
  //   // console.log("hit submit", this.props);
  //   event.preventDefault();
  //   this.props.addUser({
  //     name: this.state.name,
  //     email: this.state.email,
  //     organizationable_id: 1,
  //     organizationable_type: this.state.organizationable_type
  //   });
  //   this.setState({
  //     name: "",
  //     email: "",
  //     organizationable_type: "",
  //     organization: ""
  //   });
  // };

  handleOnSubmit = event => {
    // event.preventDefault();
    // this.props.addUser(
    //   this.state.organizationable_type === "brand" ?
    //   {
    //   name: this.state.name,
    //   email: this.state.email,
    //   organizationable: {
    //     type: this.state.organizationable_type,
    //     brand: {
    //       id:
    //       name:
    //     }
    //
    //   }
    //
    // });
    this.setState({
      name: "",
      email: "",
      organizationable_type: "",
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

  render() {
    console.log(this.props.brands);
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
              <Option value="brand">Brand</Option>
              <Option value="supplier">Supplier</Option>
            </Select>
          </FormItem>

          {/* Fix after create Brands/Suppliers models: after select the organizationable_type, form shows options of organization names for that type. Conditional render the brands/suppliers names. Set state for organizationable_id on select on that brand/suppliers*/}
          <FormItem
            label="Company Name"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            <Select
              placeholder="Select Your Company"
              onChange={this.handleSelectChange}
            />
            {/* {this.props.suppliers
              ? this.props.suppliers.map(supplier => (
                  <Option value="supplier">{supplier.name}</Option>
                ))
              : null} */}
          </FormItem>
          <FormItem wrapperCol={{ span: 12, offset: 5 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>

          {/* <input type="submit" onSubmit={event => this.handleOnSubmit(event)} /> */}
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addUser }
)(UserForm);
