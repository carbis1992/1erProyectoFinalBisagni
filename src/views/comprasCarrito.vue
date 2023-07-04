<template>
  <div>
    <h1>Pedidos</h1>
    <div v-if="compras.length === 0">
      No tienes compras realizadas.
    </div>
    <div v-else>
      <div v-for="pedido in compras" :key="pedido.id">
        <h2>Pedido {{ pedido.id }}</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="producto in pedido.productos" :key="producto.id">
              <td>
                <img :src="producto.imagen" class="card-img-top img-carrito" :alt="producto.nombre" style="width: 50px" />
              </td>
              <td>{{ producto.nombre }}</td>
              <td>{{ producto.precio }}</td>
              <td>{{ producto.cantidad }}</td>
            </tr>
          </tbody>
        </table>
        <p>Total: {{ pedido.total }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comprasCarrito",
  data() {
    return {
      compras: [],
    };
  },
  created() {
    this.fetchCompras();
  },
  methods: {
    fetchCompras() {
      fetch('https://64a48afac3b509573b57a233.mockapi.io/compras')
        .then(response => response.json())
        .then(data => {
          this.compras = data;
          console.log("Compras:", this.compras);
        })
        .catch(error => {
          console.error('Error al obtener las compras:', error);
        });
    },
  },
};
</script>
