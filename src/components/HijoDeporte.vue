<template>
  <div>
    <h2>{{nombredeporte}}</h2>
    <button @click="seleccionarFavorito()">
        Seleccionar favorito
    </button>
  </div>
</template>
<script>
export default {
  name: "HijoDeporte",
  //los props se capturaran como un array dentro del export default
  props: ["nombredeporte"],
  methods:{
    seleccionarFavorito(){
        console.log("Favorito seleccionado");
        //Realizamos la llamada al parent
        //Tenemos la posibilidad de enviar parametros
        //al método padre a continuación de la llamada
        //y separados por comas 
        this.$emit("seleccionarFavoritoParent", this.nombredeporte); 
    }

  },
  mounted() {
    console.log(this.nombredeporte);
  }
};
</script>
