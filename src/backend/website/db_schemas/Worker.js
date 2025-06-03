const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const WorkerSchema = new Schema({
   _id: {
      type: String
  },
   email: {
     type: String,
     required: true,
   },
   password: {
     type: Number,
     required: true,
   }
 });

const Worker = mongoose.model("Worker", WorkerSchema)

module.exports = Worker
