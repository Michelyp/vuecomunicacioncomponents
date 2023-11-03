<template>
<div id="comics">
    <h2 color="skyblue">{{comic.titulo}}</h2>
    <vs-button 
        gradient 
        :active="active == 0"  @click="seleccionarFavorito()">Seleccionar Favorito</vs-button>
    <button @click="eliminarComic()">Eliminar Comic</button>
    <br/>
    <img :src= "comic.imagen"/>
    <p>{{comic.descripcion}}</p>
    <h3 :class="{rojo:comic.year<=2000, verde:comic.year>2000}">Año {{comic.year}}</h3>

</div>
</template>
<script>
    export default{
        name: "ComicComponent",
        props:["comic","index"],
        methods:{
            seleccionarFavorito(){
                this.$emit("SeleccionarFavorito", this.comic);
            },
            eliminarComic(){
                this.$emit("eliminarComic",this.index);
            }
        }
    }
</script>
<style>
    @import "./../assets/css/estilocomics.css";
</style>