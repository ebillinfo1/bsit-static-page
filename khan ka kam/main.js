function btnclicked(){
console.log("bhai meri java script kam kr rhe hain na?");
}
var x = 10;
var y = 20;
console.log(x*y);

//how to write function in js

function sum(a,b){
    return a+b;
}
console.log(sum(x,y));

// we assign function to variable

var mysum = sum;
 console.log(mysum);

 function update(){
    console.log('update results')
    var input = document.getElementById("myinput");
    var output = document.getElementById("output");
    output.innerHTML =  input.value;
 }
