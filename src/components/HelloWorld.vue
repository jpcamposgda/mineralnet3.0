<template>
   

   
      
      <nav>
        <v-img 
          :src="require('../../img/Group 1.png')"
          class="group1"
        />

     </nav>
       <form @submit.prevent="efetuarLogin" >
        <div class=" centralizar   mt-14">
          
         <span class="label">Documento (CPF/CNPJ)</span>
         
         <input type="email"  v-model="usuario.email" class="input mb-2 input-text" id="jp" placeholder="Informe seu documento">
         <p class="erro" v-if="mensagemErro" > {{ mensagemErro }}   </p>
         <span class="label">Senha</span>
         
         <input type="password" v-model="usuario.password" class="input mb-2  input-text "  placeholder="Informe sua senha" required  >
         <p class="erro" v-if="mensagemErro1" > {{ mensagemErro1 }}   </p>
         
        <div class="text-right my-5 "> <span > <a class="link"   href="">Esqueci minha senha</a> </span></div>

       
         
         
        </div>
        
<div class=" mt-16   centralizar">
  <button type="submit"  class="buttons1  mt-6 px-4" > Entrar </button>
  
  
  
  <div class="labelError mt-5 " v-show="mensagemErro2">

  

    

     
     
     <img 
          :src="require('../../img/i.png')"
          class="exclamacao"
         
        />
        

        <div class="caixacpf"><p >CPF/CNPJ não encontrado</p></div>
         

       
       
       

          <button @click.prevent="mensagemErro2 = !mensagemErro2" >
          <img
          :src="require('../../img/x.png')"
          class="cancel"
         
          
          
        />
       </button>
       
   

  

   
  
  </div>
</div>
        
     
         
      
    </form>   
    
    <div  class="mt-2 centralizar">
  <router-link class="link__cadastro" to="/cadastro-clientes" >   <button  v-show="!mensagemErro2"      class="  mt-6 px-4 buttons "> Quero me cadastrar</button></router-link>
  </div>
   
</template>

<script>

import { useUserStore } from "@/store/users"



import http from "@/plugins" 

export default {

  
  name: 'HelloWorld',

  

 data () {
        const userStore = useUserStore()

        userStore.user

       

        return {
            usuario: {},
            
            mensagemErro: '',

            mensagemErro1: '',
            
            mensagemErro2: '',

            

           

            
        }
    },


methods: {

  

 

      efetuarLogin () {

      
      
      http.post('auth/login', this.usuario)
             .then(response => {
                 
               
              const useStore = useUserStore()

              useStore.token = response.data.accessToken
              useStore.tokenrefresh = response.data.refreshToken
              useStore.user = response.data.user
                 
                 localStorage.setItem('token', response.data.accessToken)
                 this.$router.push({ name: 'about' })

             })
             .catch(erro => {
               if (erro.request.status == 401){

                 this.mensagemErro = "CPF ou CNPJ não cadastrado";
                 this.mensagemErro1 = "Senha incorreta";
                 this.mensagemErro2 = "CPF/CNPJ não encontrado"


                document.getElementsByTagName('input')[0].style.borderColor = '#AD0100'
                document.getElementsByTagName('input')[1].style.borderColor = '#AD0100'
                

               }
             } );
    }
}

  
};
</script>

<style scoped>

.group1{
  



}


.link__cadastro{

  text-decoration: none;
}



.centralizar{
  width: 328px;
  margin: 0 auto;
}

/* Group 1 */

.label{

position: static;
width: 231px;
height: 20px;
left: 0px;
top: 0px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */


color: #4F4F4F;

opacity: 0.5;




}

.labelError{

  display: flex;
flex-direction: row;
align-items: center;
padding: 16px 16px 16px 5px;

position: static;

height: 56px;
left: 24px;
top: 0px;

background: #AD0100;
border-radius: 8px;
color: #FFFFFF;
position: static;




/* Q-Body/14 px */

font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height, or 150% */

display: flex;
align-items: center;
letter-spacing: 0.21px;
}


.input{

width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px    ;

position: static;

height: 40px;
left: 24px;
top: 36px;

background: #F8F8F8;
border: 2px solid #E8E8E8;
box-sizing: border-box;
border-radius: 6px;

}

.input-text{
/* Digite... */


position: static;


font-family: 'Ubuntu';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 100%;
/* identical to box height, or 14px */


color: #0A0A0A;



}

.link{
  position: static;
width: 280px;
height: 16px;
left: 24px;
top: 0px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;

text-decoration: none;
/* identical to box height, or 133% */



color: #B4771C;
}

.link:hover{

  text-decoration: underline;
}



.buttons1{
/* Bottom */


/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 16px;


width: 100%;
height: 44px;
/* left: 35.5px; */
top: 0px;

background: #B4771C;
border-radius: 8px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

display: flex;
align-items: center;
text-align: center;

color: #F8F8F8;



text-transform: initial;


}





.buttons{
/* Bottom */


/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 16px;


width: 100%;
height: 44px;
/* left: 35.5px; */
/* top: 68px; */

border: 2px solid #B4771C;
box-sizing: border-box;
border-radius: 8px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 24px 0px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

display: flex;
align-items: center;
text-align: center;

color: #B4771C;
text-transform: initial;

}

.erro{
  position: static;
width: 167px;
height: 16px;
left: 0px;
top: 84px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */


color: #AD0100;

opacity: 0.5;

}


.exclamacao{

width: 20px;
height: 20px;
margin: 18px 10px 18px 18px;

}

.cancel{

width: 14px;
height: 14px;
margin: 13px;
cursor: pointer;
}

.caixacpf{

  width: 231px
}


</style>