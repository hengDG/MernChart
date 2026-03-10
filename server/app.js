import "dotenv/config";
import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import connectDB from "./lib/connectDB.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
const port = 8800;

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
