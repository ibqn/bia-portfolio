<script setup lang="ts">
import { ref } from "vue"
const counter = ref(0)
const increment = () => {
  console.log("increment")
  counter.value++
}
</script>

<template>
  <div>
    <h1>Counter</h1>
    <p>Count: {{ counter }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
