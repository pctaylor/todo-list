import * as dateFns from 'date-fns';
import { Todo } from './todo';
import { Project } from './project';

const testTodo1 = new Todo('test todo #1', 'this is a test todo');
const testTodo2 = new Todo('test todo #2', 'this is a test todo');
console.log(testTodo1);
console.log(testTodo2);

const  testProject = new Project('test project', 'this is a test project');
testProject.addAttribute(testTodo1);
testProject.addAttribute(testTodo2);
console.log(testProject);
