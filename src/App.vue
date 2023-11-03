<template>
  <v-app>
    <v-main>
      <MenuComponents/>
      <hr/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MenuComponents from './components/MenuComponents.vue'

export default {
  name: 'App',

  components: {
    MenuComponents,
  },

  data: () => ({
    //
  }),
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
