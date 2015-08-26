function getFoods() {
  $.get("/foods", function(res){ 
    console.log(res);
  });
}