<template>
    <div>
        <h2>Número Hijo {{sumanumero}}</h2>
        <button @click="sumarNumeros()">
            Sumar {{sumanumero}}
        </button>
    </div>
</template>
<script>
    export default {
        name :"HijoNumero",
        props:["sumanumero"],
        methods:{
            sumarNumeros(){
                //llamar igual que el método
                this.$emit("sumarNumeros", this.sumanumero);
            }
        },
        mounted(){
            console.log(this.sumanumero);
        }

    }
</script>