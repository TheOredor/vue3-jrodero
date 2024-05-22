<script setup lang="ts">
import type { TodoItemClass } from '../classes/TodoItemClass';
import { ref, type Ref } from 'vue';

const newTask: Ref<string> = ref('');

const emit = defineEmits({
    addTask: (payload: TodoItemClass) => {
        return payload === undefined;
    }
})

function createNewTodo(e: Event) {
    e.preventDefault();

    const newTodo: TodoItemClass = {
        id: Date.now(),
        task: newTask.value,
        done: false
    };
    emit('addTask', newTodo);
    newTask.value = '';
}
</script>

<template>
    <div>
        <form @submit="e => createNewTodo(e)">
            <label for="newTodo">New Todo</label>
            <input type="text" class="input" name="newTodo" id="newTodo" v-model="newTask">
        </form>
    </div>
</template>

<style scoped>
label {
    font-weight: bold;
    font-size: 1.2rem;
}

input {
    width: 100%;
    padding: 0.2rem 0.4rem;
    border: solid 0.1rem var(--color-border);
    border-radius: 0.3rem;
    background-color: var(--color-background-soft);
    font-size: 1rem;
    color: var(--color-text);
}
</style>