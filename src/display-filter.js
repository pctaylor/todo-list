import { todoList } from './todo-list-logic';
import { displayTodoList, clearTodos } from './display-todolist'


export function filterProjects() {
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
}