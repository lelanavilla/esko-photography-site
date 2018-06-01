const mongoose = require('mongoose');
const {Schema} = mongoose;
 
const bookingsSchema = new Schema({
    info:{
        name:String,
        email:String, 
        phone:String,
        message:String  
    }
   
    })

const BookingsModel = mongoose.model('bookings', bookingsSchema)

module.exports = BookingsModel;