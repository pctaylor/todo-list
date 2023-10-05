import './style.css'; 
import { Todo } from './todo';
import { Project } from './project';
import { TodoList } from './todo-list-logic'

const todoList = new TodoList();
console.log(todoList);
todoList.addProject("Project X", "New Product Release for Q4", Date(2023, 9, 31), "High", "Not Started")
todoList.addTodo("Project X" , "Estimate budget required");
todoList.addTodo(undefined, "Get haircut");