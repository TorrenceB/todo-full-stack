import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const user = req.body;
  } catch (err) {
    console.log(err);
  }
});

export default router;
