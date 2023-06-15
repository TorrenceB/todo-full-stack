import express from "express";
import todos from "./routes/todos.js";

const app = express();
const port = 8080;

app.use("/todos", todos);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
