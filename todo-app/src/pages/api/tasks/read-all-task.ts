import connectToMongoDB from "lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import Task from "./model/taskModel";

const readAllTasks = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    connectToMongoDB();
    if (typeof req.query.userId === "string") {
      const tasks = await Task.find({ _createdBy: req.query.userId });
      res.status(200).json(tasks);
    }
  } catch (error) {
    res.status(503).send("Some error occurred.");
  }
};
export default readAllTasks;
