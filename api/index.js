import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import posts from "./routes/posts.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/posts", posts);

mongoose
  .set({ strictQuery: false })
  .connect("mongodb+srv://lanjewarvaibhav56:qAwSeDrF@cluster0.phq7pcx.mongodb.net/Posts_Blog")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error(`Could not connected to MongoDB... ${err}`));

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Listening on port ${port}`));
