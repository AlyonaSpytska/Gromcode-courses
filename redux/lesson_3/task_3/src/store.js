import { createStore, combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { cartReducer } from "./cart.reducer";
import { languageReducer } from "./language.reducer";

const appReducer = combineReducers({
  language: languageReducer,
  cart: cartReducer,
  user: userReducer,
});

const store = createStore(
  appReducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

export default store;
