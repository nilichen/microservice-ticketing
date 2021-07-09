import "express-async-errors";

import cookieSession from "cookie-session";
import { errorHandler, currentUser } from "@kanitickets/common";
import express from "express";
import { json } from "body-parser";
import { createTicketRouter } from "./routes/new";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test", // https connection
  })
);
app.use(currentUser);
app.use(createTicketRouter);

app.use(errorHandler);

export { app };
