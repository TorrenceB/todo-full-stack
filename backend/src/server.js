import express from "express";
import cors from "cors";
import todos from "./routes/todos.js";
import postTodo from "./routes/post-todo.js";
import deleteTodo from "./routes/delete-todo.js";
import updateTodo from "./routes/update-todo.js";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use("/todos", todos);
app.use("/todos", postTodo);
app.use("/todos/:id", deleteTodo);
app.use("/todos/:id", updateTodo);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
