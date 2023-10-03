import * as dateFns from 'date-fns';
import { Todo } from './todo';
import { Project } from './project';

export class TodoList {

    // All the to do list needs is a default and a list of the projects
    constructor() {
        this.defaultProject = new Project("Default");
        this.projects = [this.defaultProject];
    }

    // Create a new project and add it to the list
    addProject(name, description = '') {
        const newProject = new Project(name, description);
        this.projects.push(newProject);
        return newProject
    } 

    // Get a project by name
    getProject(name) {
        return this.projects.find(project => project.name === name);
    }

    // Create a to do
    addTodo(projectName = this.defaultProject, title, description = '', dueDate = new Date(), priority = 'Standard', status = 'Not Started') {
        const newTodo = new Todo(title, description, dueDate, priority, status);
        const project = this.getProject(projectName);
        if (project) {
            project.addItem('todo', newTodo);
        } else {
            this.defaultProject.addItem('todo', newTodo)
        }
    }

    // Get all todos from a specific project
    getTodosFromProject(projectName) {
        const project = this.getProject(projectName);
        return project ? project.items.todo : [];
    }
}
