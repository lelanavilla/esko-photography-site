const mongoose = require('mongoose');
const {Schema} = mongoose;

const imagesSchema = new Schema({
            url: String  
    
})
const ImagesModel = mongoose.model("images", imagesSchema);

module.exports = ImagesModel;