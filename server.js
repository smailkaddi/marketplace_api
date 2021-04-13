const express = require('express');

const app = express();

const mongoose = require('mongoose');

var bodyPrser = require('body-parser');

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(bodyPrser.urlencoded({extended:true}))

app.use(bodyPrser.json())



const multer = require('multer');


require('dotenv').config()


//Mongoose
mongoose.connect('mongodb+srv://admin:admin@cluster0.trdtm.mongodb.net/marketplace?retryWrites=true&w=majority',{
    useNewUrlParser : true
}).then(()=>{
console.log("sessuss");
}).catch(err =>{
console.log("errorr");
});




app.get('/', (req,res)=>{
    res.send('Welcome to MarketPlace')
})
//_______________Import______________

require('./Router/superadmin.router')(app);
require('./Router/seller.router')(app);
require('./Router/Admin.router')(app);
require('./Router/Client.router')(app);
require('./Router/Email')(app);


app.listen(process.env.PORT, () => {
    console.log("connected to server " + process.env.PORT);
  });







