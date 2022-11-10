import express from "express";
import post from "../models/post";
import category from "../models/category";
import mongoose from "mongoose";

const router = express.Router();

//POST
router.post('/', async (req:express.Request, res:express.Response) => {
  const newPost = new post({
        ...req.body
  });
  try {
    const savedPost = await newPost.save();
    const categoryDoc = await category.findOne({name: req.body.category});

    if(categoryDoc) {
      await category.findOneAndUpdate(
      {name: req.body.category},{$set: {quantity: categoryDoc.quantity+1}})
    } else {
      const newCategory:mongoose.Document = new category({
        name: req.body.category,
        quantity: 1,
      });
      await newCategory.save();
    }

    res.status(200).json(savedPost);
    console.log(req.body)
  } catch(e:any) {
    res.status(500).json(e);
  }
});

//UPDATE
router.put('/:id', async (req,res) => {
    try {
        const updatedPost = await post.findByIdAndUpdate(
        req.params.id,{$set: req.body},{new: true});
        res.status(200).json(updatedPost);
    } catch(err) {
        res.status(500).json(err)
    }
})


//DELETE
router.delete('/:id', async (req:express.Request, res:express.Response) => {
  const thePost = await post.findById(req.params.id);
  try {
    await thePost.delete();
    res.status(200).json("the post has been deleted");
  } catch(e) {
    res.status(500).json("there is somting wong");
  }
})


//GET ALL POST
router.get('/', async (req:express.Request ,res:express.Response) => {
  const category = req.query.cat;

  try {
      let posts:any;
      if(category) {
        posts = await post.find({category});
      } else {
        posts = await post.find();
      }
    res.status(200).json(posts)
  } catch(err) {
    res.status(500).json(err)
  }
})

//GET SPECIFIC POST
router.get('/:id', async (req:express.Request ,res:express.Response) => {
  const id = req.params.id;

  try {
    const article = await post.findById(id)
    res.status(200).json(article)
  } catch(err) {
    res.status(500).json(err)
  }
})
export default router;