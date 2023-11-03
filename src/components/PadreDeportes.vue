<template>
    <div>
        <h1 style="color:fuchsia">Padre deportes</h1>
        <!-- -->
        <h2 style="background-color:yellow" v-if="favorito">
            Su deporte favorito es {{favorito}}
        </h2>
        <ul>
            <li v-for="depor in deportes" :key="depor">
                <HijoDeporte :nombredeporte="depor" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>
            </li>
        </ul>
    </div>
</template>

<script>
import HijoDeporte from './HijoDeporte.vue'
    export default{
        name:"PadreDeportes",
        components:{
            HijoDeporte
        },
        methods:{
            //vamos a un crear método sin recibir nada
            seleccionarFavoritoParent(nombre){
                console.log("Favorito: " +nombre);
                this.favorito = nombre;
            }
        },
        data(){
            return{
                favorito: null,
                deportes:["Surf","Curling", "Bolos", "Petranca", "Futbol"]

            }
        }
        
    }
    
    
</script>