function toDoList() {
    var item = document.getElementById("guessNumber").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("h3");
    newItem.appendChild(text);
    document.getElementById("resultDaily").appendChild(newItem);
}