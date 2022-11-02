import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./app/store";

import App from "./App";
import Modal from "./Modal";

import "./index.css";

const appRoot = document.getElementById("app-root") as HTMLElement;

ReactDOM.createRoot(appRoot).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Modal />
    </Provider>
  </React.StrictMode>
);
