import express from "express";
import { db } from "../plugins/firebase.js";
import { doc, deleteDoc } from "firebase/firestore";

const router = express.Router({ mergeParams: true });

router.delete("/", async (req, res) => {
  const docRef = doc(db, "todos", req.params.id);
  const deleted = await deleteDoc(docRef);

  res.send(deleted);
});

export default router;
