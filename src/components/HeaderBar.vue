<template>
  <div class="header">
    <div class="header__menu">
      <ul class="list-menu">
        <li class="item-menu">
          <router-link class="item-menu" to="/"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"/></svg></router-link>
          <p class="hover-menu">Home</p>
        </li>
        <div class="user-carrito-menu">
            <li class="item-menu menu-item">
              <router-link class="item-menu" :to="{ name: 'loginUsuario' }"
                ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg></router-link
              >
              <p class="hover-menu account">Account</p>
            </li>            
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>

<style lang="scss" scoped>
.list-menu {
  display: flex;
  justify-content: space-between;
  height: 70px;
  border-bottom: 1px solid #dcdcdc;
  .menu-item{
    width: 75px;
  }
  .item-menu {
    list-style: none;
    color: black;
    text-decoration: none;
    
    display: flex;
    /* justify-content: space-evenly; */
    align-items: center;

    &:visited {
      color: black;
    }
    router-link {
      text-decoration: none;
      color: black;
    }
    &:hover {
        .hover-menu {
            display: block;
            font-size: 10px;
            padding: 2px;
            border: 1px solid lightslategrey;
            border-radius: 10%;
            background: #dcdcdc61;
            height: 20px;
            width: 40px;
            margin-left: 10px;
            margin-bottom: 0;
        }
        .account{
          width: 45px;
        }
    }
    .hover-menu {
      display: none;
    }

    
}
.user-carrito-menu{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 250px;
}
}
</style>