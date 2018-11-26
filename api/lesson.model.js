// Lesson.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Lesson
let Lesson = new Schema({
  language: {
    type: String
  },
  lesson: {
    type: String
  },
  description: {
    type: String
  }
},{
    collection: 'lesson'
});

module.exports = mongoose.model('Lesson', Lesson);