export const inc = (inputValue) => ({
  type: "inc",
  payload: parseInt(inputValue),
});
export const dec = (inputValue) => ({
  type: "dec",
  payload: parseInt(inputValue),
});
export const reset = () => ({ type: "reset" });
