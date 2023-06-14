<template>
  <ul class="nav">
    <li class="nav-item">
        <a href="#"
          ><button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-house-door"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"
              />
            </svg>
          </button>
        </a>
    </li>
    <li class="nav-item">
        <a href="#"
          ><button @click="showLoginUsuario">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
              />
            </svg></button
        ></a>
    </li>
    <li class="nav-item">
        <a href="#"
          ><button @click="showRegistroUsuario">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-person-add"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
              />
              <path
                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
              />
            </svg></button
        ></a>
    </li>
  </ul>
  <registro-usuario v-if="showRegistro" />
  <login-usuario v-if="showLogin" />
</template>

<script>
import registroUsuario from "./registroUsuario.vue";
import loginUsuario from "./loginUsuario.vue";

export default {
  name: "NavBar",
  components: {
    registroUsuario,
    loginUsuario,
  },
  data() {
    return {
      showLogin: false,
      showRegistro: false,
    };
  },
  methods: {
    showLoginUsuario() {
      this.showLogin = true;
    },
    showRegistroUsuario() {
      this.showRegistro = true;
    },
  },
};
</script>

<style lang="scss" scoped>
    .nav {
        display: flex;
        justify-content: space-evenly;
        border-bottom: 1px solid lightgrey;
        padding: 20px;
    }
    
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;

    }
</style>