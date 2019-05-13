const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


//create city Schema & model

const CitySchema = new Schema({
city:{
    type:String,
    required: [true,'City field is required']
},
country:{
    type:String
}

//add in geo location
});

const City = mongoose.model('city',CitySchema);

module.exports = City;