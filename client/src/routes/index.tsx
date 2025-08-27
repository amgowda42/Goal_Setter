import { createBrowserRouter } from "react-router";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import AuthnticatedLayout from "../layouts/AuthnticatedLayout";

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
  },
]);

export default router;
