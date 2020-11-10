let todoList = []



function displayToDoList(todoList) {
  const list = document.getElementById('todolist');

  const isChecked = todo.checked ? 'done' : '';

  const node = document.createElement('li');

  node.setAttribute

}

// create new todo List object and push it into array
function addToDo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoList.push(todo);
  console.log(todoList)
}

// form submit
let form = document.getElementById('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  
  const input = document.getElementById('todoInput')
  const text = input.value.trim();
  if(text !== ''){
    addToDo(text);
    input.value = '';
    input.focus();
  }
})



function deleteToDo() {

}

function updateToDo(){

}