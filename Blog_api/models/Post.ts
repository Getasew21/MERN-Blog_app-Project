import mongoose, { Schema, Document } from 'mongoose';

interface IPost extends Document {
  title: string;
  desc: string;
  photo?: string;
  username: string;
  categories?: string[];
}

const PostSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: [String],
      required: false,
    },
    comments:{
      type : [{type : Schema.Types.ObjectId , ref : "Comment"}]
    },
    like:{
      userLiked :[{type : Schema.Types.ObjectId , ref : "User"}],
    }
  },
  { timestamps: true }
);

const Post = mongoose.model<IPost>('Post', PostSchema);

export default Post;