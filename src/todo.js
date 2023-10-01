import { format, isPast, differenceInDays, startOfDay } from 'date-fns';

export class Todo {
    constructor(title, description = '', dueDate = new Date(), priority = 'Standard', status = 'Not Started') {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
        this.status = status;
    }

    // Format due date
    getFormattedDueDate() {
        return format(this.dueDate, 'MMMM dd, yyyy')
    }

    // Recognize when an item isn't due, is nearly due, is past due
    isOverdue() {
        return isPast(this.dueDate) && this.status!=='Complete';
    }
    daysUntilOverdue() {
        const today = startOfDay(new Date()); // Get the start of the current day
        const daysUntilOverdue = differenceInDays(this.dueDate, today);
        return daysUntilOverdue;
    }

    // Changing properties
    changeTitle(newTitle) {
        this.title = newTitle;
    }
    changeDescription(newDescription) {
        this.description = newDescription;
    }
    changeDueDate(newDueDate) {
        this.dueDate = new Date(newDueDate);
    }
    changePriority(newPriority) {
        this.priority = newPriority;
    }
    changeStatus(newStatus) {
        this.status = newStatus;
    }
}
