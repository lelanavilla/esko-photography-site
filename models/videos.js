const mongoose = require('mongoose');
const {Schema} = mongoose;

const videosSchema = new Schema({
            url: String,
             
    
})
const VideosModel = mongoose.model("videos", videosSchema);

module.exports = VideosModel;