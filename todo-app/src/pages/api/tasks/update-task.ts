import connectToMongoDB from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import Task from "./model/taskModel";

const updateTask = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.body);

    connectToMongoDB();
    const updatedTask = await Task.findByIdAndUpdate(
      { _id: req.body._id },
      { task: req.body.task, isCompleted: req.body.isCompleted }
    );
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(503).send("Some error occurred.");
  }
};
export default updateTask;
