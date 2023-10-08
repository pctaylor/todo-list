import { todoList } from './todo-list-logic.js';

// when add project button clicked, create a new form div under projects
// save with enter or button
export function addProject() {

    // Get the button to add a project and the project list where it'll be appended
    const projectDiv = document.getElementById('projectList');
    const addProjectButton = document.getElementById('addProjectButton');
    
    // if a user clicks '+'
    //append a textbox for the user to fill out in the project sidebar section
    //create a new textbook with project information below title
    addProjectButton.addEventListener('click', function() {
        console.log('button clicked');
        const form = document.createElement('form');
        const newProject = document.createElement('input');
        newProject.type = 'text';
        newProject.placeholder = 'Project Name...';
        form.appendChild(newProject);
        projectDiv.appendChild(form);

        // Add an event listener for the form's submit event
        form.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent the form from submitting in the traditional way
            const inputValue = newProject.value;  // Use newProject instead of newInput
            todoList.addProject(inputValue);  
            const projectContent = document.createElement('div');
            projectContent.textContent = inputValue;
            projectContent.className = "project";
            projectDiv.replaceChild(projectContent, form);
        });
    })
}