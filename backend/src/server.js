import express from "express";
import { db } from "./plugins/firebase.js";
import { collection } from "firebase/firestore";

const app = express();
const port = 8080;

const todosRef = collection(db, "todos");

const fetchTodos = () => {
  try {
    console.log("Todos: ", todosRef);
  } catch (err) {
    throw new Error("An error has occurred: ", err);
  }
};

app.get("/", (req, res) => {
  fetchTodos();
  res.send("Todo app Server response");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
