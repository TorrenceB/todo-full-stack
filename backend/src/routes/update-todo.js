import express from "express";
import { db } from "../plugins/firebase.js";
import { doc, updateDoc } from "firebase/firestore";

const router = express.Router({ mergeParams: true });

router.put("/", async (req, res) => {
  const docRef = doc(db, "todos", req.params.id);

  try {
    await updateDoc(docRef, { ...req.body });

    res.json({ updatedTodo: req.body });
  } catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
});

export default router;
