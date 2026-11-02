import React from "react";
import ReactDOM from "react-dom/client";
import "./main.sass";

import { RouterProvider } from "react-router-dom";
import router from "./router";

import { store } from "./redux/store";
import { Provider as StoreProvider } from "react-redux";
import { ConditionalCursor } from "./components/Currsor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ConditionalCursor />
      <ConditionalCursor />
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>,
);
