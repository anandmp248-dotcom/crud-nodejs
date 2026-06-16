const express = require("express");
const Category = require("../models/Category");

const router = express.Router();

router.post('/', async (req, res) => {
    const category = await Category.create(req.body);
    res.json(category)
})

router.get('/', async (req, res) => {
    const category = await Category.find();
    res.json(category)
})

router.put("/:id", async (req, res) => {

    const category = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(category);

});

router.delete("/:id", async (req, res) => {

    await Category.findByIdAndDelete(req.params.id);
    res.json({
        message: "Deleted"
    });

});

module.exports = router;
