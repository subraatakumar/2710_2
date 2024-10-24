export const inc = (inputValue) => ({
  type: "inc",
  payload: parseInt(inputValue),
});
export const dec = (inputValue) => ({
  type: "dec",
  payload: parseInt(inputValue),
});
export const reset = () => ({ type: "reset" });

export const fetchProductStarted = () => ({ type: "product_fetching" });
export const fetchProductSuccess = (data) => ({
  type: "product_success",
  payload: data,
});
export const fetchProductsFailure = (msg) => ({
  type: "product_failure",
  payload: msg,
});
