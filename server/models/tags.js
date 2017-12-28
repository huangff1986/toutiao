const mongoose = require('mongoose') 
const tagSchema = require('../schemas/tags') 

module.exports = mongoose.model('Tag', tagSchema);