import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TaskModal from "./Components/TaskModal";
import "./index.css";
import Modal from "./Modal";

const appRoot = document.getElementById("app-root") as HTMLElement;

ReactDOM.createRoot(appRoot).render(
  <React.StrictMode>
    <App />
    <Modal />
  </React.StrictMode>
);
