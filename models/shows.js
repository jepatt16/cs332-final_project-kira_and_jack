// Model for the course collection.
const mongoose = require('mongoose');

// Define the schema
const Show = new mongoose.Schema({
  date: Date,
  performers: {type: String, maxlength: 240, trim: true},
  description: {type: String, maxlength: 1000, trim: true},
});

// Export the model
module.exports = mongoose.model('show', Show);