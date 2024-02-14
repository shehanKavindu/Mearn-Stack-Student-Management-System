const express  = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express(); 

const PORT = process.env.port || 8070;
app.use (cors());
app.use(bodyparser.json());


const URL = process.env.MONGODB_URL;
mongoose.connect(URL,{
    UseCreateIndex: true
    (property), useUnifiedTopologyL: Boolean ,
    useUnifiedTopologyL: true ,
    useUnifiedTopologyL: false 
    
});
const connection = mongoose.connection;
connection.once('open' , () => {
    console.log("MongoDB Connection success!");
})
const studentRouter = require("./routes/students.js");


app.use("./Student",studentRouter);
app.listen(PORT, () =>{
    console.log('Server is up and running on port number: ${PORT}')
}) 









