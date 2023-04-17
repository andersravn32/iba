<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <main>
    <Header />
    <router-view class="content" />
    <Footer />
  </main>
</template>

<style>
.content {
  @apply min-h-screen py-16;
}
</style>