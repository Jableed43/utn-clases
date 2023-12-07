import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Enlaces from "./Enlaces";
import NavBar from "./NavBar";
import Navigate from "./Navigate";

function AboutUs() {
  return (
    <div>
      <h1>About us</h1>
      {/* <a href="/contact"> ir a contacto </a> */}
      <Navigate />
      <NavBar />
      <Enlaces />
    </div>
  );
}

export default AboutUs;
