import { Router, Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';

const router: Router = Router();

// REGISTER
router.post('/register', async (req: Request, res: Response) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    console.log(user.username);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post('/login', async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json('Wrong credentials!');
    }
    
    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(400).json('Wrong credentials!');
    }

    const { password, ...others } = user.toObject();
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;