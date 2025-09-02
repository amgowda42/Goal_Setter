import GoalCard from "./GoalCard";
import { useGetGoalsQuery } from "./goalApiSlice";
import type { GoalTypes } from "./goalApiSlice";
import type { GoalError } from "./goalApiSlice";

const Goal = () => {
  const { data, isLoading, isError, error } = useGetGoalsQuery();

  if (isLoading) {
    return <p>Loading goals...</p>;
  }

  if (isError) {
    const err = error as GoalError;
    return (
      <p className="text-red-600">
        {"status" in err
          ? (err.data as { message?: string })?.message ||
            "Something went wrong"
          : err.message || "An unexpected error occurred"}
      </p>
    );
  }

  if (!data?.goals || data?.goals?.length === 0) {
    return <p>No goals found.</p>;
  }

  return (
    <div className="grid gap-4">
      {(data?.goals as GoalTypes[]).map((goal) => (
        <GoalCard key={goal._id} goal={goal} />
      ))}
    </div>
  );
};

export default Goal;
