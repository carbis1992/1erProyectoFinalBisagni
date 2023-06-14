<!-- eslint-disable vue/require-valid-default-prop -->
<template>
  <div v-if="showSection">
    <div class="header-carrito">
      <h3>Carrito</h3>
      <button @click="close" class="btn-cerrar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody v-for="producto in carrito" :key="producto.id">
        <tr>
          <td>
            <img
              :src="producto.imagen"
              class="card-img-top img-carrito"
              :alt="producto.nombre"
            />
          </td>
          <td>{{ producto.nombre }}</td>
          <td>{{ producto.precio }}</td>
          <td>
            <button class="btn btn-danger" @click="removeFromCart(producto)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-outline-success" @click="comprar">Comprar</button>
  </div>
</template>

<script>
export default {
  name: "carritoComponent",
  props: {
    carrito: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showSection: true,
    };
  },
  methods: {
    removeFromCart(producto) {
      this.$emit("remove-from-cart", producto);
    },
    close() {
      this.showSection = false;
    },
    comprar() {
      console.log("comprar");
    },
  },
};
</script>

<style scoped>
.img-carrito {
  width: 50px;
  height: 50px;
}

.btn-cerrar {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.header-carrito {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
}
</style>