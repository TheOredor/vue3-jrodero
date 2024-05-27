<script setup lang="ts">
import type { TodoItemClass } from './classes/TodoItemClass';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    completedTodos: {
        type: Number,
        required: true,
    },
    todosLength: {
        type: Number,
        required: true
    },
});
</script>

<template>
    <div>
        <h1 class="green">{{ props.title }}</h1>
        <small>
            This is a proyect for learn Vue3.
        </small>
        <ul>
            <li v-if="props.todosLength == 0">You dont have task to make.</li>
            <li v-else-if="props.todosLength == 1 && props.completedTodos == 0">
                You have not completed your task.
            </li>
            <li v-else-if="props.todosLength == 1">
                You have completed your task
            </li>
            <li v-else-if="props.todosLength == props.completedTodos">You completed all your tasks.</li>
            <li v-else>You have {{ props.completedTodos }} tasks completed out of {{ props.todosLength }} tasks.</li>
        </ul>
        <!-- <pre>{{ props }}</pre> -->
    </div>
</template>