import mongoose from "mongoose";

interface Category {
    name:string;
    quantity:number;
}

const CategorySchema = new mongoose.Schema<Category>({
    name:{
      type: String,
      required: true,
      unique: true,
   },
    quantity:{
      type: Number,
      required: true,
   }
})

export default mongoose.model("Category", CategorySchema);