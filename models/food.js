var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  yumminess: {
    type: String,
    required: true
  }
})

var Foods = mongoose.model("Foods", FoodSchema);

module.exports = Foods;