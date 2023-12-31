import { createRouter, createWebHistory } from 'vue-router';

import listadoProductos from './views/listadoProductos.vue';
import loginUsuario from './views/loginUsuario.vue';
import registroUsuario from './views/registroUsuario.vue';
import carrito from './views/carritoComponent.vue';
import detalleProducto from './views/detalleProducto.vue';
import comprasCarrito from './views/comprasCarrito.vue';
import listadoProductosAdmin from './views/listadoProductosAdmin.vue';
import editarProducto from './views/editarProducto.vue';

const routes = [
  { path: "/", component: listadoProductos, name: "listadoProductos" },
  { path: "/login", component: loginUsuario, name: "loginUsuario" },
  { path: "/registro", component: registroUsuario, name: "registroUsuario" },
  { path: "/carrito", component: carrito, name: "carrito" },
  { path: "/detalle/:id", component: detalleProducto, name: "detalleProducto" },
  { path: "/compras", component: comprasCarrito, name: "comprasCarrito" },
  { path: "/admin", component: listadoProductosAdmin, name: "listadoProductosAdmin" },
  { path: "/editar/:id", component: editarProducto, name: "editarProducto" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
