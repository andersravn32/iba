<script setup>
import { onMounted, ref } from 'vue';

const ready = ref(false);
const word = ref(null);
const chars = ref([])
const guess = ref("");
const guesses = ref(0);

onMounted(async () => {
  // Fetch word from local API
  word.value = await fetch("http://127.0.0.1:3000").then(res => res.json());

  chars.value = [...word.value].map((char) => {
    return {
      key: char,
      done: false
    }
  })

  // Set ready state
  ready.value = true;
})

const validate = () => {
  [...guess.value].forEach((char) => {
    chars.value.forEach((charInt, index) => {
      if (charInt.key == char) {
        chars.value[index].done = true;
      }
    })
  })

  guess.value = "";

  guesses.value++;
}
</script>

<template>
  <div class="h-screen grid place-items-center">
    <div class="game">
      <ul class="characters">
        <li v-for="(char, index) in chars" :key="index">
          <span v-if="!char.done">*</span>
          <span v-if="char.done">{{ char.key }}</span>
        </li>
      </ul>

      <form @submit.prevent="validate" class="w-full max-w-lg flex flex-col space-y-4">
        <input class="bg-zinc-200 px-6 py-2 rounded" type="text" placeholder="Indtast et gæt" v-model="guess">
        <button class="bg-sky-500 px-6 py-2 rounded text-white">Gæt</button>
      </form>

      <p class="text-center">Du har brugt {{ guesses }} forsøg.</p>
    </div>

  </div>
</template>

<style>
* {
  @apply font-mono;
}

.game {
  @apply w-full max-w-lg flex flex-col space-y-4;
}

.characters {
  @apply flex items-center space-x-4 justify-center text-2xl;
}
</style>