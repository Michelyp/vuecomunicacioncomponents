<template>
  <div>
    <h1 style="color: skyblue">La suma es: {{ seleccionados }}</h1>
    <button @click="generarNumero()">Generar</button>
    <ul>
      <li v-for="num in numeros" :key="num">
        <HijoNumero :sumanumero="num" v-on:sumarNumeros="sumarNumeros" />
      </li>
    </ul>
  </div>
</template>
<script>
import HijoNumero from "./HijoNumero.vue";
export default {
  name: "PadreNumeros",
  components: {
    HijoNumero
  },
  methods: {
    sumarNumeros(numero) {
      this.seleccionados += numero;
    },
    generarNumero() {
      var random = parseInt(Math.radom() * 100) + 1;
      this.numeros.push(random);
    }
  },
  data() {
    return {
      seleccionados: 0,
      numeros: [5, 7, 98, 23, 45, 16]
    };
  }
};
</script>
