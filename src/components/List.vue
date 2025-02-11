<template>
    <div>
        <input type="text" v-model="newTodo" placeholder="Add a new todo">


        <h1>TODO list</h1>
        <ul>
            <li v-for="(todo, index) in todoStore.todos" :key="index">
                <input type="checkbox" v-model="todo.completed" @change="toggleTodo(index)" />
                <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
                <button @click="removeTodo(index)">X</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { ref } from 'vue';


    export default {
        setup() {
            const todoStore = useTodoStore();
            const newTodo = ref('');

            const addNewTodo = () => {
                if (newTodo.value.trim()) {
                    todoStore.addTodo(newTodo.value.trim());
                    newTodo.value = '';
                }
            };

            const removeTodo = (index) => {
                todoStore.removeTodo(index);
            };

            const toggleTodo = (index) => {
                todoStore.toggleTodo(index);
            };

            return { newTodo, addNewTodo, removeTodo, toggleTodo, todoStore };
        }
    };

</script>

<style>
@media (min-width: 1024px) {
  .list {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>