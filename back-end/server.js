const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./routes/auth-routes');
const events = require('./routes/event-routes');
const home = require('./routes/home-routes');
const users = require('./routes/user-routes');
// const config = require('config'); 

require('dotenv').config();
const app = express();

// if(!config.get('jwtPrivateKey')){
//     console.error('FATAL ERROR: jwtPrivateKey is not defined');
//     process.exit(1);
// }

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Failed to connect...'));

app.use(cors());
app.use(express.json());
app.use('/', home);
app.use('/events',events);
app.use('/users', users);
app.use('/auth', auth);


const port = process.env.PORT || 5000;
app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
});


