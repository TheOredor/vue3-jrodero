<script setup lang="ts">
import { TodoItemClass } from '../classes/TodoItemClass';

const props = defineProps({
    todo: {
        type: TodoItemClass,
        required: true,
    }
});
</script>

<template>
    <article>
        <input type="checkbox" name="todoDone" id="todoDone" :checked="props.todo.done">
        <label for="todoDone" :style="{ textDecoration: props.todo.done ? 'line-through' : 'none' }">
            {{ props.todo.task }}
        </label>
    </article>
</template>

<style scoped>
label {
    padding-left: 5px;
}
</style>