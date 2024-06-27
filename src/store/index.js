import { defineStore } from 'pinia';

export const useMainStore = defineStore({
  id:'mainStore',
  state: () => {
    return {
      language: localStorage.getItem('asg-language') || 'en',
      theme: localStorage.getItem('asg-theme') || 'light',
    }
  },
  getters: {
  },
})
