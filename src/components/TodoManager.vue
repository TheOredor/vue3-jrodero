<script setup lang="ts">
import TodoForm from './Todo/TodoForm.vue';
import TodoItem from './Todo/TodoItem.vue';
// import { TodoItemClass } from './components/classes/TodoItemClass';
import { type TodoItemIterface } from './classes/TodoItemClass';

const props = defineProps({
    todos: Array<TodoItemIterface>
});

const emit = defineEmits<{
    (e: 'addTask', payload: TodoItemIterface): void,
    (e: 'changeTaskStatus', payload: TodoItemIterface): void
    (e: 'deleteTask', payload: number): void,
}>();

function handleAddTask(todo: TodoItemIterface) {
    emit('addTask', todo);
}

function handleChangeTaskStatus(todo: TodoItemIterface) {
    emit('changeTaskStatus', todo);
}

function handleDeleteTask(idTodo: number) {
    emit('deleteTask', idTodo);
}
</script>

<template>
    <TodoForm @add-task="handleAddTask"></TodoForm>
    <hr style="margin: 1rem">
    <TodoItem v-for="todo in props.todos" :todo="todo" @change-task-status="handleChangeTaskStatus"
        @delete-task="handleDeleteTask" />
</template>