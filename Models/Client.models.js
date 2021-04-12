const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Client = new Schema(
    {
        idClient:{
            type: String,
            required: true,
            trim: true,
        },
        Adresse : {
            type: String,
            required: true,
            trim: true,
       
          }
    }
);
const ClientList = mongoose.model("Client", Client);
module.exports = ClientList;