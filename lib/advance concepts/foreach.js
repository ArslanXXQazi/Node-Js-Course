
let food = ["food1","food2","food3","food4","food5"];

food.forEach(function(food,ind){
  console.log(food,ind);
});

function fetchData (data)
{
  console.log("Received :",data);
}