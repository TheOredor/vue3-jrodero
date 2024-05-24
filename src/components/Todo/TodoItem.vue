<script setup lang="ts">
import { TodoItemClass } from '../classes/TodoItemClass';

const props = defineProps({
    todo: {
        type: TodoItemClass,
        required: true,
    }
});

const emit = defineEmits<{
    (e: 'deleteTask', payload: Number): void
    (e: 'changeTaskStatus', payload: TodoItemClass): void
}>();

function changeTask(e: Event) {
    e.preventDefault();
    emit('changeTaskStatus', props.todo);
}

function deleteTask(e: Event) {
    e.preventDefault();
    emit('deleteTask', props.todo.id);
}
</script>

<template>
    <article>
        <input type="checkbox" name="todoDone" id="todoDone" :checked="props.todo.done" @change="changeTask">
        <label for="todoDone" :style="{ textDecoration: props.todo.done ? 'line-through' : 'none' }">
            {{ props.todo.task }}
        </label>
        <button type="button" @click="deleteTask">Delete</button>
    </article>
</template>

<style scoped>
label {
    padding-left: 5px;
}
</style>