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
    <carrito-component v-if="showCarrito" :carrito="carrito" @update-carrito="updateCarrito"></carrito-component>
    <div class="card-wrapper">
        <div
            class="card flip-card"
            style="width: 18rem;"
            v-for="producto in productos"
            :key="producto.id"
            :class="{ flipped: producto === selectedProduct }"
        >
            <div class="card-front">
                <!-- Contenido de la parte frontal de la tarjeta -->
                <img :src="producto.imagen" class="card-img-top card-back-content" :alt="producto.nombre">
                <div class="card-body" :class="{ hidden: producto === selectedProduct }">
                    <h5 class="card-title">{{ producto.nombre }}</h5>
                    <!-- <p class="card-text">{{ producto.descripcion }}</p> -->
                    <p>$ {{ producto.precio }}</p>
                    <button type="button" class="btn btn-light btn-card" @click="addToCart(producto)">
                        Agregar al carrito
                    </button>
                    <button type="button" class="btn btn-light btn-card" @click="flipCard(producto)">
                        Detalles
                    </button>
                </div>
            </div>
            <div class="card-back" v-if="producto === selectedProduct">
                <!-- Contenido del dorso de la tarjeta -->
                <div  class="card-body card-back-content">
                    <h5 class="card-title title-back">{{ selectedProduct.nombre }}</h5>
                    <h6>Detalle:</h6>
                    <p class="card-text">{{ selectedProduct.descripcion }}</p>
                    <p>Stock: {{ producto.stock }}</p>
                    <button type="button" class="btn btn-ligth btn-card" @click="flipCard(null)">
                        Volver
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import carritoComponent from './carritoComponent.vue'
    import Swal from 'sweetalert2'

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
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
                        precio: 1000,
                        stock: 10,
                        imagen: 'https://picsum.photos/200/150',
                        cantidad: 0
                    },
                    {
                        id: 2,
                        nombre: 'Producto 2',
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
                        precio: 2000,
                        stock: 20,
                        imagen: 'https://picsum.photos/200/150',
                        cantidad: 0
                    },
                    {
                        id: 3,
                        nombre: 'Producto 3',
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
                        precio: 1500,
                        stock: 30,
                        imagen: 'https://picsum.photos/200/150',
                        cantidad: 0
                    },
                    {
                        id: 4,
                        nombre: 'Producto 4',
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
                        precio: 4000,
                        stock: 40,
                        imagen: 'https://picsum.photos/200/150',
                        cantidad: 0
                    },
                    {
                        id: 5,
                        nombre: 'Producto 5',
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
                        precio: 5000,
                        stock: 50,
                        imagen: 'https://picsum.photos/200/150'
                    },
                    {
                        id: 6,
                        nombre: 'Producto 6',
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
                        precio: 6000,
                        stock: 60,
                        imagen: 'https://picsum.photos/200/150',
                        cantidad: 0
                    },
                    {
                        id: 7,
                        nombre: 'Producto 7',
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
                        precio: 7000,
                        stock: 70,
                        imagen: 'https://picsum.photos/200/150',
                        cantidad: 0
                    },
                    {
                        id: 8,
                        nombre: 'Producto 8',
                        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
                        precio: 8000,
                        stock: 80,
                        imagen: 'https://picsum.photos/200/150',
                        cantidad: 0
                    }
                ],
                carrito: [],
                showCarrito: false,
                selectedProduct: null,
            }
        },
        methods: {
            addToCart(producto) {
                this.carrito.push(producto);
                // sumar cantidad a producto
                producto.cantidad++;
                Swal.fire({
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 800,
                    width: 300,
                })
            },
            removeFromCart(producto) {
                this.carrito.splice(this.carrito.indexOf(producto), 1);
            },
            showCarritoCompras() {
                this.showCarrito = !this.showCarrito;
            },
            selectProduct(producto) {
                this.selectedProduct = producto;
            },
            flipCard(producto) {
                if (this.selectedProduct && this.selectedProduct === producto) {
                // Si la tarjeta ya está volteada y es la misma tarjeta, deseleccionar el producto
                this.selectedProduct = null;
                } else {
                // Si se hace clic en una tarjeta diferente, voltearla y mostrar el producto
                this.selectedProduct = producto;
                }
            },
            updateCarrito(nuevoCarrito) {
              this.carrito = nuevoCarrito;
            },
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

    .title-back{
        font-weight: bold;
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

    .btn-card{
        border: 1px solid darkseagreen;
        background-color: rgb(200 250 227);
        margin-right: 10px;
        &:hover{
            background-color: rgb(217, 246, 189);
        }
    }

    .hidden {
    display: none;
}
    .flip-card {
        transform-style: preserve-3d;
        transition: transform 0.6s;
    }

    .flip-card.flipped {
        transform: rotateY(180deg);
    }

    .card-back-content {
        transform: scaleX(-1);
    }
</style>