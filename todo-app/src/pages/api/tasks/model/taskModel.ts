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

// const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
// export default UserModel;
const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
export default Task;
