import { createBrowserRouter, Navigate } from "react-router";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import Goal from "../features/goal/Goal";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import AuthLayout from "../layouts/AuthLayout";
import PublicRout from "./PublicRout";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "../ui/NotFoundPage";

const router = createBrowserRouter([
  {
    Component: PublicRout,
    children: [
      {
        path: "",
        Component: AuthLayout,
        children: [
          {
            path: "",
            element: <Navigate to="login" replace />,
          },
          {
            path: "login",
            Component: Login,
          },
          { path: "register", Component: Register },
        ],
      },
    ],
  },
  {
    Component: ProtectedRoute,
    children: [
      {
        path: "main",
        Component: AuthenticatedLayout,
        children: [
          {
            path: "",
            element: <Navigate to="goals" replace />,
          },
          {
            path: "goals",
            Component: Goal,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

export default router;
