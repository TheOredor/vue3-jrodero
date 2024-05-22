export class TodoItemClass {
    id: Number;
    task: String;
    done: Boolean;

    constructor(id: Number, task: String, done: Boolean) {
        this.id = id;
        this.task = task;
        this.done = done;
    }
}