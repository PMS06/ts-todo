import { TodoManager } from "./todomanager";

const todoManager = new TodoManager();

todoManager.add({ id: 1, title: "Learn TypeScript", completed: false });
todoManager.add({ id: 2, title: "Try TypeScript", completed: false });
todoManager.add({ id: 3, title: "Master TypeScript", completed: false });

console.log('Initial todos:', todoManager.list());

todoManager.toggleComplete(2);

console.log('Todos after toggleComplete(2):', todoManager.list());