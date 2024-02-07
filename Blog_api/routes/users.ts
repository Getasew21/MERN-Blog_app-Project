import { Router, Request, Response } from 'express';
import User  from '../models/User';
import Post  from '../models/Post';
import bcrypt from 'bcrypt';

const router = Router();

// GET USER
router.get("/get/:id", async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json("User not found!");
    }
    const { password, ...others } = user.toObject();
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/updateuser/:id", async (req: Request, res: Response) => {
console.log(req.body);
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        }
        // { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json("User not found!");
      }
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account!");
    res.json(req.body);
  }
});

router.delete("/deleteuser/:id", async (req: Request, res: Response,next) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json("User not found!");
      }
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
});

export default router;
