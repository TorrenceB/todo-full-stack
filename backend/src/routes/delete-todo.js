import express from "express";
import { db } from "../plugins/firebase.js";
import { doc, deleteDoc } from "firebase/firestore";

const router = express.Router({ mergeParams: true });

router.delete("/", async (req, res, next) => {
  const docRef = doc(db, "todos", req.params.id);

  try {
    await deleteDoc(docRef);

    res.json({ deletedId: req.params.id });
  } catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
});

export default router;
