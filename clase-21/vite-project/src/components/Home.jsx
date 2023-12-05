import { Link } from "react-router-dom";
import "./home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={`/contact`}>Go Contact</Link>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Nav Contact
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Nav Home
      </NavLink>
      ;
    </div>
  );
}

export default Home;
