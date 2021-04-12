const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Delivery = new Schema({
        Delivry_Name: {
            type: String,
            required: true,
            trim: true,
        },
        Type: {
            type: String,
            required: true,
            trim: true,
        }
    }

);

const deliveryList = mongoose.model("Delivery", Delivery);
module.exports = deliveryList;