// Without middleware: dispatch -> action -> reducer -> update state
// With middleware: dispatch -> action -> middleware -> reducer -> update state

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Previous state: ", store.getState());
  console.log("Action:", action);

  //   let modifiedAction;
  // Call the next middleware or reducer
  //   if (action.payload > 10) {
  //     modifiedAction = { ...action, payload: 10 };
  //   } else {
  //     modifiedAction = { ...action };
  //   }
  //   console.log("Modified action:", modifiedAction);
  //   const result = next(modifiedAction);
  const result = next(action);

  console.log("Updated State:", store.getState());

  return result;
};
export default loggerMiddleware;
