const express = require('express');
const bcrypt = require('bcrypt');
const _= require('lodash');
const { User, validateUser, validateParams } = require('../models/user-model');
const router = express.Router();
router.use(express.json());
// const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    const users = await User.find().sort('name');
    res.send(users);
});
router.get('/:id', async (req, res) => {
    const { error } = validateParams(req.params);
    if(error) return res.status(400).send(error.details[0].message);

    const found = await User.findById(req.params.id);
    if(!found) return res.status(404).send('User not found with given ID');
    res.send(found);
});

router.post('/' , async (req, res ) =>{
    
    const { error } = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message); 
    
    let newUser = await User.findOne( { email: req.body.email });
    if(newUser) return res.status(400).send("User already registered with this Email-ID");

    newUser = new User(_.pick(req.body, ['name', 'email', 'college','gender','dateofBirth','password','confirmed_password']));
    const salt = await bcrypt.genSalt(5);
    newUser.password = await bcrypt.hash(newUser.password, salt); 
    newUser = await newUser.save();

    // const token = newUser.genAuthToken();
    // res.header('x-auth-token', token).send(_.pick(newUser, ['_id', 'name', 'email']));
    res.send(_.pick(newUser, ['_id', 'name', 'email']));
});

router.put('/:id', async (req, res) =>{
    let { error } = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const paramCheck = validateParams(req.params);
    if(paramCheck.error) return res.status(400).send(paramCheck.error.details[0].message);

    const found = await User.findByIdAndUpdate(req.params.id,_.pick(req.body, ['name', 'email', 'password']), {new:true});

    if(!found) return res.status(404).send('User not found with given ID');

    res.send(found);
});

router.delete('/:id', async (req, res) => {
    
    const { error } = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const found = await User.findByIdAndRemove(req.params.id);

    if(!found) return res.status(404).send('User not found with given ID');
    
    res.send(found);
});

module.exports = router;

