import "express-async-errors";

import { currentUserRouter } from "./routes/current-user";
import { errorHandler } from "./middleware/error-handler";
import express from "express";
import { json } from "body-parser";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
