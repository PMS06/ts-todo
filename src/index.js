"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todomanager_1 = require("./todomanager");
const todoManager = new todomanager_1.TodoManager();
todoManager.add({ id: 1, title: "Learn TypeScript", completed: false });
todoManager.add({ id: 2, title: "Try TypeScript", completed: false });
todoManager.add({ id: 3, title: "Master TypeScript", completed: false });
console.log('Initial todos:', todoManager.list());
todoManager.toggleComplete(2);
console.log('Todos after toggleComplete(2):', todoManager.list());
