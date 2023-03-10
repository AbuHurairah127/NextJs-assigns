import connectToMongoDB from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import Task from "./model/taskModel";

const deleteTask = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (typeof req.query.taskId === "string") {
      connectToMongoDB();
      const deletedTask = await Task.findByIdAndRemove({
        _id: req.query.taskId,
      });
      res.status(200).json(deletedTask);
    }
  } catch (error) {
    res.status(503).send("Some error occurred.");
  }
};

export default deleteTask;
