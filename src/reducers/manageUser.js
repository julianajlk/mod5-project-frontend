import { combineReducers } from "redux";

const brandsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_BRANDS":
      return action.brands;
    default:
      return state;
  }
};

const suppliersReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_SUPPLIERS":
      return action.suppliers;
    default:
      return state;
  }
};

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_USERS":
      return action.users;
    case "ADD_USER":
      const user = action.user;

      // ...state,
      //users: [...state, user] --> this adds users>users (so would have to call props users.users - not good

      //users is not state.users inside this function bc of the combineReducers, it tells which state is which.
      //NEED BRACKETS INLINE.
      return [...state, user];
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "FETCHING_USERS":
      return true;
    case "FETCHED_USERS":
      return false;
    default:
      return state;
  }
};

//this allows it to show in redux state
const rootReducer = combineReducers({
  loading: loadingReducer,
  users: usersReducer,
  brands: brandsReducer,
  suppliers: suppliersReducer
});

export default rootReducer;
