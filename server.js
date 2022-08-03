const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')

//Set up express.app()
const app = express();

app.use(express.json())

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Exported function to connect DataBase MongoDB
connectDB();


//Get Global variables from config.env file
dotenv.config({ path: './config/config.env'});

//Import routes
const transactions = require('./routes/transactions');


//Routes
app.use('/api/v1/transactions', transactions);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req, res) => res.sendFile((path.resolve(__dirname, 'client', 'build', 'index.html'))))

}
//Set up a fallback port for PORT variable
const PORT = process.env.PORT || 5000 ;


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold))