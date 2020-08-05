const express = require('express')
const router = express.Router();
router.use(express.json());
const mongoose = require('mongoose');
const { Event, validateEvent, validateParams } = require('../models/event-model');

router.get('/', async (req, res) => {
    const events = await Event.find().sort('name');
    res.send(events);
});

router.get('/:id', async (req, res) => {
    const { error } = validateParams(req.params);
    if(error) return res.status(400).send(error.details[0].message);

    const found = await Event.findById(req.params.id);
    if(!found) return res.status(404).send('Event not found with given ID');
    res.send(found);
});

router.post('/' , async (req, res ) =>{
    
    const { error } = validateEvent(req.body);
    if(error) return res.status(400).send(error.details[0].message); 
    
    let newEvent = new Event({ 
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        venue: req.body.venue
     });
    newEvent = await newEvent.save();
    res.send(newEvent);
});

router.put('/:id', async (req, res) =>{
    const { error } = validateEvent(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const paramCheck = validateParams(req.params);
    if(paramCheck.error) return res.status(400).send(paramCheck.error.details[0].message);

    const found = await Event.findByIdAndUpdate(req.params.id, { 
            name: req.body.name,
            description: req.body.description,
            date: req.body.date,
            venue: req.body.venue
        }, 
        {new:true}
     );

    if(!found) return res.status(404).send('Event not found with given ID');

    res.send(found);
});

router.delete('/:id', async (req, res) => {

    const { error } = validateParams(req.params);
    if(error) return res.status(400).send(error.details[0].message);

    const found = await Event.findByIdAndRemove(req.params.id);

    if(!found) return res.status(404).send('Event not found with given ID');
    
    res.send(found);
});

module.exports = router;

