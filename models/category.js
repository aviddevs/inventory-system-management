const Joi = require("joi");
const mongoose = require("mongoose");

const Category = mongoose.model("Categories", new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    }
}));

function validateCategory(category) {
    const schema = {
        item: Joi.string().required(),
        amount: Joi.string().required(),
        stock: Joi.string().required()
    };

    return Joi.validate(category, schema);
}

exports.Category = Category;
exports.validate = validateCategory;