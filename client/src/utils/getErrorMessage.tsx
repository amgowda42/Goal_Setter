import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { SerializedError } from "@reduxjs/toolkit";

type ErrorWithMessage = { message: string };
export function getErrorMessage(
  error: FetchBaseQueryError | SerializedError | unknown
): string {
  if (typeof error === "object" && error !== null && "status" in error) {
    const err = error as FetchBaseQueryError;

    if (
      typeof err.data === "object" &&
      err.data !== null &&
      "message" in err.data
    ) {
      return (err.data as ErrorWithMessage).message;
    }

    return `Request failed with status ${err.status}`;
  }

  if (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as { message?: unknown }).message === "string"
  ) {
    return (error as ErrorWithMessage).message;
  }
  return "Something went wrong. Please try again.";
}
