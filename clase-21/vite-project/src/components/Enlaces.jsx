import { Link } from "react-router-dom";

function Enlaces() {
  return (
    <div>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/contact"}>Contacto</Link>
      </div>
      <div>
        <Link to={"/aboutus"}>About us</Link>
      </div>
    </div>
  );
}

export default Enlaces;
