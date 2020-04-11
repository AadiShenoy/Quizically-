function generateapi()
{
var x1 = document.getElementById("category");
var category = x1.options[x1.selectedIndex].value;
var y1 = document.getElementById("level");
var level=y1.options[y1.selectedIndex].value;
console.log(category);
console.log(level);
var api="https://opentdb.com/api.php?amount=10&category="+category+"&difficulty="+level+"&type=multiple";
 localStorage.setItem("api", JSON.stringify(api));
// console.log(api);
 return window.location.assign("game.html");

}

