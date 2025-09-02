import type { GoalTypes } from "../goal/goalApiSlice"; // adjust import path

type GoalCardProps = {
  goal: GoalTypes;
};

const GoalCard = ({ goal }: GoalCardProps) => {
  return (
    <div className="p-4 rounded shadow bg-white">
      <h3 className="text-lg font-bold">{goal.text}</h3>
      <p>ID: {goal._id}</p>
    </div>
  );
};

export default GoalCard;
