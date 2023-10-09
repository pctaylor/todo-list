import { todoList } from './todo-list-logic';

export function addToDoModal(parentDiv) {

    // Create the form element
    const form = document.createElement('form');
    form.id = 'newTodoForm';

    // Create and append the Title input
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title:';
    form.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'newTodoTitle';
    titleInput.name = 'title';
    titleInput.required = true;
    form.appendChild(titleInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    // Create and append the Description input
    const descLabel = document.createElement('label');
    descLabel.setAttribute('for', 'description');
    descLabel.textContent = 'Description:';
    form.appendChild(descLabel);

    const descInput = document.createElement('input');
    descInput.type = 'text';
    descInput.id = 'newTodoDescription';
    descInput.name = 'description';
    descInput.required = true;
    form.appendChild(descInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    // Create and append the Due Date input
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'dueDate');
    dateLabel.textContent = 'Due Date:';
    form.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = 'newTodoDueDate';
    dateInput.name = 'dueDate';
    form.appendChild(dateInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    // Create and append the Priority dropdown
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Priority:';
    form.appendChild(priorityLabel);

    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'newTodoPriority';
    prioritySelect.name = 'priority';

    const priorities = ['High', 'Standard', 'Low'];
    priorities.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        if (priority === 'Standard') option.selected = true;
        prioritySelect.appendChild(option);
    });
    form.appendChild(prioritySelect);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    // Create and append the Status dropdown
    const statusLabel = document.createElement('label');
    statusLabel.setAttribute('for', 'status');
    statusLabel.textContent = 'Status:';
    form.appendChild(statusLabel);

    const statusSelect = document.createElement('select');
    statusSelect.id = 'newTodoStatus';
    statusSelect.name = 'status';

    const statuses = ['Not Started', 'In Progress', 'Blocked', 'Done'];
    statuses.forEach(status => {
        const option = document.createElement('option');
        option.value = status;
        option.textContent = status;
        if (status === 'Not Started') option.selected = true;
        statusSelect.appendChild(option);
    });
    form.appendChild(statusSelect);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    // Create and append the Submit button
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    form.appendChild(submitButton);

    // Append the form to the target parent element
    parentDiv.appendChild(form);

    // When a user 'submits' that creates a new ToDo object
    form.addEventListener('submit', function(event) {

        // Prevent the form from submitting in the traditional way
        event.preventDefault();
        console.log("the form has been submitted");

        // take out the values from the form
        const titleValue = newTodoTitle.value;
        const descValue = newTodoDescription.value;
        const dateValue = newTodoDueDate.value;
        const priorityValue = newTodoPriority.value;
        const statusValue = newTodoStatus.value;
    
        // Make a new to do for the to do list
        todoList.addTodo(
            undefined, 
            titleValue, 
            descValue, 
            dateValue, 
            priorityValue, 
            statusValue);
            
        //return False so I know to close the modal
        return false    
        });
};