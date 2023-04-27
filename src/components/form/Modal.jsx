import { Link } from "react-router-dom";

import classes from "./Modal.module.css";

function Modal() {
  return (
    <>
      <section className={classes["modal"]}>
        <header>Submitted!</header>
        <div>
          <p>Your form has been submitted and added to the list of users.</p>
          <p>
            Click on the button below to view the users list and confirm your
            entry.
          </p>
        </div>

        <Link to="/users">
          <button>Users</button>
        </Link>
      </section>

      <div className={classes["backdrop"]}></div>
    </>
  );
}

export default Modal;
