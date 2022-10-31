import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TaskModal from "./Components/TaskModal";
import "./index.css";
import Modal from "./Modal";
import { store } from "./app/store";
import { Provider } from "react-redux";

const appRoot = document.getElementById("app-root") as HTMLElement;

ReactDOM.createRoot(appRoot).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Modal />
    </Provider>
  </React.StrictMode>
);
