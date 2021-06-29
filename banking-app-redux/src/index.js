import React from "react";
import reactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { bankingReducer } from "./reducers/bankingReducers";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/combineReducer";

const store = createStore(rootReducer);

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
