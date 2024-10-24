const initialState = {
  loading: false,
  products: [],
  error: "",
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "product_fetching":
      return { loading: true, products: [], error: "" };
    case "product_success":
      return { loading: false, products: action.payload, error: "" };
    case "product_failure":
      return { loading: false, products: [], error: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
