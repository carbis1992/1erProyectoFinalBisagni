<template>
    <HeaderBar />
    <router-view />

</template>

<script>
import HeaderBar from './components/HeaderBar.vue'

export default {
  name: 'App',
  components: {
    HeaderBar
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
  margin-right: 30px;
  margin-left: 30px;
}
</style>
