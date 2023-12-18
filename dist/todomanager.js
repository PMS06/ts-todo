"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoManager = void 0;
class TodoManager {
    constructor() {
        this.todos = [];
    }
    add(todo) {
        this.todos.push(todo);
    }
    remove(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
    toggleComplete(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }
    list() {
        return this.todos;
    }
}
exports.TodoManager = TodoManager;
