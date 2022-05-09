import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => ({ 

    token: "",
    
    tokenrefresh:"",

    user: {},
   }),
   
   persist: true,
   
   getters: {
    isAuthenticated: (state) => !(Object.keys(state.user).length == 0),
  },

  
  
})
