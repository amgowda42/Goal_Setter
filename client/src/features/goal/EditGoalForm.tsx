import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditGoalMutation } from "./goalApiSlice";
import { toast } from "sonner";

interface EditGoalFormProps {
  onClose: () => void;
  id: string;
  title: string;
  text: string;
}

const goalSchema = z.object({
  title: z.string().min(1, "Title is required"),
  text: z.string().min(1, "Description is required"),
});

type GoalFormData = z.infer<typeof goalSchema>;

const EditGoalForm = ({ onClose, id, title, text }: EditGoalFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GoalFormData>({
    resolver: zodResolver(goalSchema),
    mode: "onChange",
    defaultValues: {
      title: title,
      text: text,
    },
  });

  const [editGoal, { isLoading }] = useEditGoalMutation();

  const onSubmit = async (data: GoalFormData) => {
    try {
      await editGoal({
        id,
        data,
      }).unwrap();
      toast.success("Goal Edited successfully!");
      onClose();
    } catch {
      toast.error("Failed to Edit goal. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <input
          type="text"
          placeholder="Goal Title"
          {...register("title")}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Goal Description"
          {...register("text")}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
        />
        {errors.text && (
          <p className="text-red-500 text-sm">{errors.text.message}</p>
        )}
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-200 cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
};

export default EditGoalForm;
