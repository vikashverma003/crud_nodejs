const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const mongoose = require("mongoose");

///const connectDB = require('./server/database/connection');


const app = express();
dotenv.config();

console.log(process.env.MONGO_URL);
//dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, },
  () => {
    console.log("Connected to MongoDB");
  }
);

// log requests
app.use(morgan('tiny'));

// mongodb connection
//connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
//app.use('/', require('./server/routes/router'))
app.get('/',(req,res)=>{
	res.send("Node world");
});

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});