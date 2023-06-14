<template>
    <div class="header-list">
        <h1>Productos</h1>
        <button
            @click="showCarritoCompras"
            type="button"
            class="btn btn-carrito"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-cart2"
            viewBox="0 0 16 16"
            >
            <path
                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
            />
        </svg>
      </button>
    </div>
  <carrito-component v-if="showCarrito" :carrito="carrito" @add-to-cart="addToCart" @remove-from-cart="removeFromCart"></carrito-component>
    <div class="card-wrapper">
        <div class="card" style="width: 18rem;" v-for="producto in productos" :key="producto.id">
            <img :src="producto.imagen" class="card-img-top" :alt="producto.nombre">
            <div class="card-body">
                <h5 class="card-title">{{producto.nombre}}</h5>
                <p class="card-text">{{producto.descripcion}}</p>
                <p>$ {{producto.precio}}</p>
                <p>Stock: {{producto.stock}}</p>
                <button type="button" id="btn-agregar-carrito" class="btn btn-light" @click="addToCart(producto)">Agregar al carrito</button>
            </div>
        </div>
    </div>
</template>

<script>
    import carritoComponent from './carritoComponent.vue'

    export default {
        name: 'listadoProductos',
        components: {
            carritoComponent
        },
        data() {
            return {
                productos: [
                    {
                        id: 1,
                        nombre: 'Producto 1',
                        descripcion: 'Descripcion del producto 1',
                        precio: 1000,
                        stock: 10,
                        imagen: 'https://picsum.photos/200/150'
                    },
                    {
                        id: 2,
                        nombre: 'Producto 2',
                        descripcion: 'Descripcion del producto 2',
                        precio: 2000,
                        stock: 20,
                        imagen: 'https://picsum.photos/200/150'
                    },
                    {
                        id: 3,
                        nombre: 'Producto 3',
                        descripcion: 'Descripcion del producto 3',
                        precio: 1500,
                        stock: 30,
                        imagen: 'https://picsum.photos/200/150'
                    },
                    {
                        id: 4,
                        nombre: 'Producto 4',
                        descripcion: 'Descripcion del producto 4',
                        precio: 4000,
                        stock: 40,
                        imagen: 'https://picsum.photos/200/150'
                    },
                    {
                        id: 5,
                        nombre: 'Producto 5',
                        descripcion: 'Descripcion del producto 5',
                        precio: 5000,
                        stock: 50,
                        imagen: 'https://picsum.photos/200/150'
                    },
                    {
                        id: 6,
                        nombre: 'Producto 6',
                        descripcion: 'Descripcion del producto 6',
                        precio: 6000,
                        stock: 60,
                        imagen: 'https://picsum.photos/200/150'
                    },
                    {
                        id: 7,
                        nombre: 'Producto 7',
                        descripcion: 'Descripcion del producto 7',
                        precio: 7000,
                        stock: 70,
                        imagen: 'https://picsum.photos/200/150'
                    },
                    {
                        id: 8,
                        nombre: 'Producto 8',
                        descripcion: 'Descripcion del producto 8',
                        precio: 8000,
                        stock: 80,
                        imagen: 'https://picsum.photos/200/150'
                    }
                ],
                carrito: [],
                showCarrito: false
            }
        },
        methods: {
            addToCart(producto) {
                this.carrito.push(producto);
            },
            removeFromCart(producto) {
                this.carrito.splice(this.carrito.indexOf(producto), 1);
            },
            showCarritoCompras() {
                this.showCarrito = !this.showCarrito;
            }
        }
    }
</script>

<style scoped lang="scss">
    .card-wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .card{
        margin: 10px;
    }
    .btn-carrito {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .header-list {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90px;
        border-bottom: 1px solid lightgrey;
    }

    #btn-agregar-carrito{
        border: 1px solid darkseagreen;
        &:hover{
            background-color: darkseagreen;
        }
    }
</style>