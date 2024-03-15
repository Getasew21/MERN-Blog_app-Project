"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Post_1 = __importDefault(require("../models/Post"));
const router = (0, express_1.Router)();
// CREATE POST
router.post('/create', async (req, res) => {
    const newPost = new Post_1.default(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// GET SINGLE POST
router.get('/get/:id', async (req, res) => {
    try {
        const singlepost = await Post_1.default.findById(req.params.id);
        res.status(200).json(singlepost);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// UPDATE POST
router.put('/update/:id', async (req, res) => {
    try {
        const post = await Post_1.default.findById(req.params.id);
        if (post && post.username === req.body.username) {
            try {
                const updatedPost = await Post_1.default.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, { new: true });
                res.status(200).json(updatedPost);
            }
            catch (err) {
                res.status(500).json(err);
            }
        }
        else {
            res.status(401).json('You can update only your post!');
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// DELETE POST
router.delete('/delete/:id', async (req, res) => {
    try {
        const post = await Post_1.default.findById(req.params.id);
        if (post && post.username === req.body.username) {
            try {
                await Post_1.default.findByIdAndDelete(req.params.id);
                res.status(200).json('Post has been deleted...');
            }
            catch (err) {
                res.status(500).json(err);
            }
        }
        else {
            res.status(401).json('You can delete only your post!');
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// GET ALL POSTS
router.get('/allposts', async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post_1.default.find({ username });
        }
        else if (catName) {
            posts = await Post_1.default.find({
                categories: {
                    $in: [catName],
                },
            });
        }
        else {
            posts = await Post_1.default.find();
        }
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.default = router;
//# sourceMappingURL=posts.js.map