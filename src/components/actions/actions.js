// SUPPLIERS
export function fetchedSuppliers(suppliers) {
  return { type: "FETCHED_SUPPLIERS", suppliers };
}

export function fetchSuppliers() {
  return dispatch => {
    fetch(`http://localhost:3000/suppliers`)
      .then(response => response.json())
      .then(suppliers => dispatch(fetchedSuppliers(suppliers)));
  };
}

// BRANDS
export function fetchedBrands(brands) {
  return { type: "FETCHED_BRANDS", brands };
}

export function fetchBrands() {
  return dispatch => {
    fetch(`http://localhost:3000/brands`)
      .then(response => response.json())
      .then(brands => dispatch(fetchedBrands(brands)));
  };
}

// USERS
export function createUser(user) {
  return function(dispatch, getState) {
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(user => dispatch(addUser(user)));
    // .then(user => {
    //   this.setState({ currentUser: user });
    //   this.props.history.push(`/users/${user.id}`);
    // });
  };
}

export function addUser(user) {
  console.log("actions", user);
  return { type: "ADD_USER", user };
}

export function fetchedUsers(users) {
  return { type: "FETCHED_USERS", users };
}

export function fetchingUsers() {
  return { type: "FETCHING_USERS" };
}

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchingUsers());
    fetch(`http://localhost:3000/users`)
      .then(response => response.json())
      .then(users => dispatch(fetchedUsers(users)));
  };
}
