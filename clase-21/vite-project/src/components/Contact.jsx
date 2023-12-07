import Navigate from "./Navigate";
import "../index.css";
import Enlaces from "./Enlaces";
import NavBar from "./NavBar";

function Contact() {
  return (
    <div>
      <h1>Contacto</h1>
      {/* <a href="/contact"> ir a contacto </a> */}
      <Navigate />
      <NavBar />
      <Enlaces />
    </div>
  );
}

export default Contact;
