<template>
  <ul id="menu">
    <li>
        <router-link to="/numerodoble/7">Número Doble 77</router-link>
    </li>
    <li>
        <router-link to="/numerodoble">Número sin doble</router-link>
    </li>
  </ul>
</template>

<script>
export default {
    name:"MenuComponent"
}
</script>

<style>
    ul#menu li{
        display: inline;
    }
</style>