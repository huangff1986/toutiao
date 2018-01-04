const mongoose = require('mongoose'); 

module.exports = new mongoose.Schema({
  title:String,
  
  static:Boolean,
  active:Boolean,
})