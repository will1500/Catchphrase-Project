var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bite_me_app");

module.exports.Foods = require("./foods")