import express from "express";
import category from "../models/category";
import mongoose from "mongoose";

const router = express.Router();

// GET ALL CATS
router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const cats = await category.find();
    res.status(200).json(cats);
  } catch(e) {
    res.status(500).json(e);
  }
})

export default router;
