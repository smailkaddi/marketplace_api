const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const Category = new Schema(
    {
        CategoryName:{
            type: String,
            required: true,
            trim: true,
        }

    }
);

const categoryList = mongoose.model("Category", Category);
module.exports = categoryList;