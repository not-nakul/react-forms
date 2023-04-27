import { Outlet } from "react-router";
import Navbar from "./components/header/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
