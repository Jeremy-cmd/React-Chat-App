import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { chatReducer } from "./reducers/index.js";

const store = createStore(
  chatReducer,
  compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )

);

export default store;
