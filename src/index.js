import './style.css'; 
import { todoList } from './todo-list-logic'
import { addProject } from './add-project'


console.log(todoList);
addProject();
todoList.addProject("Project X", "New Product Release for Q4", Date(2023, 9, 31), "High", "Not Started")
todoList.addTodo("Project X" , "Estimate budget required");
todoList.addTodo(undefined, "Get haircut");