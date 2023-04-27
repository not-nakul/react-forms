import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes["loader"]}>
      <h1>Loading user data...</h1>
      <div className={classes["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
