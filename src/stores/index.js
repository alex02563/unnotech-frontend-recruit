import { defineStore } from 'pinia'

export const useIndexStore = defineStore({
  id: 'index',
  state: () => {
    return {
      isLoading: false
    }
  },
  actions: {
    loadingStart () {
      this.isLoading = true
    },
    loadingEnd () {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
})
