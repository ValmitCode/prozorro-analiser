const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const TenderSchema = new Schema({
   _id: {
      type: String
  },
   id: {
     type: Number,
     required: true,
   },
   tender_id: {
     type: String,
     required: true,
   },
   status: {
    type: String,
    required: true,
   },
   description: {
     type: String,
     required: true,
   },
   link: {
     type: String,
     required: true,
   },
 });

const Tender = mongoose.model("Tender", TenderSchema)

module.exports = Tender
