<template>
<nav>
  <div class="home">
    
  <span  class="j" @click.prevent="logout" >Logout</span>
  </div>


  
  </nav>
</template>


<script>

import { useUserStore } from "@/store/users";

  export default {
    name: 'HelloWorld',

    setup(){

const user = useUserStore();

user.token

    },
     
     methods: {
        logout() {

          const user = useUserStore();



        // user.removeItem('token') 
        user.token = null
        user.tokenrefresh = null
        user.user = {}

        
        
        this.$router.push({name: 'home'})
      console.log('Logout')  
     }
  },
     
     
};

  
</script>

<style scoped>

.j{
  cursor: pointer;
}
</style>