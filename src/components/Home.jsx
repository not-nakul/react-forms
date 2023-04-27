import { Link } from "react-router-dom";

import classes from "./Home.module.css";

import heroImage from "../assets/hero-image.jpg";

const Home = () => {
  return (
    <section className={`wide-container ${classes["home"]}`}>
      <div className={classes["home-container"]}>
        <div className={classes["text-container"]}>
          <h1>Welcome!</h1>

          <p>
            If you'd like to register yourself then please head to the
            registration section using the button below.
          </p>

          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

        <div className={classes["img-container"]}>
          <img src={heroImage} alt="Registration" />
        </div>
      </div>
    </section>
  );
};

export default Home;
