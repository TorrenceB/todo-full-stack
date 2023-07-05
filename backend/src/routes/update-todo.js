import express from "express";
import { db } from "../plugins/firebase.js";
import { doc, updateDoc } from "firebase/firestore";

const router = express.Router();

router.put("/", async (req, res) => {
  const docRef = doc(db, "todos", req.params.id);

  try {
    await updateDoc(docRef, { ...req.body });

    res.send(`Todo successfully updated: ${req.params.id}`);
  } catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
});

export default router;
