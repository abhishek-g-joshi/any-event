const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const eventSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:1,
        maxlength:500
    },
    description:{
        type:String,
        minlength:8,
        maxlength:1000
    },
    date:{
        type:Date,
        required:true
    },
    venue:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1000
    }
});

const Event = mongoose.model('Event', eventSchema);

function validateEvent(newEvent){
    const schema = Joi.object({
        name : Joi.string().min(1).max(500).required(),
        description: Joi.string().min(8).max(1000),
        date: Joi.date().required(),
        venue: Joi.string().min(5).max(1000).required()
    });
    return schema.validate(newEvent);
}

function validateParams(params)
{
    const schema = Joi.object({
        id : Joi.objectId()
    });
    return schema.validate(params);
}

module.exports.Event = Event;
module.exports.validateEvent = validateEvent;
module.exports.validateParams = validateParams;