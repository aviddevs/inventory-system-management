const express = require("express");
const {Category, validate} = require("../models/category");
const router = express.Router();

router.get("/", async (req, res) => {
    const categories = await Category.find().sort("name")
    res.send(categories);
});

router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const category = new Category({
        item: req.body.item,
        amount: req.body.amount,
        stock: req.body.stock
    });
    await category.save();

    res.send(category);
});


module.exports = router;