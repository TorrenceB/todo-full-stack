import express from "express";
import { db } from "../plugins/firebase.js";
import { collection, addDoc } from "firebase/firestore";

const router = express.Router();

router.post("/", async (req, res) => {
  const todosCollection = collection(db, "todos");
  const newDoc = await addDoc(todosCollection, { ...req.body });

  res.json({ newDoc });
});

export default router;
