import apiSlice from "../../app/apiSlice";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
}

export interface AuthInfoResponse {
  user: User;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
    }),
    getAuthInfo: builder.query<AuthInfoResponse, void>({
      query: () => "/users/info",
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useGetAuthInfoQuery } =
  authApiSlice;
