const express = require('express');
const imagesRouter = express.Router();

const ImagesModel = require('../models/images.js');

//get all
imagesRouter.get("/", (req, res) => {
    ImagesModel.find(req.query, (err, foundImages) => {
        if (err) return res.send(err);
        res.status(200).send(foundImages);
    })
})
//add image
imagesRouter.post('/', (req, res) => {
    const newImage = new ImagesModel(req.body);
    newImage.save((err, addedImage) => {
        if (err) return res.send(err);
        res.status(201).send(newImage);
    })
})
//get one image
// imagesRouter.get('/:id',
// (res, res)=>{
// imagesModel.findOne({_id: req.params.id}, (err, foundimage)=>{
//     if(err) return res.send(err);
//     if(!foundimage) return res.status(404);
//     res.status(200).send({message:"Image Deleted"});
// })
// })

//delete one image
imagesRouter.delete("/:id",(req, res) => {
    ImagesModel.findOneAndRemove({ _id: req.params.id }, (err, deletedImage) => {
        if (err) return res.status(404)
        if (!deletedImage) return res.status(404)
    })
})


module.exports = imagesRouter;