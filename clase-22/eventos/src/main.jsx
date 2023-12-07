import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Propagation from "./Propagation.jsx";
import HandlerForm from "./HandlerForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HandlerForm />
  </React.StrictMode>
);
