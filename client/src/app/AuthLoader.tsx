import { useEffect } from "react";
import { useGetAuthInfoQuery } from "../features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import type { AppDispatch } from "../app/store";

const AuthLoader = () => {
  const { data, isSuccess } = useGetAuthInfoQuery();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUser(data.userInfo));
    }
  }, [isSuccess, data, dispatch]);

  return null;
};

export default AuthLoader;
