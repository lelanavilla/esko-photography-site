const express = require('express');
const videosRouter = express.Router();

const VideosModel = require('../models/videos.js');

//get all
videosRouter.get("/", (req, res) => {
    VideosModel.find(req.query, (err, foundVideos) => {
        if (err) return res.send(err);
        res.status(200).send(foundVideos);
    })
})
//add video
.post('/videos', (req, res) => {
    const newVideo = new VideosModel(req.body);
    newVideo.save((err, addedVideo) => {
        if (err) return res.send(err);
        res.status(201).send(addedVideo);
    })
})
// //get one video
// .get('/videos/:id',
// (res, res)=>{
// videosModel.findOne({_id: req.params.id}, (err, foundvideo)=>{
//     if(err) return res.send(err);
//     if(!foundvideo) return res.status(404);
//     res.status(200).send({message:"video Deleted"});
// })
// })

//delete one video
videosRouter.delete("/videos/:id",(req, res) => {
    videosModel.findOneAndRemove({ _id: req.params.id }, (err, deletedvideo) => {
        if (err)res.status(404).send(err)
        if (!deletedVideo) return res.status(404)
    })
})


module.exports = videosRouter;