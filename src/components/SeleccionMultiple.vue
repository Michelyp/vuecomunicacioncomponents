<template>
  <div>
    <h1>Selección multiple</h1>
    <form v-on:submit.prevent="mostrarSeleccion()">
        <select size="8" multiple v-model="seleccionados">
            <option v-for="opt in paise" :key="opt">
                 {{opt}}
            </option>
        </select>
       <button>Mostrar Seleccionados</button>

    </form>
    <h2 color="skyblue">{{seleccion}}</h2>
    <v-select
      label="Select"
      :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming'
      ]"

      multiple
    ></v-select>
    <v-btn @clic="mostrarSeleccion()"  append-icon="$vuetify"> Button </v-btn>
    <li v-for="seleccionado in seleccionados" :key="seleccionado">
         {{seleccionado}}
    </li>
  </div>
</template>

<script>
export default {
  name: "SeleccionMultiple",
  methods:{
    mostrarSeleccion(){
        this.selecciona ="";
        for (var opt of this.seleccionados){
            this.selecciona +=opt +",";
        }
}
  },
  data(){
    return {
        paise:["España","Mexico", "Honduras","India"],
        seleccionados:[],
        selecciona:""
    }
  }
};
</script>

<style></style>
