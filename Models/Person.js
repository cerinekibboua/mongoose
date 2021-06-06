const express = require('express')
const mongoose = require('mongoose')
// const Person = require ("./Models/Person")
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/my_database')
// const db 
const {Schema} = mongoose;
const personSchema = new Schema ({
    name : String,
    age : Number,
    favoriteFoods : String,
})
const Person = mongoose.model("person" , personSchema);
module.exports = Person ; 
