# todo-list
https://www.theodinproject.com/lessons/node-path-javascript-todo-list

## Notes
- [x] Use webpack to organize
    - [x] install date-fns via npm for date/time manipulation
- [x] Each to-do should be an object, with properties of
    - [x] title
    - [x] description
    - [x] dueDate
    - [x] priority
    - [x] status (completed)
    - [ ] validate property inputs
- [x] To-dos should be organized under projects
    - [x] There should be a default project for to-dos w/o a project assigned
- [ ] Keep application logic and DOM manipulation in separate modules
    - [x] Application Logic
    - [ ] DOM manipulation
- [ ] User Interface reqs
    - [ ] View all projects
    - [ ] View all to-dos in a project
    - [ ] Expand a single to-do to see its details
    - [ ] Edit a single to-do's details
    - [ ] Delete a to-do
- [ ] Store/persist everything on user's computer using `localStorage` (part of the Web Storage API https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
    - [ ] Set up function for saving to `localStorage`
    - [ ] Set up function for retrieving from `localStorage`
        - [ ] Make sure the app doesn't crash if the data you want to retrieve from localStorage isn't there

