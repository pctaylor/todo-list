import { todoList } from './todo-list-logic';
import { addToDoModal } from './add-todo-modal';

// When a To Do Add is triggered, display a modal on the page to fill out the information
// When user saves, append to project
export function addToDo() {

    //Get divs for button and table headings
    const content = document.getElementById('content');
    const addTodoButton = document.getElementById('addTodoButton');
    const priorityHeader = document.getElementById('priority');
    const titleHeader = document.getElementById('title');
    const descriptionHeader = document.getElementById('description');
    const dueDateHeader = document.getElementById('dueDate');
    const statusHeader = document.getElementById('status');

    //Click event listener, modal trigger
    addTodoButton.addEventListener('click', function() {
        console.log('button clicked');

        //Create overall modal body
        const todoModal = document.createElement('div');
        todoModal.id = 'TodoModal';

        //Create modal content
        const modalContent = document.createElement('div');
        modalContent.id = "modalContent";
        modalContent.innerHTML = 'Add New To Do';
        todoModal.appendChild(modalContent);

        // Craete modal 'X' close button
        const modalCloseBtn = document.createElement('span')
        modalCloseBtn.id = "modalCloseBtn"
        modalCloseBtn.innerHTML = "X"
        modalContent.appendChild(modalCloseBtn);

        // Close the modal by touching the close button
        modalCloseBtn.addEventListener('click', function() {
            todoModal.style.display = 'none';
            todoModal.remove(); // Remove the modal from the DOM
        });
        
        // Close the modal when clicking outside of it
        window.addEventListener('click', function(event) {
            if (event.target === todoModal) {
                todoModal.style.display = 'none';
                todoModal.remove(); 
            }
        });

        // add the form for new Todos
        addToDoModal(modalContent)
        
        // when the form has been submitted
        const formElement = modalContent.querySelector('form');
        formElement.addEventListener('formSubmitted', function() {
            console.log("the form has been submitted");
            todoModal.style.display = 'none';
            todoModal.remove();
        });

        //append the new modal to the content area and display it
        content.appendChild(todoModal);
        todoModal.style.display = 'block';

    });
};
