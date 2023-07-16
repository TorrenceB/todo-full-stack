import express from "express";
import getCollection from "../utils/getCollection.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await getCollection("todos");

    res.send(data);
  } catch (err) {
    throw new Error(`An error has occurred @todos.js::getCollection ${err}`);
  }
});

export default router;
