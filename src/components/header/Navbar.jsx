import classes from "./Navbar.module.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes["navbar"]}>
      <div className={`wide-container ${classes["nav-container"]}`}>
        <h1>React Forms</h1>

        <ul className={classes["links"]}>
          <Link to="/" className={classes["link"]}>
            <li>Home</li>
          </Link>
          <Link to="/register" className={classes["link"]}>
            <li>Register</li>
          </Link>
          <Link to="/users" className={classes["link"]}>
            <li>Users</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
