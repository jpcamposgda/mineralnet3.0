import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => ({ 

    token: "",
    
    tokenrefresh:"",

    user: {},
   }),
   getters: {
    isAuthenticated: (state) => !(Object.keys(state.user).length == 0),
  },
  
})
