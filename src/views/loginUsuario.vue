<template>
  <div v-if="showSection">
    <div class="header-login">
      <h3>Login</h3>
    </div>
    <div class="form-wrapper">
      <div class="mb-3 row">
        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail" v-model="email" placeholder="juanperez@mail.com" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" v-model="password" placeholder="Juanperez123" />
        </div>
      </div>
      <div class="col-12" id="submit">
        <button type="submit" class="btn btn-outline-primary" @click.prevent="login">Log In</button>
        <div class="registrarse">
          <p>No tienes cuenta?</p>
          <router-link class="item-menu" :to="{ name: 'registroUsuario' }">Registrate</router-link>
        </div>
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
      email: "",
      password: "",
      userAdmin: {
        email: "juanperez@mail.com",
        password: "Juanperez123",
      },
    }
  },
  methods: {
    close() {
      this.showSection = false;
    },
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    validatePassword(password) {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
      return passwordRegex.test(password);
    },
    validateFields() {
      if (!this.email || !this.password) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, complete todos los campos',
        })
        return false;
      }
      if (!this.validateEmail(this.email)) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, ingrese un correo electrónico válido',
        })
        return false;
      }
      if (!this.validatePassword(this.password)) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'La contraseña debe contener al menos una letra mayúscula y un número, y tener una longitud mínima de 6 caracteres',
        })
        return false;
      }
      return true;
    },
    login() {
      if (this.validateFields()) {
        fetch('https://649e051f9bac4a8e669e87a4.mockapi.io/users')
          .then(response => response.json())
          .then(users => {
            const foundUser = users.find(user => user.email === this.email && user.password === this.password);
            if (foundUser) {
              localStorage.setItem("user", JSON.stringify(foundUser));
              Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                text: '¡Bienvenido!',
              });
              if (this.email === this.userAdmin.email && this.password === this.userAdmin.password) {
                this.$root.emitter.emit("isAdmin", true);
                this.$router.push({ name: 'listadoProductosAdmin' });
              } else {
                this.$router.push({ name: 'listadoProductos' });
              }
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o contraseña incorrectos',
              });
            }
          })
          .catch(error => {
            console.error("Error:", error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Error al iniciar sesión',
            });
          });
      }
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

.header-login {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

  h3 {
    margin: 0;
  }
}

.btn-cerrar {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.registrarse {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  column-gap: 10px;
}
</style>