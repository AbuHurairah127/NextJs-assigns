import connectToMongoDB from "@/lib/db";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import Task from "./model/taskModel";

const addTask = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    connectToMongoDB();
    if (typeof req.query.ObjectId === "string") {
      const task = await Task.create({
        task: req.body.task,
        description: req.body.description,
        createdBy: new mongoose.Types.ObjectId(req.query.ObjectId),
      });
      console.log(task);

      res.status(200).json(task);
    }
  } catch (error) {
    res.status(503).send("Some error occurred.");
  }
};
export default addTask;
