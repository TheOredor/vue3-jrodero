<script setup lang="ts">

import TodoItem from './Todo/TodoItem.vue'
import TodoForm from './Todo/TodoForm.vue'
import type { TodoItemClass } from './classes/TodoItemClass.ts';


defineProps<{
    todos: Array<TodoItemClass>
}>()

const emit = defineEmits({
    addTask: (payload: TodoItemClass) => {
        return payload === undefined;
    }
});

function handleAddTask(todo: TodoItemClass) {
    emit('addTask', todo);
}
</script>

<template>
    <TodoForm @add-task="handleAddTask"></TodoForm>
    <hr style="margin: 1rem">
    <div v-for="todo in todos">
        <TodoItem :todo="todo"></TodoItem>
    </div>
</template>