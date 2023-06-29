import express from "express";
// import { db } from "../plugins/firebase";
// import { collection, deleteDoc } from "firebase/firestore";

const router = express.Router();

router.delete("/", (req, res) => {
  console.log(req.params);

  // const todosCollection = collection(db, "todos")
  // const newDoc = deleteDoc(todosCollection, )
});

export default router;
