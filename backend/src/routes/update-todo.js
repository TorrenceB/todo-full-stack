import express from "express";

const router = express.Router();

router.put("/", (req, res) => {
  console.log(req.body);
  res.send(req.params);
});

export default router;
