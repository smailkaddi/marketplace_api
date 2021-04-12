const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SuperAdmin = new Schema({
    FirstName: {
        type: String,
        required: true,
        trim: true,
    },
    LastName: {
        type: String,
        required: true,
        trim: true,
    },
    Email: {
        type: String,
        required: true,
        trim: true,
    },
    login: {
        type: String,
        required: true,
        trim: true,
    },
    Password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    versionKey: false
});

const superadminList = mongoose.model("SuperAdmin", SuperAdmin);
module.exports = superadminList;