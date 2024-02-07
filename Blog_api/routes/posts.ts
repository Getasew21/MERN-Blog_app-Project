import { Router, Request, Response } from 'express';
import User from '../models/User';
import Post from '../models/Post';

const router: Router = Router();

// CREATE POST
router.post('/create', async (req: Request, res: Response) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET SINGLE POST
router.get('/get/:id', async (req: Request, res: Response) => {
  try {
    const singlepost = await Post.findById(req.params.id);
    res.status(200).json(singlepost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE POST
router.put('/update/:id', async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post && post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json('You can update only your post!');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE POST
router.delete('/delete/:id', async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post && post.username === req.body.username) {
      try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json('Post has been deleted...');
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json('You can delete only your post!');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL POSTS
router.get('/allposts', async (req: Request, res: Response) => {
  const username = req.query.user as string;
  const catName = req.query.cat as string;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;