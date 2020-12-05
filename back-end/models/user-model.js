const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const { string } = require('joi');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:3,
        maxlength:100
    },
    email:{
        type: String,
        unique:true,
        required: true,
        minlength:10,
        maxlength:255
    },
    college:{
        type:String,
        required:true,
        minlength:3
    },
    gender:{
        type:String,
        minlength:0
    },
    dateofBirth:{
        type:Date,
        required:true
    },
    password:{
        type: String,
        required: true,
        minlength:8,
        maxlength:1024
    },
    confirmed_password:{
        type: String,
        required: true,
        minlength:8,
        maxlength:1024
    }
});

userSchema.methods.genAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'));
    return token;
}
const User = mongoose.model('User', userSchema);

function validateUser(newUser){
    const schema = Joi.object({
        name : Joi.string().min(3).max(100).required(),
        email : Joi.string().min(10).max(255).required().email(),
        college : Joi.string().min(3).required(),
        gender : Joi.string(),
        dateofBirth : Joi.date().required(),
        password : Joi.string().min(8).max(1024).required(),
        confirmed_password : Joi.string().min(8).max(1024).required()
    });
    return schema.validate(newUser);
}

function validateParams(params)
{
    const schema = Joi.object({
        id : Joi.objectId()
    });
    return schema.validate(params);
}

module.exports.User = User;
module.exports.validateUser = validateUser;
module.exports.validateParams = validateParams;