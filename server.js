
// import mongoose 
const mongoose= require('mongoose');
const Person = require("./Models/Person");
// const app = express();
const url = 'mongodb://127.0.0.1:27017/my_database'

mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})
const person = new Person ({name: "John", age:18 , favoriteFoods:"chocolate"});
person.save((error)=> {
    if(error){
        return console.log(`Error has occured: ${error}`)
    }
    console.log('Document is successfully saved.');
});

person.find({}, function (error, documents){
    console.log(documents);
});