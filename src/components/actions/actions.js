// SUPPLIERS
export function fetchedSuppliers(suppliers) {
  return { type: "FETCHED_SUPPLIERS", suppliers };
}

export function fetchingSuppliers() {
  return { type: "FETCHING_SUPPLIERS" };
}

export function fetchSuppliers() {
  return dispatch => {
    dispatch(fetchingUsers());
    fetch(`http://localhost:3000/suppliers`)
      .then(response => response.json())
      .then(suppliers => dispatch(fetchedSuppliers(suppliers)));
  };
}

// BRANDS
export function fetchedBrands(brands) {
  return { type: "FETCHED_BRANDS", brands };
}

export function fetchingBrands() {
  return { type: "FETCHING_BRANDS" };
}

export function fetchBrands() {
  return dispatch => {
    dispatch(fetchingUsers());
    fetch(`http://localhost:3000/brands`)
      .then(response => response.json())
      .then(brands => dispatch(fetchedBrands(brands)));
  };
}

// USERS
export function addUser(user) {
  console.log(user);
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
