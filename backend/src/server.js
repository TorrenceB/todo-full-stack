import express from "express";
import cors from "cors";
import todos from "./routes/todos.js";
import postTodo from "./routes/post-todo.js";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use("/todos", todos);
app.use("/todo/post", postTodo);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
