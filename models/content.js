const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  topic: { type: String, required: true },
  location: { type: String, required: true },
  narrative: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;
