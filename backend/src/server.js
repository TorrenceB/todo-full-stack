import express from "express";
import todos from "./routes/todos.js";
import cors from "cors";

const app = express();
const port = 8080;

app.use(cors());
app.use("/todos", todos);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
