<template>
  <HeaderBar :isAdmin="esAdmin" />
  <router-view :carritoProp="carrito" />
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import mitt from 'mitt';

export default {
  name: 'App',
  components: {
    HeaderBar
  },
  data() {
    return {
      esAdmin: false,
      emitter: mitt(),
      carrito: [],
    };
  },
  mounted() {
    this.emitter.on("isAdmin", (isAdmin) => {
      this.esAdmin = isAdmin;
    });
    this.emitter.on('actualizarCarrito', (carrito) => {
      this.carrito = carrito;
    });
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-right: 30px;
  margin-left: 30px;
}
</style>
