const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: String,
    password: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: String
});

UserSchema.pre('save', async function(next){
    const hashPassword = await bcrypt.hash(this.password, 10);
    this.password = hashPassword;
    next();
});

UserSchema.methods.isValidPassword = async function(newPassword){
    const match = await bcrypt.compare(newPassword, this.password);
    return match;
};

UserSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

UserSchema.set('toJSON', {
    virtuals: true
});

const User = mongoose.model('users', UserSchema);
module.exports = User;

