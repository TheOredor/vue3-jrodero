<script setup lang="ts">
import TodoForm from './Todo/TodoForm.vue';
import TodoItem from './Todo/TodoItem.vue';
import { TodoItemClass } from './classes/TodoItemClass';

const props = defineProps({
    todos: Array<TodoItemClass>
});

const emit = defineEmits<{
    (e: 'addTask', payload: TodoItemClass): void
}>();

function handleAddTask(todo: TodoItemClass) {
    emit('addTask', todo);
}
</script>

<template>
    <TodoForm @add-task="handleAddTask"></TodoForm>
    <hr style="margin: 1rem">
    <TodoItem v-for="todo in props.todos" :todo="todo" />
</template>