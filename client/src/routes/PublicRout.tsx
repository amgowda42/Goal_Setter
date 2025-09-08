import { Navigate, Outlet } from "react-router";
import useAuth from "../utils/useAuth";

const PublicRoute = () => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading)
    return <div className="text-center text-red-500">Loading...</div>;

  if (isAuth) return <Navigate to="/main" replace />;

  return <Outlet />;
};

export default PublicRoute;
