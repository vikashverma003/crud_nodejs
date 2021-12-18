const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config( { path : 'config.env'} )

const connectDB = async () => {
	// console.log("000");
	// console.log(process.env.MONGO_URI);
    // try{
        //mongodb connection string
        // const con = await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        // })

        // console.log(`MongoDB connected : ${con.connection.host}`);
    // }catch(err){
        // console.log(err);
        // process.exit(1);
    // }
}

module.exports = connectDB