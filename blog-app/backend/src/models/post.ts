import mongoose, { Model } from 'mongoose';

interface Post {
    title:string;
    text:string;
    cover:string;
    writer:string;
    category:mongoose.Types.Array<string>;
}

const PostSchema = new mongoose.Schema<Post>({
    title:{
        type: String,
        
        unique: true,
    },
    text:{
        type: String,
            },
    writer:{
        type: String,
            },
    cover:{
        type: String,
            },
    category:{
        type: [String],
            }
},{timestamps: true});

export default mongoose.model("Post", PostSchema);

