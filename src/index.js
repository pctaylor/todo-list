import './style.css'; 
import { todoList } from './todo-list-logic';
import { addProject } from './add-project';
import { addToDo } from './add-todo';
import { displayTodoList, clearTodos } from './display-todolist'


// Add ability to create projects and todos
addProject();
addToDo();

//Seed an initial project
todoList.addProject("Project X", "New Product Release for Q4", Date(2023, 9, 31), "High", "Not Started")

//Seed initial todos
todoList.addTodo("Project X" , "Estimate budget required");
todoList.addTodo("Project X" , "Deliver RFP to mayor's office");
todoList.addTodo("Project X" , "Research academic literature");
todoList.addTodo(undefined, "Get haircut");
todoList.addTodo(undefined, "Wash dog");
console.log(todoList.getAllTodos());
/*
console.log(todoList.getTodosFromProject('Project X'));
console.log(todoList.getTodosFromProject('Default'));
*/

//Display
clearTodos();
displayTodoList();

const allProjectsDiv = document.getElementById('allProjects');
const uncategorizedProjectsDiv = document.getElementById('uncategorizedProjects');
uncategorizedProjectsDiv.addEventListener('click', function() {
    clearTodos();
    displayTodoList("uncategorized");
});
allProjectsDiv.addEventListener('click', function() {
    clearTodos();
    displayTodoList();
});


