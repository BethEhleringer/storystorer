const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userFirstName: { type: String, required: true },
  userLastName: { type: String, required: true },
  location: { type: String, required: false},
  role: { type: String, required: true}
 
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;