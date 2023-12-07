import "../index.css";
import Enlaces from "./Enlaces";
import NavBar from "./NavBar";
import Navigate from "./Navigate";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* <a href="/contact"> ir a contacto </a> */}
      <Navigate />
      <NavBar />
      <Enlaces />
    </div>
  );
}

export default Home;
