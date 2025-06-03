const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
   _id: {
      type: String
  },
   name: {
     type: String,
     required: true,
   },
   info: {
     type: String,
     required: true,
   }
 });

const Person = mongoose.model("Person", PersonSchema)

module.exports = Person
