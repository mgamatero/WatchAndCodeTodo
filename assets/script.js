

var todoList = {
    todos: [],
    displayTodos: function () {
        // debugger;


        if (this.todos.length === 0) {
            console.log("empty list")
        }
        else {
            for (var i = 0; i < this.todos.length; i++) {

                if (this.todos[i].completed) {
                    console.log('(x)', this.todos[i].todoText)


                }
                else {
                    console.log('( )', this.todos[i].todoText)


                }

            }
        }

        //insert into DOM here

        return this.todos
    },
    addTodos: function (todoText) {
        // debugger;
        this.todos.push({
            todoText: todoText,
            completed: false
        })

        // this.displayTodos();
    },
    changeTodos: function (position, todoText) {
        this.todos[position].todoText = todoText;
        // this.displayTodos()
    },
    toggleCompleted: function (position) {
        if (position > this.todos.length - 1 || position < 0) {
            console.log('Out of range....Enter valid index')
        } else {
            this.todos[position].completed = !this.todos[position].completed;
        }
        // this.displayTodos()
    },
    deleteTodos: function (position) {
        this.todos.splice(position, 1)
        // this.displayTodos()
    },
    toggleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        if (totalTodos === completedTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        }
        else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        // this.displayTodos()
    }
}


var handlers = {
    displayTodos: function () {
        // todoList.displayTodos();
        view.displayTodos()
    },
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos()
    },
    addTodo: function () {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        if (addTodoTextInput.value === '') {
            alert('Enter Todo Item --- Cannot be empty')
        }
        else {
            todoList.addTodos(addTodoTextInput.value);
        }
        addTodoTextInput.value = '';
view.displayTodos();
    },
    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput')
        var changeTodoTextInput = document.getElementById('changeTodoTextInput')
        todoList.changeTodos(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
        changeTodoPositionInput.value = ''
        changeTodoTextInput.value = ''
        view.displayTodos()
    },
    deleteTodo: function () {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput')
        todoList.deleteTodos(deleteTodoPositionInput.valueAsNumber)
        deleteTodoPositionInput.value = ''
        view.displayTodos()
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput')
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber)
        toggleCompletedPositionInput.value = ''
        view.displayTodos()
    }
};


var view = {
    displayTodos: function () {
        var todosUl = document.querySelector('ul');
        var todoLi = document.createElement('li');
        todosUl.innerHTML = '';
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todoTextWithCompletion = '';

            if (todoList.todos[i].completed){
                todoTextWithCompletion = `(x) ${todoList.todos[i].todoText}}`
               
            } else {
                todoTextWithCompletion = `(  ) ${todoList.todos[i].todoText}`
               
            }

            todoLi.id = i;
            todoLi.textContent=todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi)
        }
    },
    createDeleteButton: function(){
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    }
};

var todosUl = document.querySelector('ul');
todosUl.addEventListener('click', function(event){
    console.log(event.target.parentNode.id)
})

// todoList.addTodos("Korean BBQ");
// todoList.addTodos("Kimchee");
// todoList.addTodos("Burgers");
// todoList.toggleCompleted(1);



