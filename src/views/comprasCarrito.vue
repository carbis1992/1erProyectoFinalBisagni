<template>
  <div>
    <h1>Mis compras</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in compras" :key="producto.id">
          <td>
            <img
              :src="producto.imagen"
              class="card-img-top img-carrito"
              :alt="producto.nombre"
              style="width: 50px"
            />
          </td>
          <td>{{ producto.nombre }}</td>
          <td>{{ producto.precio }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "comprasComponent",
  data() {
    return {
      compras: [],
    };
  },
  created() {
    this.compras = JSON.parse(localStorage.getItem("carrito")) || [];
    console.log("comprado:", this.compras);
  },
};
</script>