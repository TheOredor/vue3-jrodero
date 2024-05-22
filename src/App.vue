<script setup lang="ts">
import Todos from './components/Todos.vue'
import TodoHeader from './components/TodoHeader.vue';
import type { TodoItemClass } from './components/classes/TodoItemClass';

const todos: Array<TodoItemClass> = [
    { id: 1, task: 'task1 task1', done: false },
    { id: 2, task: 'task2 task2', done: true },
    { id: 3, task: 'task3 task3', done: false }
];

function handleAddTask(todo: TodoItemClass) {
    console.log(todo);
    todos.push(todo);
    console.log(todos);
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
        <Todos :todos="todos" @add-task="handleAddTask"></Todos>
    </main>
</template>