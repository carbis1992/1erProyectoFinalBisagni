<template>
  <div v-if="showSection">
    <div class="header-register">
        <h3>Registrate</h3>
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
      <form class="row g-3 form">
        <div class="col-sm">
          <label for="inputEmail4" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="juanperez@mail.com"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Direccion</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="España 1309"
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Ciudad</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-md-6">
          <label for="inputState" class="form-label">Provincia</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-12" id="submit">
          <button
            type="submit"
            class="btn btn-outline-primary"
            id="liveAlertBtn"
            @click="alertSuccess"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "registroUsuario",
  data() {
    return {
      showSection: true,
    };
  },
  methods: {
    alertSuccess() {
      Swal.fire({
        title: "<strong>Registrado!</strong>",
        icon: "success",
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK!',
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
    },
    close() {
      this.showSection = false;
    },
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

.form {
  text-align: left;
}
#submit {
  text-align: center;
}

.header-register {
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