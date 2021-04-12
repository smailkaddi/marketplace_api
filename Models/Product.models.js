const mongoose = require("mongoose");
const date = new Date().getTime();
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        productImg : {
            type : String,
            required : true,
            trim : true,
        },
        Titel : {
            type : String,
            required : true,
            trim : true,
        },
        category : {
            type: String,
            required : true,
            trim : true,
        },
        tags : {
            type : String,
            required : true,
            trim : true,
        },
        price : {
            type : String,
            required : true,
            trim : true,
        },
        Qty : {
            type : String,
            required : true,
            trim : true,
        },
        discription : {
            type : String,
            required : true,
            trim : true,
        },
        idSeller : {
            type : String,
            required : true,
            trim : true,
        },
        currentDate : {
            type : String,
            required : true,
            trim : true,
        },
        status : {
            type : String,
            required : true,
            trim : true,
        }
    }
);

const productList = mongoose.model("Product",Product);
module.exports = productList;
