
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config;
const path= require("path");


// const logger = require("./middleware/logger.js");
const app = express();
//config
const port = process.env.PORT || 8080;
const db = process.env.MONGODB_URI || "mongodb://localhost:27017/dereks";


//middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")))

// app.use(logger);

const imagesRouter = require("./routes/images.js");
const bookingsRouter = require("./routes/bookings.js");
const videosRouter = require("./routes/videos.js");

//routes
app.use("/api/images", imagesRouter);
app.use("/api/bookings", bookingsRouter);
app.use("/api/videos", videosRouter);

app.get("*", (req, res) => {  
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


mongoose.connect(db, (err) => {
   if (err) console.error(err);
   console.log("Connected to MongoDB");
})
app.listen(port, () => console.log("Server running on port " + port));


