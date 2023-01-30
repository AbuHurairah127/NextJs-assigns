import connectToMongoDB from "@/lib/db";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import Task from "./model/taskModel";

const addTask = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    connectToMongoDB();

    const task = await Task.create({
      task: req.body.task,
      isCompleted: req.body.isCompleted,
      createdBy: new mongoose.Types.ObjectId(req.body.createdBy),
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(503).send("Some error occurred.");
  }
};
export default addTask;
