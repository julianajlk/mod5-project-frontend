import React, { Component } from "react";

class UserForm extends Component {
  render() {
    return (
      <div>
        <h3>Create User</h3>
        <form>
          <h5>Name</h5>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default UserForm;
