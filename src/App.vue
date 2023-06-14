<template>
    <!-- <registroUsuario />
    <loginUsuario /> -->
    <NavBar />
    <listadoProductos />
</template>

<script>
// import registroUsuario from './components/registroUsuario.vue'
// import loginUsuario from './components/loginUsuario.vue'
import NavBar from './components/NavBar.vue';
import listadoProductos from './components/listadoProductos.vue'

export default {
  name: 'App',
  components: {
    // registroUsuario,
    // loginUsuario,
    NavBar,
    listadoProductos,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
