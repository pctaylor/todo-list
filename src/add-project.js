import { TodoList } from './todo-list-logic.js';

// when add project button clicked, create a new form div under projects
// save with enter or button
export function addProjectFE() {

    // Get the button to add a project and the project list where it'll be appended
    const projectDiv = document.getElementByID('projectList');
    const addProjectButton = document.getElementByID('addProjectButton');
    
    // if a user clicks '+', append a textbox for the user to fill out
    addProjectButton.addEventListener('click', function() {
        const form = document.createElement('form');
        const newProject = document.createElement('input');
        newProject.type = 'text';
        newProject.placeholder = 'Project Name...';
        form.appendChild('newProject');
        projectDiv.appendChild(newProject);

        // Add an event listener for the form's submit event
        form.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent the form from submitting in the traditional way
            const inputValue = newInput.value;
            todoList.addProject(inputValue);  // Do something with the input value
        });

    })
}