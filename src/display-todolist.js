import { todoList } from './todo-list-logic';


export function displayTodoList(list) {
    
    // Get all the divs for the to do list attributes to display
    const priority = document.getElementById('todoListPriority');
    const title = document.getElementById('todoListTitle');
    const description = document.getElementById('todoListDescription');
    const dueDate = document.getElementById('todoListDueDate');
    const status = document.getElementById('todoListStatus');

    // Loop through to do list and display all relevant to dos
    todoList.getAllTodos().forEach(function(todo) {

        //Priority
        const priorityDiv = document.createElement('div');
        priorityDiv.className = "todoCell";
        priorityDiv.innerHTML = todo["priority"];
        priority.appendChild(priorityDiv);

        //Title
        const titleDiv = document.createElement('div');
        titleDiv.className = "todoCell";
        titleDiv.innerHTML = todo["title"];
        title.appendChild(titleDiv);

        //Description
        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = "todoCell";
        descriptionDiv.innerHTML = todo["description"];
        description.appendChild(descriptionDiv);

        //Due Date
        const dueDateDiv = document.createElement('div');
        dueDateDiv.className = "todoCell";
        dueDateDiv.innerHTML = todo["dueDate"]; // Assuming dueDate is stored as a string. If it's a Date object, you might need to format it.
        dueDate.appendChild(dueDateDiv);

        //Status
        const statusDiv = document.createElement('div');
        statusDiv.className = "todoCell";
        statusDiv.innerHTML = todo["status"];
        status.appendChild(statusDiv);

    });
};