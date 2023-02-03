var button = document.getElementById("enter");
var itIsDone = document.getElementById("itsDone");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var deleteButton = document.createElement("button");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.appendChild(deleteButton);
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete");
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleDone(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
}

function deleteItem(event) {
  if (event.target.className === "delete") {
    event.target.parentElement.remove();
  }
}

function addDeleteButton() {
  for (var i = 0; i < ul.children.length; i++) {
    var li = ul.children[i];
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    li.appendChild(deleteButton);
    deleteButton.innerHTML = "Delete";
  }
}

function handleClick(event) {
  toggleDone(event);
  deleteItem(event);
}

addDeleteButton();
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", handleClick);
