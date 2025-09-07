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

interface CreateGoalRequest {
  title: string;
  text: string;
}

interface CreateGoalResponse {
  text: string;
  title: string;
}

interface EditGoalRequest {
  title: string;
  text: string;
}

interface EditGoalResponse {
  text: string;
  title: string;
}

export const goalApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGoals: builder.query<GetGoalsResponse, void>({
      query: () => "/goals",
      providesTags: ["Goal"],
    }),
    createGoal: builder.mutation<CreateGoalRequest, CreateGoalResponse, void>({
      query: (newGoal) => ({
        url: "/goals",
        method: "POST",
        body: newGoal,
      }),
      invalidatesTags: ["Goal"],
    }),
    editGoal: builder.mutation<
      EditGoalResponse,
      { id: string; data: EditGoalRequest },
      void
    >({
      query: ({ id, data }) => ({
        url: `/goals/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Goal"],
    }),
    deleteGoal: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/goals/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Goal"],
    }),
  }),
});

export const {
  useGetGoalsQuery,
  useCreateGoalMutation,
  useEditGoalMutation,
  useDeleteGoalMutation,
} = goalApiSlice;

export type GoalError = FetchBaseQueryError | SerializedError;
