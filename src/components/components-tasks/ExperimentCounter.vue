<script setup lang="ts">
// Versão 1: Variável comum
let countNormal = 0

// const count = ref(0)
// console.log(count);  // Olhe no console do navegador
// console.log(typeof count);
// console.log(count.value);

function incrementNormal() {
  countNormal++
  console.log('countNormal:', countNormal)  // Vai mudar no console?
}

// Versão 2: Usando ref
import { ref } from 'vue'
const countReactive = ref(0)

function incrementReactive() {
  countReactive.value++
  console.log('countReactive:', countReactive.value)
}

</script>

<template>
  <div>
    <h2>Experimento: Reatividade</h2>

    <div>
      <p>Count Normal: {{ countNormal }}</p>
      <button @click="incrementNormal">Incrementar Normal</button>
    </div>

    <div>
      <p>Count Reactive: {{ countReactive }}</p>
      <button @click="incrementReactive">Incrementar Reactive</button>
    </div>
  </div>
</template>

<style scoped>
div {
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
