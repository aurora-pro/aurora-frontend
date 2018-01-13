<template>
  <nav class="nav">
    <div class="nav-left">
      <a class="nav-item hoverline logo" href="/#">
        <img src="./../assets/logo_sigma.png" alt="">
      </a>
      <a class="nav-item hoverline" href="/#sigma">Home</a>
      <a v-for="item in navmenu.left" class="nav-item hoverline" :class=item.class :style=item.style v-on:click=item.method>{{ item.text }}</a>
    </div>

    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <span class="nav-toggle" v-on:click="toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <div class="nav-right nav-menu">
      <a v-for="item in navmenu.right" class="nav-item hoverline" :href=item.href>{{ item.text }}</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    toggle: (event) => {
      event.target.classList.toggle('is-active')
      document.querySelector('.nav-menu').classList.toggle('is-active')
    }
  },
  data () {
    return {
      navmenu: this.$root.sigma.navmenu.common
    }
  },
  mounted () {
    let page = document.getElementById('app').firstElementChild.id
    let menu = this.$root.sigma.navmenu.conditional[page]
    if (typeof menu !== 'undefined') {
      this.navmenu.left = this.$root.sigma.navmenu.conditional[page].left
    } else {
      this.navmenu.left = []
    }
  }
}
</script>

<style scoped>
.nav { padding: 5px; }
.nav-toggle { height: auto; }
.nav a.nav-item { outline: none; }
.nav a.nav-item.logo.hoverline:hover:before { right: 100%; }

.hoverline {
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden; }

.hoverline:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: #1B6F5F;
  height: 2px;
  transition: right .3s ease-out; }

.hoverline:hover:before,
.hoverline:focus:before,
.hoverline:active:before {
  right: 0; }
</style>
