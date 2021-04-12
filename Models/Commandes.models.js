const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Commandes = new Schema(
    {
        idComm : {
            type : String,
            required : true,
            trim : true,
        },
        status  : {
            type : Boolean,
            required : true,
            trim : true,
        }
    }
);
const commandesList = mongoose.model("Commandes", Commandes);
module.exports = commandesList;