import { Router, Request, Response } from 'express';
import Category from '../models/Category';

const router: Router = Router();

router.post('/post', async (req: Request, res: Response) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/get', async (req: Request, res: Response) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;