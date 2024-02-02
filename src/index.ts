import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectToMongodb = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/tracer");
  console.log("DB.CONNECTED");
};

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, async () => {
  console.log(`Server connected to:${port}`);
  await connectToMongodb();
});
