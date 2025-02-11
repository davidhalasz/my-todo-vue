import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
    state: () => ({
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }),
    actions: {
      addTodo(text) {
        this.todos.push({ text, completed: true });
        this.saveTodos();
      },
      removeTodo(index) {
        this.todos.splice(index, 1);
        this.saveTodos();
      },
      toggleTodo(index) {
        this.todos[index].completed = !this.todos[index].completed;
        this.saveTodos();
      },
      saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
        console.log(this.todos);
      }
    }
  });
  
  