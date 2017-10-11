<template>
  <div id="app" v-bind:class=classObject>
    <navigation></navigation>
    <router-view class="view"></router-view>
    <tail></tail>
  </div>
</template>

<script>
import navigation from '@/components/nav'
import tail from '@/components/Footer'

export default {
  name: 'app',
  components: { navigation, tail },
  data () {
    return {
      classObject: {
        light: true,
        dark: false
      }
    }
  },
  mounted () {
    let app = this
    let bus = this.$root.eventBus
    let preloader = document.getElementById('preloader')
    // Fade out the preloader
    preloader.classList.add('animated', 'fadeOut')
    preloader.getElementsByClassName('dimmer')[0].classList.add('animated', 'fadeOut')
    preloader.getElementsByTagName('section')[0].classList.add('animated', 'fadeOut')
    bus.$on('backdrop-light', function (style) {
      app.classObject.light = true
      app.classObject.dark = false
    })
    bus.$on('backdrop-dark', function (style) {
      app.classObject.dark = true
      app.classObject.light = false
    })
    // Make sure the backdrop is dark on first load
    if (this.$route.name === 'ap-landing') {
      app.classObject.dark = true
      app.classObject.light = false
    }
  }
}
</script>

<style>
html { overflow-y: initial !important; } /* Reset vertical overflow */
body, button, input, select, textarea, .ui, [class*="tooltip--"]::after {
  font-family: 'Exo 2',
               BlinkMacSystemFont,
               -apple-system,
               "Segoe UI",
               "Roboto",
               "Oxygen",
               "Ubuntu",
               "Cantarell",
               "Fira Sans",
               "Droid Sans",
               "Helvetica Neue",
               "Helvetica",
               "Arial",
               'Meiryo', /* Japanese font for proper Japanese rendering */
               sans-serif
               !important; }
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh; /* Stretch the application into fullscreen */
  background-size: cover;
  background-attachment: fixed; }
/* Backdrop colors */
.light { background-image: linear-gradient(160deg, #18ae90, #16826c 50%, #145246 75%); }
.dark { background-image: linear-gradient(160deg, #1c816c, #165b4d 50%, #0b372f 75%); }
.view {
  flex: 1;
  margin-top: 3rem; }
.fa { vertical-align: baseline; } /* Center font awesome icons */
.hero { background: unset; } /* Unset background for hero to be able to see the backdrop */

/* Style the buttons */
a.button {
  transition: all .15s ease-in-out;
  color: #1B6F5F;
  border-color: #FFF; }
a.button:focus,
a.button:hover {
  color: #FFF;
  background-color: #1ABC9C;
  border-color: #1ABC9C; }

/* Webkit scroller */
::-webkit-scrollbar {
  background-color: #F1F1F1;
  border-left: 1px solid #fff; }
::-webkit-scrollbar-thumb {
  background-color: #CDCDCD;
  border: 3px solid #F1F1F1; }
::-webkit-scrollbar-thumb:hover { background-color: #A8A8A8; }

/* I don't remember why I put this here */
.ui {
  font-size: 14px;
  line-height: 20px; }
.ui .loader { border: unset; } /* Fix the Semantic's loader */
</style>
