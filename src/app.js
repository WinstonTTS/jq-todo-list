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


$('#myButton').on('click', function(event){
	//Update button html
	$(this).html("button clicked");

	//Create a new element
	var newEl = $('<a>look at me!</a>');

	//Append new element
	$('#someOtherElement').append(newEl);

	//Add an attribute
	$('#someOtherElement').append(newEl).attr({'href' : 'http://techtalentsouth.com'})

	//Remove it
	newEl.remove();

})