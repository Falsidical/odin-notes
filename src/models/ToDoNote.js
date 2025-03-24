import { SimpleNote } from './SimpleNote';

export class ToDoNote extends SimpleNote {
  constructor(title, content, dueDate, priority) {
    super(title, content);
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
