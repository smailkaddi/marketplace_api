const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Payment = new Schema({
        idProduct: {
            type: String,
            required: true,
            trim: true,
        },
        idSeller: {
            type: String,
            required: true,
            trim: true,
        },
        idUser: {
            type: String,
            required: true,
            trim: true,
        },
        cardNumber: {
            type: String,
            required: true,
            trim: true,
        },
        expareddate: {
            type: String,
            required: true,
            trim: true,
        },
        cvv: {
            type: String,
            required: true,
            trim: true,
        }
    }

);

const PaymentList = mongoose.model("Payment", Payment);
module.exports = PaymentList;