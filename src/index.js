import * as dateFns from 'date-fns';
import { Todo } from './todo';
import { Project } from './project';

const testTodo1 = new Todo('test todo #1', 'this is a test todo');
const testTodo2 = new Todo('test todo #2', 'this is a test todo');
const  testProject = new Project('test project', 'this is a test project');
testProject.addItem("todo", testTodo1);
testProject.addItem("todo", testTodo2);
console.log(testProject.items.todo.map(todo => todo.title))
