//MATERIALS
export function fetchedMaterials(materials) {
  return { type: "FETCHED_MATERIALS", materials };
}

export function fetchMaterials() {
  return dispatch => {
    fetch(`http://localhost:3000/materials`)
      .then(response => response.json())
      .then(materials => dispatch(fetchedMaterials(materials)));
  };
}

//GARMENTS
export function updateGarment(newGarment, garmentId, file) {
  let formData = new FormData();
  formData.append("brand_id", newGarment.brand_id);
  formData.append("name", newGarment.name);
  formData.append("category", newGarment.category);
  formData.append("season", newGarment.season);
  formData.append("location", newGarment.location);
  formData.append("status", newGarment.status);
  formData.append("fabrication", newGarment.fabrication);
  formData.append("trim_button", newGarment.trim_button);
  formData.append("trim_label", newGarment.trim_label);
  formData.append("trim_zipper", newGarment.trim_zipper);
  formData.append("trim_hangtag", newGarment.trim_hangtag);
  formData.append("sizing", newGarment.sizing);
  formData.append("measurement", newGarment.measurement);
  formData.append("fit_comment", newGarment.fit_comment);
  formData.append("comment", newGarment.comment);
  formData.append("cover_upload", file.file_upload);
  // console.log(typeof file.file_upload);

  return dispatch => {
    fetch(`http://localhost:3000/garments/${garmentId}`, {
      method: "PATCH",
      body: formData
    })
      .then(response => response.json())
      .then(garment => addGarment(garment));
  };
}

// .then(garment =>{ addGarment(garment)push(`http://localhost:3000/garments/${garmentId})`});

export function createGarment(newGarment, file) {
  console.log("createGarment", file, file.file_upload);
  let formData = new FormData();
  formData.append("brand_id", newGarment.brand_id);
  formData.append("name", newGarment.name);
  formData.append("category", newGarment.category);
  formData.append("season", newGarment.season);
  formData.append("location", newGarment.location);
  formData.append("status", newGarment.status);
  formData.append("fabrication", newGarment.fabrication);
  formData.append("trim_button", newGarment.trim_button);
  formData.append("trim_label", newGarment.trim_label);
  formData.append("trim_zipper", newGarment.trim_zipper);
  formData.append("trim_hangtag", newGarment.trim_hangtag);
  formData.append("sizing", newGarment.sizing);
  formData.append("measurement", newGarment.measurement);
  formData.append("fit_comment", newGarment.fit_comment);
  formData.append("comment", newGarment.comment);

  formData.append("cover_upload", file.file_upload);

  return dispatch => {
    fetch(`http://localhost:3000/garments`, {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(garment => addGarment(garment));
  };
}

// export function createGarment(newGarment) {
//   console.log(newGarment);
//   return dispatch => {
//     fetch(`http://localhost:3000/garments`, {
//       method: "POST",
//       body: JSON.stringify({
//         garment: newGarment
//       }),
//       headers: {
//         "Content-type": "application/json",
//         Accept: "application/json"
//       }
//     })
//       .then(response => response.json())
//       .then(garment => addGarment(garment));
//   };
// }

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
export function updateUser(newUser, userId, file) {
  console.log("update", newUser, userId, file);
  let formData = new FormData();
  formData.append("name", newUser.name);
  formData.append("email", newUser.email);
  formData.append("dob", newUser.dob);
  formData.append("phone", newUser.phone);
  formData.append("location", newUser.location);
  formData.append("position", newUser.position);
  formData.append("department", newUser.department);
  formData.append("avatar", file.file_upload);

  return dispatch => {
    fetch(`http://localhost:3000/users/${userId}`, {
      method: "PATCH",
      body: formData
    })
      .then(response => response.json())
      .then(user => addUser(user));
  };
}

export function createUser(newUser, file) {
  let formData = new FormData();
  formData.append("name", newUser.name);
  formData.append("email", newUser.email);
  formData.append("dob", newUser.dob);
  formData.append("phone", newUser.phone);
  formData.append("location", newUser.location);
  formData.append("position", newUser.position);
  formData.append("department", newUser.department);
  formData.append("organizationable_type", newUser.organizationable_type);
  formData.append("organizationable_id", newUser.organizationable_id);
  formData.append("avatar", file.file_upload);

  return dispatch => {
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(user => addUser(user));
  };
}

//function to update the newly created User right after it's created.
// export function uploadAvatar(newUser, file) {
//   console.log("uploadAvatar", newUser.id, file);
//   debugger;
//   let formData = new FormData("avatar", file);
//   // formData.append("avatar", file);
//   console.log("formData", formData);
//   return dispatch => {
//     fetch(`http://localhost:3000/users/${userId}`, {
//       method: "PATCH",
//       body: formData
//     })
//       .then(response => response.json())
//       .then(user => addUser(user));
//   };
// }

//function to just create new user without the file object from the picture upload.
// export function createUser(newUser) {
//   console.log("newUser", newUser);
//   return dispatch => {
//     fetch(`http://localhost:3000/users`, {
//       method: "POST",
//       body: JSON.stringify({
//         user: newUser
//       }),
//       headers: {
//         "Content-type": "application/json",
//         Accept: "application/json"
//       }
//     })
//       .then(response => response.json())
//       .then(user => uploadAvatar(user.id, newUser.picture));
//     // .then(user => console.log("then", user, user.id, newUser.picture));
//   };
// }

//   console.log(newUser.picture);
//   let formData = new FormData();
//   // let userKeys = Object.keys(newUser);
//   // console.log(userKeys, userKeys[0]);
//   // formData.append("user", userKeys[]);
//   formData.append("user", newUser);
//   formData.append("avatar", newUser.picture);
//   return dispatch => {
//     fetch(`http://localhost:3000/users`, {
//       method: "POST",
//       body: formData
//     })
//       .then(response => response.json())
//       .then(user => addUser(user));
//   };

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
