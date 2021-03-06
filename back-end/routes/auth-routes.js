const express = require('express');
const bcrypt = require('bcrypt');
const _= require('lodash');
const { User, validateParams } = require('../models/user-model');
const router = express.Router();
router.use(express.json());
const Joi = require('joi');


router.post('/' , async (req, res ) =>{
    
    const { error } = validateAuth(req.body);
    if(error) return res.status(400).send(error.details[0].message); 
    
    let newUser = await User.findOne( { email: req.body.email });
    if(!newUser) return res.status(400).send('Invalid Email or Password');

    const validPass = await bcrypt.compare(req.body.password, newUser.password);
    if(!validPass) return res.status(400).send('Invalid Email or Password'); 
    const token = newUser.genAuthToken();    
    res.send(token);
});

function validateAuth(req){
    const schema = {
        email : Joi.string().min(10).max(255).required().email(),
        password : Joi.string().min(8).max(1024).required()
    }
    return Joi.validate(req, schema);
}

module.exports = router;