window.onload = function(){
    var btn = document.getElementById("btnAdd");
    btn.onclick = newToDo;
};
function newToDo(){
var myinput = document.getElementById("myinput").value;
var todos = document.getElementById("todos");
var newtextnode = document.createTextNode(myinput);
var newLi = document.createElement("li");
//for delete
var deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.onclick = handleDelete;

newLi.appendChild(newtextnode);
//for delete
newLi.appendChild(deleteBtn);
todos.appendChild(newLi);

}
function handleDelete(e){
    var tag = e.target;
    var li = tag.parentNode;
    li.parentNode.removeChild(li);
}

