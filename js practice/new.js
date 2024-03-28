function result(){
console.log("button is clicked");
var input = document.getElementById("myinput");
var output = document.getElementById("output");
output.innerHTML = input.value;
console.log(input.value);
}