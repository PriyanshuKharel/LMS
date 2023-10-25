import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";

require("dotenv").config();

export const app = express();

app.use(express.json({ limit: "50mb" }));

app.use(cookieParser());

//cors => Cross Origin Resource Sharing
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.use("/api/v1/", userRouter);

//testing APIs
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

app.use(ErrorMiddleware);
