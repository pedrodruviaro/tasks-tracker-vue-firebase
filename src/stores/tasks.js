import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  const tasksByDate = ref({
    '19/01/2024': [
      { id: 1, title: 'Task 1', category: 'Trabalho', is_done: false, finish_by: '19/01/2024' },
      { id: 2, title: 'Task 2', category: 'Lazer', is_done: true, finish_by: '19/01/2024' },
      { id: 3, title: 'Task 3', category: 'Estudo', is_done: true, finish_by: '19/01/2024' },
      { id: 4, title: 'Task 4', category: 'Lazer', is_done: false, finish_by: '19/01/2024' },
      { id: 5, title: 'Task 5', category: 'Trabalho', is_done: true, finish_by: '19/01/2024' },
      { id: 6, title: 'Task 6', category: 'Estudo', is_done: false, finish_by: '19/01/2024' },
      { id: 7, title: 'Task 7', category: 'Trabalho', is_done: true, finish_by: '19/01/2024' },
      { id: 8, title: 'Task 8', category: 'Lazer', is_done: false, finish_by: '19/01/2024' },
      { id: 9, title: 'Task 9', category: 'Estudo', is_done: true, finish_by: '19/01/2024' },
      { id: 10, title: 'Task 10', category: 'Trabalho', is_done: false, finish_by: '19/01/2024' }
    ],
    '18/01/2024': [
      { id: 1, title: 'Task 1', category: 'Trabalho', is_done: true, finish_by: '18/01/2024' },
      { id: 2, title: 'Task 2', category: 'Lazer', is_done: false, finish_by: '18/01/2024' },
      { id: 3, title: 'Task 3', category: 'Estudo', is_done: true, finish_by: '18/01/2024' },
      { id: 4, title: 'Task 4', category: 'Lazer', is_done: false, finish_by: '18/01/2024' },
      { id: 5, title: 'Task 5', category: 'Trabalho', is_done: true, finish_by: '18/01/2024' },
      { id: 6, title: 'Task 6', category: 'Estudo', is_done: false, finish_by: '18/01/2024' },
      { id: 7, title: 'Task 7', category: 'Trabalho', is_done: false, finish_by: '18/01/2024' },
      { id: 8, title: 'Task 8', category: 'Lazer', is_done: true, finish_by: '18/01/2024' },
      { id: 9, title: 'Task 9', category: 'Estudo', is_done: false, finish_by: '18/01/2024' },
      { id: 10, title: 'Task 10', category: 'Trabalho', is_done: true, finish_by: '18/01/2024' }
    ],
    '17/01/2024': [
      {
        id: 1,
        title: 'Primeira task do dia',
        category: 'Estudo',
        is_done: false,
        finish_by: '17/01/2024'
      },
      { id: 2, title: 'Task 2', category: 'Lazer', is_done: true, finish_by: '17/01/2024' },
      { id: 3, title: 'Task 3', category: 'Trabalho', is_done: false, finish_by: '17/01/2024' },
      { id: 4, title: 'Task 4', category: 'Estudo', is_done: true, finish_by: '17/01/2024' },
      { id: 5, title: 'Task 5', category: 'Lazer', is_done: false, finish_by: '17/01/2024' },
      { id: 6, title: 'Task 6', category: 'Trabalho', is_done: true, finish_by: '17/01/2024' },
      { id: 7, title: 'Task 7', category: 'Estudo', is_done: false, finish_by: '17/01/2024' },
      { id: 8, title: 'Task 8', category: 'Lazer', is_done: true, finish_by: '17/01/2024' },
      { id: 9, title: 'Task 9', category: 'Trabalho', is_done: false, finish_by: '17/01/2024' },
      { id: 10, title: 'Task 10', category: 'Estudo', is_done: true, finish_by: '17/01/2024' }
    ]
  })

  async function createTask(task) {
    console.log(task)
  }

  async function editTask(taskId) {
    console.log(taskId)
  }

  async function deleteTask(taskId) {
    console.log(taskId)
  }

  return {
    tasksByDate,
    createTask,
    editTask,
    deleteTask
  }
})
