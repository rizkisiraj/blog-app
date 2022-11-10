import mongoose from 'mongoose';

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
        required: true,
        unique: true,
    },
    text:{
        type: String,
        required: true,
        },
    writer:{
        type: String,
        required: true,
        },
    cover:{
        type: String,
        required: true,
        },
    category:{
        type: [String],
        required: true,
        }
},{timestamps: true});

export default mongoose.model("Post", PostSchema);

