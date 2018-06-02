
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path= require("path");

// const logger = require("./middleware/logger.js");
const app = express();
const port = process.env.PORT || 8080;


//middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")))

// app.use(logger);

const imagesRouter = require("./routes/images.js");
const bookingsRouter = require("./routes/bookings.js");
const videosRouter = require("./routes/videos.js");

//routes
app.use("/images", imagesRouter);
app.use("/bookings", bookingsRouter);
app.use("/videos", videosRouter);

app.get("*", (req, res) => {  
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


mongoose.connect("mongodb://localhost:27017/dereks", (err) => {
   if (err) console.error(err);
   console.log("Connected to MongoDB");
})
app.listen(port, () => console.log("Server running on port " + port));


