['wash the dogs'].forEach(addTodoToDOM)

$('#addTodo').click(addTodo)

function addTodo() {
  const newTodoInput = $('#newTodo')

  addTodoToDOM(newTodoInput.val())

  newTodoInput.val('')
}

function addTodoToDOM(todo) {
  const li = $('<li></li>').html(todo).click(toggleComplete).dblclick(removeTodo)

  $('#todoList').append(li)
}

function toggleComplete() {
  this.classList.toggle('completed')
}

function removeTodo() {
  this.remove()
}
