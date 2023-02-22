import React from "react";
import "./index.css";
import store from "./redux/redux-store.js";
// import * as ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <App
          // state={state}
          // dispatch={store.dispatch.bind(store)}
          // store={store}
          />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>
  );
};
rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
