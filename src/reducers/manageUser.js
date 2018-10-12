import { combineReducers } from "redux";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_USERS":
      return action.users;
    case "ADD_USER":
      console.log("add_user", action.user);
      const user = action.user;

      console.log("reducer", user, state, state.users);
      return {
        ...state,
        users: [...state, user]
      };
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
  users: usersReducer
});

export default rootReducer;
