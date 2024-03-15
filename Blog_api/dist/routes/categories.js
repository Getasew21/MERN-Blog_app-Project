"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Category_1 = __importDefault(require("../models/Category"));
const router = (0, express_1.Router)();
router.post('/post', async (req, res) => {
    const newCat = new Category_1.default(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
router.get('/get', async (req, res) => {
    try {
        const cats = await Category_1.default.find();
        res.status(200).json(cats);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.default = router;
//# sourceMappingURL=categories.js.map