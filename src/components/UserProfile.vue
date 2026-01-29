<script setup lang="ts">
import { useUserDatabase } from '@/composables/useUserDatabase'
import type { User } from '@/composables/useUserDatabase'

const { allUsers, activeUserId, setActiveUser, registerUser, incrementAge, clearDatabase } =
  useUserDatabase()

const generateRandomData = (): User => {
  const firstNames = ['Ana', 'Bruno', 'Carla', 'Daniel', 'Eva', 'Felipe', 'Gabriela', 'Hugo']
  const lastNames = [
    'Silva',
    'Santos',
    'Oliveira',
    'Souza',
    'Costa',
    'Pereira',
    'Rodrigues',
    'Almeida',
  ]
  const emails = ['example.com', 'mail.com', 'test.org', 'demo.net']

  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)] || 'Nome'
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)] || 'Sobrenome'
  const randomEmail = emails[Math.floor(Math.random() * emails.length)] || 'test.com'

  return {
    id: Date.now(),
    firstName: randomFirstName,
    lastName: randomLastName,
    email: `${randomFirstName.toLowerCase()}.${randomLastName.toLowerCase()}@${randomEmail}`,
    age: Math.floor(Math.random() * (60 - 18 + 1)) + 18,
  }
}
const addTestUser = () => {
  console.log('Adding test user')
  const newUser = generateRandomData()
  registerUser(newUser)
}
</script>
<template>
  <div class="user-container">
    <div
      v-for="user in allUsers"
      :key="user.id"
      class="user-box"
      :class="{ 'is-active': activeUserId === user.id }"
      @click="setActiveUser(user.id)"
    >
      <div class="user-header">
        <h1>{{ user.firstName }}</h1>
        <label>Status: {{ activeUserId === user.id ? 'Ativo' : 'Inativo' }}</label>
      </div>

      <div class="user-body">
        <label>Nome: {{ user.firstName }} {{ user.lastName }}</label>
        <label>Idade: {{ user.age }}</label>
        <label>Email: {{ user.email }}</label>
      </div>

      <div class="user-functions">
        <button :disabled="activeUserId !== user.id" @click.stop="incrementAge">
          Incrementar Idade
        </button>
        <!-- <button :disabled="activeUserId !== user.id">Alterar Usuário</button> -->
      </div>
    </div>
    <br />
    <div class="list-functions">
      <button @click="addTestUser">Adicionar Usuário</button>
      <button
        @click="clearDatabase"
        style="background-color: #dc3545"
        :disabled="allUsers.length === 0"
      >
        Limpar Usuários
      </button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.user-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.user-box {
  display: flex;
  align-items: center;
  height: 150px;
  width: 900px;
  padding: 12px 16px 12px 16px;
  margin: 12px 0;
  border: 2px solid #007bff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  opacity: 0.3;
}

.user-box.is-active {
  border: 3px solid #28a745;
  transform: scale(1.02);
  transition: all 0.2s ease;
  background-color: #f0fff4;
  opacity: 1;
}

.user-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 225px;
  height: 100px;
  border-radius: 8px;
  color: #ffffff;
  background-color: #007bff;
}

.user-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 12px 16px 12px 16px;
  gap: 6px;
}

.user-functions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 16px 12px 16px;
  gap: 6px;
}

.list-functions {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

button {
  height: 50px;
  width: 150px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  opacity: 0.6;
}

label {
  font-size: 16px;
  font-weight: bold;
}
</style>
