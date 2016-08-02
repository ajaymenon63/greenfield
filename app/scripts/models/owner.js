var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OwnerSchema = new Schema({
  name: String,
  last: String,
  age: Number,
  location: String,
  favorite: String,
  numberOfBreeds: String,
  numberOfDogs: String
});

module.exports = mongoose.model('Owner', OwnerSchema);