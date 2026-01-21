<script setup lang="ts">
import { ref } from 'vue'

interface User {
  id: number
  firstName: string
  lastName: string
  age: number
  email: string
  role: string
  isActive: boolean
}

const usuarioOwner = ref<User>({
  id: 1,
  firstName: 'Kaique',
  lastName: 'Bosco Araújo',
  age: 21,
  email: 'kaique@teste.com',
  role: 'owner',
  isActive: true,
})

const usuarioAdmin = ref<User>({
  id: 314,
  firstName: 'Gustavo',
  lastName: 'Scardovelli',
  age: 23,
  email: 'gustavo@teste.com',
  role: 'admin',
  isActive: false,
})

</script>

<template>
  <div class="box">
    <h2>Usuário {{ usuarioOwner.id }}</h2>
    <p>Nome: {{ usuarioOwner.firstName }} {{ usuarioOwner.lastName }}</p>
    <p>Idade: {{ usuarioOwner.age }}</p>
    <p>Email: {{ usuarioOwner.email }}</p>
    <p>Função: {{ usuarioOwner.role }}</p>
    <p>Status: {{ usuarioOwner.isActive ? 'Ativo' : 'Inativo' }}</p>
  </div>
  <br />
  <div class="box">
    <h2>Usuário {{ usuarioAdmin.id }}</h2>
    <p>Nome: {{ usuarioAdmin.firstName }} {{ usuarioAdmin.lastName }}</p>
    <p>Idade: {{ usuarioAdmin.age }}</p>
    <p>Email: {{ usuarioAdmin.email }}</p>
    <p>Função: {{ usuarioAdmin.role }}</p>
    <p>Status: {{ usuarioAdmin.isActive ? 'Ativo' : 'Inativo' }}</p>
  </div>
</template>
