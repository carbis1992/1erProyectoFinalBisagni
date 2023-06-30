<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Agregar productos</h1>
      </div>
      <div class="col-12">
        <form class="row g-3 form">
            <div class="col-sm">
                <label for="idInput" class="form-label">ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="idInput"
                  placeholder="id"
                  v-model="id" />
            </div>
          <div class="col-sm">
            <label for="nombre" class="form-label">Nombre</label>
            <input
              type="nombre"
              class="form-control"
              id="nombre"
              placeholder="nombre"
              v-model="nombre"
            />
          </div>
          <div class="col-6">
            <label for="precio" class="form-label">Precio</label>
            <input
              type="text"
              class="form-control"
              id="precio"
              v-model="precio"
            />
          </div>
          <div class="col-md-12">
            <label for="descripcion" class="form-label">Descripcion</label>
            <input
              type="text"
              class="form-control"
              id="descripcion"
              v-model="descripcion"
            />
          </div>          
          <div class="col-md-6">
            <label for="stock" class="form-label">Stock</label>
            <input type="text" class="form-control" id="stock" v-model="stock" />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">imagen</label>
            <input type="text" class="form-control" id="imagen" v-model="imagen">
          </div>
        </form>
      </div>
      <div class="col-12">
        <button class="btn btn-primary agregar-prod" @click="agregarProductos">
          Agregar productos
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listadoProductosAdmin",
  data() {
    return {
        id: "",
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        imagen: "",
    };
  },
  methods: {
    agregarProductos() {
    const productos = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio,
      stock: this.stock,
      imagen: this.imagen,
    };

    // fetch para hacer PUT de los productos
    fetch(`https://649e051f9bac4a8e669e87a4.mockapi.io/products/`, {
      method: "POST",
      body: JSON.stringify(productos),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // redireccionar a listadoProductos con router-link
    this.$router.push({ name: "listadoProductos" });
  },
  },
};
</script>

<style lang="scss" scoped>
.agregar-prod{
    margin-top: 20px;
}
</style>