import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import UserForm from "./components/form/UserForm";
import Users from "./components/users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <UserForm />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
