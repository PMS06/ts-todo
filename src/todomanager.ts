import { Todo } from './todo';

export class TodoManager {
    private todos: Todo[] = [];

    public add(todo: Todo): void {
        this.todos.push(todo);
    }

    public remove(id: number): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    public toggleComplete(id: number): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }

    public list(): Todo[] {
        return this.todos;
    }
}