<template>
    <div class="flex flex-col w-full justify-center  mx-auto p-4">
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
