<!-- <template>
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
        <button :disabled="activeUserId !== user.id">Incrementar Idade</button>
        <button :disabled="activeUserId !== user.id">Alterar Usuário</button>
      </div>
    </div>
  </div>
</template> -->

<!-- style scoped>
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
  width: 750px;
  padding: 12px 16px 12px 16px;
  margin: 12px 0;
  border: 2px solid #007bff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35vh;
  height: 13vh;
  border-radius: 8px;
  color: #ffffff;
  background-color: #007bff;
}

.user-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
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

button {
  height: 5vh;
  width: 18vh;
  font-size: 12px;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

label {
  font-size: 16px;
  font-weight: bold;
}
</style> -->
