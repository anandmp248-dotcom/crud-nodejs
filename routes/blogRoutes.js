const express = require("express");
const Blog = require("../models/Blog");

const router = express.Router();

router.post('/', async (req, res) => {
    const blog = await Blog.create(req.body);
    res.json(blog)
})

router.get('/', async (req, res) => {
    const blog = await Blog.find();
    res.json(blog)
})

router.put("/:id", async (req, res) => {

    const blog = await Blog.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(blog);

});

router.delete("/:id", async (req, res) => {

    await Blog.findByIdAndDelete(req.params.id);
    res.json({
        message: "Deleted"
    });

});

module.exports = router;
