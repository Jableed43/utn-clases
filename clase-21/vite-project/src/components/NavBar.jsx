import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <div>
      <nav className="nav">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "activo" : "link"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "activo" : "link"
          }
        >
          CONTACT
        </NavLink>
        <NavLink
          to={"/aboutus"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "activo" : "link"
          }
        >
          ABOUT US
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
