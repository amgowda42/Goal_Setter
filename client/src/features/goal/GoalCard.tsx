import type { GoalTypes } from "../goal/goalApiSlice"; // adjust import path

type GoalCardProps = {
  goal: GoalTypes;
};

const GoalCard = ({ goal }: GoalCardProps) => {
  return (
    <div className="p-3 rounded-lg shadow-lg border-2 border-blue-600 bg-white">
      <p className="text-md font-semibold text-gray-500">
        Goal Set At: {new Date(goal.createdAt).toLocaleDateString("en-GB")}
      </p>
      <h3 className="text-2xl font-semibold text-blue-500">{goal.title}</h3>
      <p className="text-gray-700 text-md font-medium">{goal.text}</p>
    </div>
  );
};

export default GoalCard;
