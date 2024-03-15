"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const Post_1 = __importDefault(require("../models/Post"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const router = (0, express_1.Router)();
// GET USER
router.get("/get/:id", async (req, res) => {
    try {
        const user = await User_1.default.findById(req.params.id);
        if (!user) {
            return res.status(404).json("User not found!");
        }
        const { password, ...others } = user.toObject();
        res.status(200).json(others);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// UPDATE
router.put("/updateuser/:id", async (req, res) => {
    console.log(req.body);
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt_1.default.genSalt(10);
            req.body.password = await bcrypt_1.default.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User_1.default.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }
            // { new: true }
            );
            if (!updatedUser) {
                return res.status(404).json("User not found!");
            }
            res.status(200).json(updatedUser);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(401).json("You can update only your account!");
        res.json(req.body);
    }
});
router.delete("/deleteuser/:id", async (req, res, next) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User_1.default.findById(req.params.id);
            if (!user) {
                return res.status(404).json("User not found!");
            }
            try {
                await Post_1.default.deleteMany({ username: user.username });
                await User_1.default.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted...");
            }
            catch (err) {
                res.status(500).json(err);
            }
        }
        catch (err) {
            res.status(404).json("User not found!");
        }
    }
    else {
        res.status(401).json("You can delete only your account!");
    }
});
exports.default = router;
//# sourceMappingURL=users.js.map