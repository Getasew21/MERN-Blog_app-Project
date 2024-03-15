"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const router = (0, express_1.Router)();
// REGISTER
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt_1.default.genSalt(10);
        const hashedPass = await bcrypt_1.default.hash(req.body.password, salt);
        const newUser = new User_1.default({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });
        const user = await newUser.save();
        console.log(user.username);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User_1.default.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).json('Wrong credentials!');
        }
        const validated = await bcrypt_1.default.compare(req.body.password, user.password);
        if (!validated) {
            return res.status(400).json('Wrong credentials!');
        }
        const { password, ...others } = user.toObject();
        res.status(200).json(others);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.default = router;
//# sourceMappingURL=auth.js.map