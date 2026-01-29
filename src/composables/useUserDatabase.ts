import { ref, computed, watch } from 'vue'

export interface User {
  id: number
  firstName: string
  lastName: string
  age: number
  email: string
}

const loadData = (): Map<number, User> => {
  try {
    const saved = localStorage.getItem('userDatabase')

    if (saved) {
      const arrayData = JSON.parse(saved)
      return new Map<number, User>(arrayData)
    }
  } catch (error) {
    console.error('Erro ao carregar dados do localStorage:', error)
  }
  return new Map<number, User>()
}

// Inicializa o banco de dados com os dados carregados do localStorage
const userDatabase = ref<Map<number, User>>(loadData())

// Estado global fora da função para persistir entre componentes
const activeUserId = ref<number | null>(null) // Variável reativa que armazena o ID do usuário ativo

watch(
  userDatabase,
  (newMap) => {
    const allUsers = Array.from(newMap.entries())
    const userList = JSON.stringify(allUsers)
    localStorage.setItem('userDatabase', userList)
    console.log('Banco de dados atualizado:', Array.from(newMap.values()))
    console.log('Array JSON allUsers:', allUsers)
    console.log('String JSON userList:', userList)
  },
  { deep: true },
)

export function useUserDatabase() {
  const registerUser = (user: User) => {
    // Clonando o map (garantia de que o Vue perceberá a mudança de referência)
    const novoMap = new Map(userDatabase.value)
    novoMap.set(user.id, user)
    userDatabase.value = novoMap
  }

  const setActiveUser = (id: number) => {
    if (userDatabase.value.has(id)) {
      activeUserId.value = id
    } else {
      console.warn(`Usuário com ID ${id} não encontrado.`)
    }
  }

  const incrementAge = () => {
    if (activeUserId.value !== null) {
      const user = userDatabase.value.get(activeUserId.value)
      if (user) {
        const updatedUser: User = { ...user, age: user.age + 1 }
        registerUser(updatedUser)
      }
    }
  }

  const clearDatabase = () => {
    userDatabase.value = new Map<number, User>()
    localStorage.removeItem('userDatabase')
    activeUserId.value = null
  }

  // Getter reativo para listagem (v-for)
  const allUsers = computed(() => Array.from(userDatabase.value.values()))

  // Getter para retornar o objeto do usuário ativo completo
  const activeUser = computed(() => {
    return activeUserId.value !== null ? userDatabase.value.get(activeUserId.value) : null
  })

  // Busca rápida (por ID)
  const getUserById = (id: number) => userDatabase.value.get(id)

  return {
    allUsers,
    activeUserId, // ID para CSS
    activeUser, // Objeto para Lógica
    registerUser,
    setActiveUser,
    getUserById,
    incrementAge,
    clearDatabase,
  }
}
