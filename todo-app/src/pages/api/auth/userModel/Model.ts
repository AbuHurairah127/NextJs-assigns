import mongoose from "mongoose";
const { Schema } = mongoose;
export type Medicine = {
  name: string;
  durations: number;
  times: number;
  In: string;
};
const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
