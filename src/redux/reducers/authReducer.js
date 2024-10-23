const initialState = false;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return true;
    case "logout":
      return false;
    default:
      return state;
  }
};

export default authReducer;
