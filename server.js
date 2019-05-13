//Base setup
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');





//set up express app
const app = express();
//connect to mongoodb
mongoose.connect('mongodb+srv://detxeto:PinkFloyd@mytineraryappdb-n1n2c.mongodb.net/MYtineraryAppDB?retryWrites=true', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// initialize routes
app.use('/api',require ('./routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});
//Routes
// app.get ("/",(req,res)=> res.send("HELLOoo WORLD"));


//Start the server
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`Server running on port ${port}`));