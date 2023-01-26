import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    task: { type: String, require: true },
    description: { type: String, required: true },
    createdBy: { type: mongoose.Types.ObjectId, require: true },
  },
  { timestamps: true }
);
const Task = mongoose.model("Task", taskSchema);
export default Task;
