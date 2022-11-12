import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { store } from "./app/store";

import Modal from "./Modal";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./app/router";

const appRoot = document.getElementById("app-root") as HTMLElement;

ReactDOM.createRoot(appRoot).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <Helmet>
          <title>Notella</title>
        </Helmet>
        <RouterProvider router={router} />
        <Modal />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
