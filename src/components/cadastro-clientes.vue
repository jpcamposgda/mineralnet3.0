<template>
    <nav class="">
        <div class="div_pai">
            <img class="head"
                      :src="require('../../img/Group 2.png')"
                      
                    />

            
        
   <div class="div_filho">
       <img class="Arrow"
          :src="require('../../img/ArrowLeft.svg')"
          
        />
   </div>
   </div>
   
    </nav>

    <div class="mt-10  text-center titulo">
        <h2 >Escolha seu perfil para   
         cadastro:</h2>
        
    </div>

    <div class="text-center caixas">
        <div> <img class="mb-5"
                      :src="require('../../img/Card Dependente.png')"
                      
                    /> </div>
        
        <div> <img class=""
                      :src="require('../../img/Card Dependente1.png')"
                      
                    /> 
        </div>
        
        <div class="botao">
            <button type="submit"  class="buttons1  mt-6 px-4" > Continuar </button>
        </div>

    </div>
</template>

<script>
export default {

    name: 'cadastro-clientes',
    
}
</script>

<style scoped>

.Arrow{
    width: 24px;
    height: 24px;
    
}


.head{
    width: 100%;
    height: 66px;
}



.div_pai{
    position: relative;
}

.div_filho{
    position: absolute;
    bottom: 18px;
    left: 23px;
    cursor: pointer;


}

.titulo{
    width: 328px;
    font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 28px;
/* or 117% */


color: #825A16;

}

.caixas{
    margin-top: 70px;
    cursor: pointer;
}

.botao{
    margin-top: 100px;
}

.buttons1{
background: #E8E8E8;
width: 284px;
height: 44px;
border-radius: 8px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 20px;
color: #979797;

}
</style>