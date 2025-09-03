import GoalCard from "./GoalCard";
import { useGetGoalsQuery } from "./goalApiSlice";
import type { GoalTypes } from "./goalApiSlice";
import type { GoalError } from "./goalApiSlice";
import { useState } from "react";
import CreateGoalForm from "./CreateGoalForm";

const Goal = () => {
  const { data, isLoading, isError, error } = useGetGoalsQuery();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  let content;

  if (isLoading) {
    content = <p className="text-blue-600 text-center">Loading goals...</p>;
  } else if (isError) {
    const err = error as GoalError;
    content = (
      <p className="text-red-500 text-center">
        {"status" in err
          ? (err.data as { message?: string })?.message ||
            "Something went wrong"
          : err.message || "An unexpected error occurred"}
      </p>
    );
  } else if (!data?.goals || data.goals.length === 0) {
    content = <p className="text-red-500 text-center">No goals found.</p>;
  } else {
    content = data.goals.map((goal: GoalTypes) => (
      <GoalCard key={goal._id} goal={goal} />
    ));
  }

  return (
    <div className="p-2 space-y-3">
      <h2 className="text-gray-700 text-4xl font-semibold mx-auto text-center">
        Goals
      </h2>
      <h3 className="text-center break-words text-gray-600 font-medium text-lg">
        Your Goals, Set Your Goals Keep track of those.
      </h3>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-1 border-2 border-blue-600 rounded-md cursor-pointer"
      >
        Create New Goal
      </button>
      <div>{content}</div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.68)] z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-2 text-gray-600 hover:text-gray-800 p-1 border-2 border-gray-600 rounded-full cursor-pointer"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4">Create New Goal</h2>
            <CreateGoalForm onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Goal;
