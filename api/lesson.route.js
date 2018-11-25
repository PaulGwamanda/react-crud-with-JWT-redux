// lesson.route.js

const express = require('express');
const lessonRoutes = express.Router();

// Require Lesson model in our routes module
let Lesson = require('./lesson.model');

// Defined store route
lessonRoutes.route('/add').post(function (req, res) {
  let lesson = new Lesson(req.body);
  lesson.save()
    .then(lesson => {
      res.status(200).json({'lesson': 'lesson in added successfully'})
      this.setState({
        redirectTo: '/index'
      });
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
lessonRoutes.route('/').get(function (req, res) {
    Lesson.find(function(err, lessons){
    if(err){
      console.log(err);
    }
    else {
      res.json(lessons);
    }
  });
});

// Defined edit route
lessonRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Lesson.findById(id, function (err, lesson){
      res.json(lesson);
  });
});

// Defined view route
lessonRoutes.route('/view/:id').get(function (req, res) {
  let id = req.params.id;
  Lesson.findById(id, function (err, lesson){
      res.json(lesson);
  });
});

//  Defined update route
lessonRoutes.route('/update/:id').post(function (req, res) {
  Lesson.findById(req.params.id, function(err, lesson) {
    if (!lesson)
      res.status(404).send("data is not found");
    else {
      lesson.language = req.body.language;
      lesson.lesson = req.body.lesson;
      lesson.description = req.body.description;

        lesson.save().then(lesson => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
lessonRoutes.route('/delete/:id').get(function (req, res) {
    Lesson.findByIdAndRemove({_id: req.params.id}, function(err, lesson){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = lessonRoutes;