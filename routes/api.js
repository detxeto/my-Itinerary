const express = require("express");
const router = express.Router();
const City = require('../models/City');

//get a list of object from the db
router.get('/cities',function(req,res,next){
    City.find({}).sort({city:1}).then(function(cities){
        res.send(cities);
    })
});
//add a new object to th db
router.post('/cities',function(req,res,next){
 City.create(req.body).then(function(city){
res.send(city);
 }).catch(next);
    
});
//update an object in the db
router.put('/cities/:id',function(req,res,next){
 City.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
City.findOne({_id:req.params.id}).then(function(city){
    res.send(city);
});
 });
    
});
//delete an object from the db
router.delete('/cities/:id',function(req,res,next){
    City.findByIdAndDelete({_id: req.params.id}).then(function(city){
res.send(city);
    });
    
});

module.exports = router;