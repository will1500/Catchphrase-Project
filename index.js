// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    _ = require("underscore"),
    views = path.join(process.cwd(), "views/");

// CONFIG //
// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
// body parser config to accept all datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// DATA //
var foods =[
  {_id: 0, name: "DOM", yumminess: "Document Object Model"},
  {_id: 1, name: "HTTP", yumminess: "Hypertext Transfer Protocol Secure"},
  {_id: 2, name: "Callback FUNCTION", yumminess: "executable code passed as argument to other code"}];

 

// ROUTES //
app.get("/", function (req, res){
  // render index.html
  res.sendFile(path.join(views + 'index.html'));
});

// foods index path
app.get("/foods", function (req, res){
  // render foods index as JSON
  res.send(foods);
});

app.post("/foods", function (req, res){
  var newFood = req.body;
  // add a unique id
  newFood._id = foods[foods.length - 1]._id + 1;
  // add new food to DB (array, really...)
  phrases.push(newFood);
  // send a response with newly created object
  res.send(newFood);
});

// app.delete("/phrases/:id", function (req, res){
//   // set the value of the id
//   var targetId = parseInt(req.params.id, 10);
//   // find item in the array matching the id
//   var targetItem = _.findWhere(foods, {_id: targetId});
//   // get the index of the found item
//   var index = foods.indexOf(targetItem);
//   // remove the item at that index, only remove 1 item
//   foods.splice(index, 1);
//   // render deleted object
//   res.send(targetItem);
// });

app.listen(3000, function (){
  console.log("listening on port 3000");
});
