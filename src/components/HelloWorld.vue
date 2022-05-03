<template>
   

   
      
      <v-nav>
        <v-img 
          :src="require('../../img/Group 1.svg')"
          class="group1"
        />

        </v-nav>
       
        <div class="mx-8">
          
         <span class="label">Documento (CPF/CNPJ)</span>
         
         <input type="text" class="input " placeholder="informe seu documento">
         
         <span class="label">Senha</span>
         
         <input type="text" class="input" placeholder="informe sua senha">

         <span> <a class="link" href="">Esqueci minha senha</a> </span>

        </div>

        
     
         
      
        
   
</template>

<script>

export default {
  name: 'HelloWorld',

  
}
</script>

<style scoped>

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


.input{

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;

position: static;
width: 291px;
height: 40px;
left: 24px;
top: 36px;

background: #F8F8F8;
border: 2px solid #E8E8E8;
box-sizing: border-box;
border-radius: 6px;

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
/* identical to box height, or 133% */

text-align: right;

color: #B4771C;
}

.bigcaixa{




}

.color{

background: var(--sinza-principal);

}


:root{

--sinza-principal: #B4771C;

}

</style>