<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <div>
        <h1 class="green">{{ title }}</h1>
        <h3>
            This is a proyect for learn Vue3.
        </h3>
    </div>
</template>