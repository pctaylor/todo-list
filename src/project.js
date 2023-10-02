import { startOfDay } from 'date-fns';

export class Project {
    constructor(name, description = '') {
        this.name = name;
        this.description = description;
        this.creationDate = startOfDay(new Date());
        this.items = {};
    }

    // Add items to the project
    addItem(type, item) {
        //check whether this item type has been added before. If it has, add it to
        // the list. Otherwise, create a new type array for it.
        if (this.items.hasOwnProperty(type)) {
            this.items[type].push(item);
        } else {
            this.items[type] = [item];
        }
    }
}