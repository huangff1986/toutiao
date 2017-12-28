const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  title:String,
  content:String,
  viewCount:Number,
  commentCount:Number,
  time:String,
  coverImg:String,
  author:String,
  tags:Array,
  desc:String
})