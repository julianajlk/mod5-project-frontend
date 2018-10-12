export function addUser(user) {
  return { type: "ADD_USER", user: user };
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
