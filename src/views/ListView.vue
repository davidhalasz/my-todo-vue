<template>
    <div class="flex flex-col container mx-auto p-4">
        <AddInput />

        <List />
    </div>
</template>

<script>
    import AddInput from '../components/AddInput.vue';
    import List from '../components/List.vue';

    export default {
        components: {
            List,
            AddInput
        },
    }
</script>
