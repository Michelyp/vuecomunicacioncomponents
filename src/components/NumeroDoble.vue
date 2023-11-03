<template>
    <div>
        <h1>Número dobleS</h1>    
        <h2 style="color:red" v-if="mensaje">
            {{mensaje}}
        </h2>
        <div v-else>
            <h2 style="color:skyblue">
                El número recibido es {{numero}}
            </h2>
            <h2>
                El doble del número es {{doble}}
            </h2>
        </div>
    </div>  
</template>
<script>
    export default{
        name:"NumeroDoble",
        watch:{
            '$route.params.numero'(nextVal, oldVal){
                //Solamente deseamos realizar las acciones cuando 
                //nuestro parametro cambie
                if(nextVal != oldVal){
                    //acciones
                    this.numero = parseInt(this.$route.params.numero);
                    this.double=this.numero*2;
                }
            }
        },
        data(){
            return{
                mensaje:null,
                numero:0,
                doble:0
            }
        },
        mounted(){
            console.log(this.$route.params.numero);
            var paramNumero = this.$route.params.numero;
            if(paramNumero==""){
                console.log("Sin parametros");
                this.mensaje ="No tenemos parámetros.."
            }else{
                console.log("Parametros recibidos" +paramNumero);
                this.numero = parseInt(this.$route.params.numero);
                this.doble = this.numero *2;

            }
        }
    }
</script>