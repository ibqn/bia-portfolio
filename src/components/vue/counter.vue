<script setup lang="ts">
import { ref } from "vue"
const counter = ref(0)
const increment = () => {
  counter.value++
}
const decrement = () => counter.value--
</script>

<template>
  <h1>Vue Counter</h1>
  <button @click="decrement">Decrement</button>
  <span>Count: {{ counter }}</span>
  <button @click="increment">Increment</button>
</template>
