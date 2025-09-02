import { createBrowserRouter } from "react-router";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import AuthnticatedLayout from "../layouts/AuthnticatedLayout";
import Goal from "../features/goal/Goal";

const router = createBrowserRouter([
  {
    path: "",
    Component: Login,
  },
  {
    path: "register",
    Component: Register,
  },
  {
    path: "main",
    Component: AuthnticatedLayout,
    children: [
      {
        path: "goals",
        Component:Goal
      }
    ]
  },
]);

export default router;
