import "express-async-errors";

import cookieSession from "cookie-session";
import { currentUserRouter } from "./routes/current-user";
import { errorHandler } from "@kanitickets/common";
import express from "express";
import { json } from "body-parser";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test", // https connection
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(errorHandler);

export { app };
