import express from "express";
import post from "../models/post";

const router = express.Router();

//POST
router.post('/', async (req:express.Request, res:express.Response) => {
  const newPost = new post({
        ...req.body
  });
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
    console.log(req.body)
  } catch(e:any) {
    res.status(500).json(e);
  }

})


export default router;