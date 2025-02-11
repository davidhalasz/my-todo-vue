<template>
    
        <h1 class="py-4 text-2xl font-bold">TODO list</h1>
        <ul>
            <li class="flex gap-4 pt-2" v-for="(todo, index) in todoStore.todos" :key="index">
                <input type="checkbox" @change="toggleTodo(index)" />
                <p>{{ todo.text }}</p>
                <button class="px-3 py-1 bg-red-500 rounded text-white" @click="removeTodo(index)">remove</button>
            </li>
        </ul>

</template>

<script>
    import { useTodoStore } from '@/stores/todoStore';2
    export default {
        setup() {
            const todoStore = useTodoStore();

            const removeTodo = (index) => {
                todoStore.removeTodo(index);
            };

            const toggleTodo = (index) => {
                todoStore.toggleTodo(index);
            };

            return { removeTodo, toggleTodo, todoStore };
        }
    }
</script>