export class TodoItemClass implements TodoItemIterface {
    id: number;
    task: string;
    done: boolean;

    constructor(id: number, task: string, done: boolean) {
        this.id = id;
        this.task = task;
        this.done = done;
    }
}

export interface TodoItemIterface {
    id: number;
    task: string;
    done: boolean;
}