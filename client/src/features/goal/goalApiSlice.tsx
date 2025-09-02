import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { SerializedError } from "@reduxjs/toolkit";
import apiSlice from "../../app/apiSlice";

export interface GoalTypes {
  _id: string;
  title: string;
  text: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface GetGoalsResponse {
  success: boolean;
  message: string;
  goals: GoalTypes[];
}

export const goalApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGoals: builder.query<GetGoalsResponse, void>({
      query: () => "/goals",
    }),
  }),
});

export const { useGetGoalsQuery } = goalApiSlice;

export type GoalError = FetchBaseQueryError | SerializedError;
