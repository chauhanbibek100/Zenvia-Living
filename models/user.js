const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose); // it add automaticall username, hashing, salting and hash password  -> implement kar deta hai

module.exports = mongoose.model("User", userSchema);
