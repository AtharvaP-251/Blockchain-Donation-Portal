import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Router } from "react-router-dom";
import history from "./history";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <Router history={history}>
    <ToastProvider autoDismiss autoDismissTimeout={3000}>
      <App />
    </ToastProvider>
  </Router>,
  document.getElementById("root")
);
