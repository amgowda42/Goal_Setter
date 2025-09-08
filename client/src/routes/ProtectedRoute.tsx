import { Navigate, Outlet } from "react-router";
import useAuth from "../utils/useAuth";

const ProtectedRoute = () => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading)
    return <div className="text-center text-red-500">Loading...</div>;

  if (!isAuth) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
