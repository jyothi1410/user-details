var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userId: { type: Number, required: true, unique: true },
    userName: { type: String, default: "user" },
    age: Number,
    address: {
        H_NO: String,
        city: String
    }
}, { collection: "User", versionKey: false });

var UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;