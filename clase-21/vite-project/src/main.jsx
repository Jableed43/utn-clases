import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.jsx";
import Home from "./components/home.jsx";
import Contact from "./components/contact.jsx";
import AboutUs from "./components/AboutUs.jsx";

// //Establecer rutas de acceso
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "aboutus",
    element: <AboutUs />,
  },
]);

//router provider espera recibir las rutas de acceso
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
