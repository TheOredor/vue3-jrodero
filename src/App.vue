<script setup lang="ts">
import { ref, type Ref, computed, type ComputedRef } from 'vue';
import TodoManager from './components/TodoManager.vue';
import HeaderApp from './components/Header.vue';
import { TodoItemClass } from './components/classes/TodoItemClass';

const todos: Ref<Array<TodoItemClass>> = ref([]);
const title: Ref<string> = ref('Vue3 JRodero Todo list');
const completeTodos: ComputedRef<number> = computed(() => {
    return todos.value.filter(todo => todo.done).length;
});

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
            <HeaderApp :title="title" :completeTodos="completeTodos" :todosLength="todos.length" />
        </div>
    </header>

    <main>
        <TodoManager :todos="todos" @add-task="handleAddTask" @change-task-status="handleChangeTaskStatus"
            @delete-task="handleDeleteTask"></TodoManager>
    </main>
</template>