import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Select, Radio } from "antd";

import { addUser } from "../actions/actions";

const FormItem = Form.Item;
// const Option = Select.Option;

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
              <Select.Option value="brand">Brand</Select.Option>
              <Select.Option value="supplier">Supplier</Select.Option>
            </Select>
          </FormItem>

          <FormItem>
            {this.state.organizationable_type === "brand" ?
            this.props.brands
              ? this.props.brands.map(brand => (
                  <FormItem>
                    <Radio.Group>
                      <Radio value={brand.name}>{brand.name}</Radio>
                    </Radio.Group>
                  </FormItem>
                ))
                :
                this.props.suppliers
                ? this.props.suppliers.map(brand => (
                    <FormItem>
                      <Radio.Group>
                        <Radio value={supplier.name}>{supplier.name}</Radio>
                      </Radio.Group>
                    </FormItem>
                  ))
                }}
          </FormItem>

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
