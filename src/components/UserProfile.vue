<script setup lang="ts">
import { ref, computed } from 'vue'

interface User {
  id: number
  firstName: string
  lastName: string
  age: number
  email: string
  role: 'admin' | 'user' | 'guest'
  isActive: boolean
}

const userOne = ref<User>({
  id: 1,
  firstName: 'Kaique',
  lastName: 'Bosco Araújo',
  age: 21,
  email: 'kaique@teste.com',
  role: 'admin',
  isActive: true,
})

const userTwo = ref<User>({
  id: 314,
  firstName: 'Gustavo',
  lastName: 'Scardovelli',
  age: 23,
  email: 'gustavo@teste.com',
  role: 'admin',
  isActive: false,
})

const currentUser = ref<User | null>(null)

const fullName = computed(() => {
  return currentUser.value
    ? `${currentUser.value.firstName} ${currentUser.value.lastName}`
    : 'Sem usuário selecionado'
})

const roleLabel = computed(() => {
  switch (currentUser.value?.role) {
    case 'admin':
      return 'Administrador'
    case 'user':
      return 'Usuário'
    case 'guest':
      return 'Convidado'
    default:
      return 'Desconhecido'
  }
})

const accountStatus = computed(() => {
  return currentUser.value?.isActive ? 'Ativo' : 'Inativo'
})

function incrementAge(user: User) {
  user.age++
}

function changeUser(user: User) {
  currentUser.value = user
}
</script>

<template>
  <div class="user-container">
    <div class="user-box">
      <div class="user-header">
        <h1>Usuário {{ userOne.id }}</h1>
        <p><strong>Status:</strong> {{ accountStatus }}</p>
      </div>
      <div class="user-body">
        <p><strong>Nome:</strong> {{ fullName }}</p>
        <p><strong>Idade:</strong> {{ userOne.age }}</p>
        <p><strong>Email:</strong> {{ userOne.email }}</p>
        <p><strong>Função:</strong> {{ roleLabel }}</p>
      </div>
      <br />
      <div class="user-functions">
        <button @click="incrementAge(userOne)">Incrementar Idade</button>
        <button @click="changeUser(userOne)">Alterar Usuário</button>
      </div>
    </div>
    <div class="user-box">
      <div class="user-header">
        <h1>Usuário {{ userTwo.id }}</h1>
        <p><strong>Status:</strong> {{ accountStatus }}</p>
      </div>
      <div class="user-body">
        <p><strong>Nome:</strong> {{ userTwo.firstName }} {{ userTwo.lastName }}</p>
        <p><strong>Idade:</strong> {{ userTwo.age }}</p>
        <p><strong>Email:</strong> {{ userTwo.email }}</p>
        <p><strong>Função:</strong> {{ roleLabel }}</p>
      </div>
      <br />
      <div class="user-functions">
        <button @click="incrementAge(userTwo)">Incrementar Idade</button>
        <button @click="changeUser(userTwo)">Alterar Usuário</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.user-container {
  display: grid;
  padding: 16px;
}

.user-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 800px;
  height: 200px;
  border: 2px solid #007bff;
  border-radius: 8px;
  padding: 16px;
  margin: 0 auto 16px auto;
}

.user-header {
  text-align: center;
  align-items: center;
  background-color: #007bff;
  width: 300px;
  height: 50%;
  border-radius: 4px;
  padding-top: 12px;
}

.user-header h1 {
  text-align: center;
  color: white;
}

.user-header p {
  font-weight: bold;
  text-align: center;
  color: white;
}

.user-body {
  flex: 1;
  padding: 0 16px;
}

.user-body p {
  margin: 8px 0;
}

.user-functions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 12px;
  gap: 6px;
}

.user-functions button {
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
</style>
