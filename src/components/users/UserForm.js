import React, { Component } from "react";

class UserForm extends Component {
  state = {
    name: "",
    organization: ""
  };

  handleOnChange = event => {
    console.log(event.target.value);

    this.setState({
      text: event.target.value
    });
  };

  // handleOnSubmit = event => {
  //   event.preventDefault();
  //   this.props.addUser({
  //     text: this.state.text,
  //     organizationable_type: this.state.text
  //   });
  //   this.setState({
  //     text: ""
  //   });
  // };

  render() {
    return (
      <div>
        <h3>Create User</h3>
        <form>
          <h5>Name</h5>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={event => this.handleOnChange(event)}
          />
          <h5>Company</h5>
          <input type="text" name="company" value={this.state.organization} />
          <input type="submit" onSubmit={event => this.handleOnSubmit(event)} />
        </form>
      </div>
    );
  }
}

export default UserForm;
