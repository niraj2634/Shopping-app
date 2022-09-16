import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./ProductsReducers";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;