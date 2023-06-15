import express from "express";
import getCollection from "../utils/getCollection.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await getCollection("todos");
  
  res.send(data);
});

export default router;
