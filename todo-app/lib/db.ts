import mongoose from "mongoose";
export const db: string = String(process.env.DB);
mongoose.set("strictQuery", false);
// connecting to MongoDB Database
const connectToMongoDB = (): void => {
  mongoose.connect(db, () => {
    console.log("Connected to DB.");
  });
};
export default connectToMongoDB;
