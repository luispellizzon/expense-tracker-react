
//Connect to our DataBase
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env'});

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold)
    } catch (err) {
        console.log(`Error: ${err.message}`.red)

        process.exit(1);
    }
}

module.exports = connectDB;