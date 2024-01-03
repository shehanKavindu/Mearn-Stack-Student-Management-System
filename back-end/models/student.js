const mongoose = require('mongose');
const Schema  = mongoose.Schema;
const StudentSchema = new Schema({
 
    name : {
        type : String,
        required: true
    },
    age : {
        type: Number,
        required: true
    },

    gender : {
        type: String,
        required: true
    }




})