import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  doc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore'
import { useFirestore, useCurrentUser } from 'vuefire'
import { useNotifications } from '@/composables/useNotification'
import moment from 'moment'

export const useTasksStore = defineStore('tasks', () => {
  const db = useFirestore()
  const user = useCurrentUser()
  const toast = useNotifications()

  const tasks = ref([])

  const tasksByDate = computed(() => {
    let obj = {}

    tasks.value.forEach((task) => {
      const date = moment(task.finish_by).format('DD/MM/YYYY')

      if (!obj[date]) {
        obj[date] = []
      }

      task.is_outdated = false

      obj[date].push(task)
    })

    return obj
  })

  const isLoading = ref(false)

  function getTasks() {
    const q = query(
      collection(db, 'tasks'),
      orderBy('finish_by'),
      where('user_id', '==', user.value.uid)
    )
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      tasks.value = []

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id

        tasks.value.push(data)
      })
    })

    return { unsubscribe }
  }

  async function createTask(task) {
    try {
      isLoading.value = true

      const response = await addDoc(collection(db, 'tasks'), {
        ...task,
        user_id: user.value.uid
      })

      if (response) {
        toast.success('Tarefa criada com sucesso!')
      }

      return { error: null, success: true, data: response }
    } catch (error) {
      toast.error('Algo deu errado, não foi possível criar a tarefa')

      return { error: true, success: false, data: null }
    } finally {
      isLoading.value = false
    }
  }

  async function editTask(task) {
    try {
      isLoading.value = true

      const docRef = doc(db, 'tasks', task.id)

      const response = await updateDoc(docRef, task)

      if (response) {
        toast.success('Tarefa criada com sucesso!')
      }

      return { error: null, success: true, data: response }
    } catch (error) {
      toast.error('Algo deu errado, não foi possível atualizar a tarefa')
      return { error: true, success: false, data: null }
    } finally {
      isLoading.value = false
    }
  }

  async function deleteTask(taskId) {
    await deleteDoc(doc(db, 'tasks', taskId))
  }

  return {
    tasksByDate,
    tasks,
    isLoading,
    createTask,
    editTask,
    deleteTask,
    getTasks
  }
})
