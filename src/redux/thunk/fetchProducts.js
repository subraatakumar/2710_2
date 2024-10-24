import {
  fetchProductsFailure,
  fetchProductStarted,
  fetchProductSuccess,
} from "../actions";

const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductStarted());
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch(fetchProductSuccess(data));
  } catch (e) {
    dispatch(fetchProductsFailure("Unable to get the products!"));
  }
};

export default fetchProducts;
