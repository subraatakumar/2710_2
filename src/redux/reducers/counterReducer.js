const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "inc":
      return state + action.payload;
    case "dec":
      return state - action.payload;
    case "reset":
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
