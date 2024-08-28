import cors from "cors";
import express from "express";

import compression from "compression";
import { ApiResponse } from "../src/utils/ApiResponse.js";
import cardRouter from "../src/routes/card.route.js";
import errorMiddleware from "../src/middlewares/error.middleware.js";

export const app = express();
const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000", "http://localhost:5173"],
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
    limit: "5mb",
  })
);
app.use(compression());

// Cards routes
app.use("/api/cards", cardRouter);

app.get("/ping", (req, res) => {
  res.send("Backend running succesfully");
});

app.all("*", (req, res) => {
  res
    .status(404)
    .json(
      new ApiResponse(
        404,
        {},
        "something went wrong."
      )
    );
});
app.use(errorMiddleware);
