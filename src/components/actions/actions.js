//GARMENTS
export function createGarment(newGarment) {
  console.log(newGarment);
  return dispatch => {
    fetch(`http://localhost:3000/garments`, {
      method: "POST",
      body: JSON.stringify({
        garment: newGarment
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(garment => addGarment(garment));
  };
}

export function addGarment(garment) {
  console.log("addGarment", garment);
  return { type: "ADD_GARMENT", garment };
}

export function fetchedGarments(garments) {
  return { type: "FETCHED_GARMENTS", garments };
}

export function fetchGarments() {
  return dispatch => {
    fetch(`http://localhost:3000/garments`)
      .then(response => response.json())
      .then(garments => dispatch(fetchedGarments(garments)));
  };
}

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
export function updateUser(user) {
  console.log(user);
  return dispatch => {
    fetch(`http://localhost:3000/users/${user.userId}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: user.name,
        email: user.email
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(user => addUser(user));
  };
}

export function createUser(newUser) {
  console.log(newUser);
  return dispatch => {
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      body: JSON.stringify({
        user: newUser
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(user => addUser(user));
  };
}

export function addUser(user) {
  // console.log("actions", user);
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
