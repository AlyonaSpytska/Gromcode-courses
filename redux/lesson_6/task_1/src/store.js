import { applyMiddleware, createStore } from "redux";
import counterReducer from "./counter.reducer";

const logger = store => next => action => {
  console.group(action.type);
  console.info(`dispatching`, action);
  let result = next(action)
  console.log(`new state `, store.getState());
  console.groupEnd(result);
  
  return result;
}

const store = createStore(
  counterReducer,
  applyMiddleware(logger)
 // window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

export default store;
