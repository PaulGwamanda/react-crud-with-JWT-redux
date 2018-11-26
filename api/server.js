// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const lessonRoute = require('./lesson.route');
const passport = require('./passport');
const users = require('./user.route'); 

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(passport.initialize());
require('./passport')(passport);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/lesson', lessonRoute);
app.use('/api/users', users);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});