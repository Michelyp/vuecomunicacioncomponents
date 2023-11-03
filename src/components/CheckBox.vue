<template>
  <div id="caja">
    <h1>Selecciona los que quieras sumar:</h1>
    <v-btn @click="generarCheckBox()"> Generara Checkbox </v-btn>
    <h2>La suma seleccionada es:</h2>
    <div id="checkBox" class="align-self-center+">
    <v-checkbox v-for="(lista, index) in listaRandoms" :key="index" v-model="sumaNumero">{{
      lista
    }}</v-checkbox>
    </div>

  </div>
</template>

<script>
export default {
  name: "CheckBox",
  methods: {
    generarCheckBox() {
      this.html = "";
      var random = parseInt(Math.random() * 100) + 1;
      this.listaRandoms.push(random);
      //<v-checkbox label="Checkbox"></v-checkbox>
      this.html += "<v-checkbox> Hello</v-checkbox>";
      console.log("he pasado por aqui" + random);
    }
  },
  data() {
    return {
      listaRandoms: [],
      html: {}
    };
  }
};
</script>

<style>
#caja, .checkBox{
  display: flex;
  display: inline-block;
  text-align: center;
}

</style>
