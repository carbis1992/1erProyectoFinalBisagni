<template>
  <div v-if="showSection">
    <div class="header-login">
        <h3>Login</h3>
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
    <div class="form-wrapper">
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="juanperez@mail.com"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password</label
        >
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div class="col-12" id="submit">
        <button type="submit" class="btn btn-outline-primary" @click="loginSuccess">Log In</button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: "loginUsuario",
  data() {
    return {
      showSection: true,
    };
  },
  methods: {
    close() {
      this.showSection = false;
    },
    loginSuccess() {
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: 'Has iniciado sesión correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.showSection = false;
    }
  },
};
</script>

<style scoped lang="scss">
    .form-wrapper {
        width: 50%;
        align-content: center;
        padding: 15px;
        margin: auto;
    }

    .header-login {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        h3{
          margin: 0;
      }
    }

    .btn-cerrar {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
</style>