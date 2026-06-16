const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    image: {
        type: String
    },

    author: {
        type: String,
        required: true
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },

    tags: [
        {
            type: String
        }
    ],

    seo: {
        title: {
            type: String
        },
        description: {
            type: String
        },
        keywords: [
            {
                type: String
            }
        ]
    },

    status: {
        type: String,
        enum: ["draft", "published"],
        default: "draft"
    },

    views: {
        type: Number,
        default: 0
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model("Blog", blogSchema)