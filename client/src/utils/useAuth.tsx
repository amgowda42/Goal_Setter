import { useGetAuthInfoQuery } from "../features/auth/authApiSlice";

const useAuth = () => {
  const { data, isLoading, isError } = useGetAuthInfoQuery();

  if (isLoading) {
    return { isAuth: false, isLoading: true };
  }

  if (isError || !data?.loggedIn) {
    return { isAuth: false, isLoading: false };
  }

  return { isAuth: true, isLoading: false };
};

export default useAuth;
