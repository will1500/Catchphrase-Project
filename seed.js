var db = require("./models");

var foods_list =[
  {name: "Tiramisu", yumminess: "quite"},
  {name: "Green Eggs & Ham", yumminess: "sure"},
  {name: "aardvark", yumminess: "depending"},
  {name: "Foie Gras", yumminess: "omg"},
  {name: "Kale", yumminess: "meh"}
];

// var newFood = { name: "apple", yumminess: "tastes like worms!!"};
// db.Food.update({ _id: "55e3254b9e36e3481416749d"}, newFood, {}, function(err, success) {
//     if(err){ return console.log(err);}
//     console.log("SUCCESS!!!!!");
//     return console.log(success);
// });




  db.Foods.create(foods_list, function(err, foods){
    if (err) { return console.log(err) };
    console.log("created", foods.length, "foods")
    // process.exit();
  });

