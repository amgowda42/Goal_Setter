import { createBrowserRouter } from "react-router";
import Login from "../features/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
]);

export default router;
