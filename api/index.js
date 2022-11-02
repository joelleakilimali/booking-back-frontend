import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AuthRoute from "./routes/auth.route.js";
import usersRoute from "./routes/users.route.js";
import roomRoute from "./routes/room.route.js";
import hotelsRoute from "./routes/hotels.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
console.log("--->", process.env.MONGO);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("mongoDB connexion");
  } catch (error) {
    throw error;
  }
};
app.use(cors());
app.use(cookieParser());

// to be able to use json in our api :
app.use(express.json());

app.use("/api/hotels", hotelsRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomRoute);

app.listen(8800, () => {
  connect();
  console.log("connected to backend.. on port  ");
});
