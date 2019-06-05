const express = require("express");
const router = express.Router();
const Itinerary = require('../models/Itinerary');

//get a list of object from the db
router.get('/itineraries',function(req,res,next){
    Itinerary.find({}).sort({itinerary:1}).then(function(itinerary){
        res.send(itinerary);
    })
});
//add a new object to th db
router.post('/itineraries',function(req,res,next){
    Itinerary.create(req.body).then(function(itinerary){
res.send(itinerary);
 }).catch(next);
    
});
//update an object in the db
router.put('/itineraries/:id',function(req,res,next){
    Itinerary.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Itinerary.findOne({_id:req.params.id}).then(function(itinerary){
    res.send(itinerary);
});
 });
    
});
//delete an object from the db
router.delete('/itineraries/:id',function(req,res,next){
    Itinerary.findByIdAndDelete({_id: req.params.id}).then(function(itinerary){
res.send(itinerary);
    });
    
});

module.exports = router;