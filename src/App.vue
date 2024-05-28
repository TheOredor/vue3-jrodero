<script setup lang="ts">
import { ref, type Ref, computed, type ComputedRef, watch } from 'vue';
import TodoManager from './components/TodoManager.vue';
import HeaderApp from './components/Header.vue';
import { TodoItemClass } from './components/classes/TodoItemClass';

const todos: Ref<Array<TodoItemClass>> = ref(
    JSON.parse(localStorage.getItem('todoList') || '[]').map((a: TodoItemClass) => new TodoItemClass(a.id, a.task, a.done))
);
const title: Ref<string> = ref('Vue3 JRodero Todo list');

const completedTodos: ComputedRef<number> = computed(() => {
    return todos.value.filter(todo => todo.done).length;
});

watch(todos.value, () => {
    localStorage.setItem('todoList', JSON.stringify(todos.value));

    if (todos.value.length == 0 || (todos.value.length == completedTodos.value)) {
        document.title = 'Vite App';
    } else {
        document.title = `(${todos.value.length - completedTodos.value}) Vite App`;
    }
}, { deep: true, immediate: true }
);

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
            <HeaderApp :title="title" :completedTodos="completedTodos" :todosLength="todos.length" />
        </div>
    </header>

    <main>
        <TodoManager :todos="todos" @add-task="handleAddTask" @change-task-status="handleChangeTaskStatus"
            @delete-task="handleDeleteTask"></TodoManager>
    </main>
</template>