<template>
    <div class="flex items-center gap-2 mb-4">
        <input class="grow border rounded p-1 placeholder:text-gray-500" v-model="newTodo" placeholder="Add a new task" />
        <button @click="addNewTodo" class="flex-none px-3 py-1 bg-green-500 rounded text-black">Add</button>
    </div>
</template>


<script>
    import { ref } from 'vue';
    import { useTodoStore } from '@/stores/todoStore';
    import List from '../components/List.vue';

    export default {
        components: {
            List,
        },
        setup() {
            const todoStore = useTodoStore();
            const newTodo = ref('');

            const addNewTodo = () => {
                if (newTodo.value.trim()) {
                    todoStore.addTodo(newTodo.value.trim());
                    newTodo.value = '';
                }
            };

            return { newTodo, addNewTodo, todoStore };
        }
    }
</script>