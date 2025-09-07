import type { GoalTypes } from "../goal/goalApiSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { useState } from "react";
import EditGoalForm from "./EditGoalForm";
import { toast } from "sonner";
import { useDeleteGoalMutation } from "./goalApiSlice";

type GoalCardProps = {
  goal: GoalTypes;
};

const GoalCard = ({ goal }: GoalCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deleteGoal] = useDeleteGoalMutation();

  const handleDelete = async () => {
    try {
      await deleteGoal(goal._id).unwrap();
      toast.success("Goal deleted successfully!");
    } catch {
      toast.error("Failed to delete goal. Please try again.");
    }
  };

  return (
    <div className="flex justify-between p-3 rounded-lg shadow-lg border-2 border-blue-600 bg-white mb-6">
      <div>
        <p className="text-md font-semibold text-gray-500">
          Goal Set At: {new Date(goal.createdAt).toLocaleDateString("en-GB")}
        </p>
        <h3 className="text-2xl font-semibold text-blue-500">{goal.title}</h3>
        <p className="text-gray-700 text-md font-medium">{goal.text}</p>
      </div>
      <div className="flex istems-center gap-3">
        <RiDeleteBin6Line onClick={handleDelete} className="cursor-pointer" />
        <TbEdit
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer"
        />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.68)] z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-2 text-gray-600 hover:text-gray-800 p-1 border-2 border-gray-600 rounded-full cursor-pointer"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4">Edit Goal</h2>
            <EditGoalForm
              onClose={() => setIsModalOpen(false)}
              id={goal?._id}
              title={goal?.title}
              text={goal?.text}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalCard;
