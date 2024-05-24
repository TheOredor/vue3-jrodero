<script setup lang="ts">
import { ref, type Ref } from 'vue';
import Todo from './components/Todo.vue';
import TodoHeader from './components/TodoHeader.vue';
import { TodoItemClass } from './components/classes/TodoItemClass';

const todos: Ref<Array<TodoItemClass>> = ref([
    // new TodoItemClass(1, 'task1 task1', true),
    // new TodoItemClass(2, 'task2 task2', false),
    // new TodoItemClass(3, 'task3 task3', false)
]);

function handleAddTask(todo: TodoItemClass) {
    todos.value.push(todo);
}

function handleChangeTaskStatus(todo: TodoItemClass) {
    todo.done = !todo.done;
}

function handleDeleteTask(idTodo: number) {
    const index = todos.value.findIndex(todo => todo.id === idTodo);
    todos.value.splice(index, 1);
}
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <TodoHeader title="Vue3 JRodero Todo list" />
        </div>
    </header>

    <main>
        <Todo :todos="todos" @add-task="handleAddTask" @change-task-status="handleChangeTaskStatus"
            @delete-task="handleDeleteTask"></Todo>
    </main>
</template>