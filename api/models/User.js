const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const UserModel = mognoose.model("User", UserSchema)

module.exports = UserModel