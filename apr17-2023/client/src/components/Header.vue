<script setup>

import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
    <header class="bg-slate-300 p-4 grid place-items-center fixed top-0 left-0 right-0">
        <h2 class="text-2xl">{{ router.currentRoute.value.name }}</h2>
    </header>
</template>