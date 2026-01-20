
<script setup lang="ts">
import { ref, computed } from 'vue'

interface Product {
  id: number
  name: string
  price: number
  quantity: number
}

const products = ref<Product[]>([
  { id: 1, name: 'Mouse', price: 50, quantity: 2 },
  { id: 2, name: 'Teclado', price: 150, quantity: 1 }
])

// Opção 1: Função normal
function getTotal() {
  return products.value.reduce((sum, p) => sum + (p.price * p.quantity), 0)
}

// Opção 2: Computed
const total = computed(() => {
  console.log('Calculando total...')
  return products.value.reduce((sum, p) => sum + (p.price * p.quantity), 0)
})

function incrementQuantity(id: number) {
  const product = products.value.find(p => p.id === id)
  if (product) {
    product.quantity++
  }
}
</script>

<template>
  <div>
    <!-- Qual a diferença entre estes dois? -->
    <p>Total (função): {{ getTotal() }}</p>
    <p>Total (computed): {{ total }}</p>

    <!-- Se renderizar getTotal() 5 vezes, o que acontece? -->
    <p>{{ getTotal() }}</p>
    <p>{{ getTotal() }}</p>
    <p>{{ getTotal() }}</p>

    <!-- E se renderizar total 5 vezes? -->
    <p>{{ total }}</p>
    <p>{{ total }}</p>
    <p>{{ total }}</p>

    <button @click="incrementQuantity(1)">Incrementar Produto</button>
  </div>
</template>

