const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Seller = new Schema(
    {
        status : {
            type : String,
            required : true,
            trim : true,
        },
        type : {
            type : String,
            required : true,
            trim : true,
        },
        Username : {
            type : String,
            required : true,
            trim : true,
        },
        Password : {
            type : String,
            required : true,
            trim : true,
        },
        docummant : {
            type : String,
            required : true,
            trim : true,
        },
        role : {
            type : String,
            required : true,
            trim : true,
        }
    }
);
const sellerList = mongoose.model("Seller",Seller);
module.exports = sellerList;
