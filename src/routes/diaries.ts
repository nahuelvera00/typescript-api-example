import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Fetching all entry diares!");
});

router.post("/", (_req, res) => {
  res.send("Saving a dairy");
});

export default router;
