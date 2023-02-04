import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    task: { type: String, require: true },
    isCompleted: { type: Boolean, required: true },
    createdBy: { type: mongoose.Types.ObjectId, require: true },
  },
  { timestamps: true }
);
const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

Task.watch().on("change", (data) => console.log(data));
export default Task;
