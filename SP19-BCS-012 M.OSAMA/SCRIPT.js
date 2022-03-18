const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");


function newTodo() {
  /*Add Logic for creating a new Todo Item. */
  var a = prompt('add new todo')
  var h3 = document.createElement('h3')
  var textAnswer = document.createTextNode(a)
  h3.setAttribute('id', 'a')
  h3.appendChild(textAnswer)
  document.getElementById('todo-list').appendChild(h3)


  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1;
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1;
  /*Below lines can be used to updated the data on frontend */
  //list.innerHTML = newItem;
  //itemCountSpan.innerHTML = +1;
  //uncheckedCountSpan.innerHTML = "";

}


function removeTodo() {
  /*Add Logic for removing an existing TODO Item */
  list.removeChild(list.lastElementChild);
  b = 0
  if (list.length > 0) {
    itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) - 1;
    uncheckedCountSpan.innerHTML = unchecked;
  }
  else {
    b--;
    itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) - 1;
    unchecked--;
    uncheckedCountSpan.innerHTML = unchecked;
  }
  /*Below lines can be used to updated the data on frontend */
  list.innerHTML = " ";
  itemCountSpan.innerHTML = "";
  uncheckedCountSpan.innerHTML = "";
}