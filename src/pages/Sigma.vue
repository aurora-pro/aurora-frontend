<template>
  <div>
    <section class="hero fadeIn" >
      <div id="snow">
        <div class="hero-body has-text-centered animated fadeIn">
          <img id="sigma-logo" height="390px" class="logo animated fadeIn" src="./../assets/logo_sigma_light.png">
          <h1 class="title animated fadeIn">This is <strong id="sigma-name">Sigma</strong>, the Database Giant.</h1>
          <h2 class="subtitle animated fadeIn">A bot made to bring knowledge to your Discord server.</h2>
          <a class="button animated fadeIn" :href=links.invite target="_blank">Add to Discord</a>
          <br />
          <div class="version">
            <span id="sigma-version" class="tag is-white animated fadeIn" v-if=version>Version {{ `${version.major}.${version.minor}.${version.patch}` }}</span>
            <span id="sigma-codename" class="tag is-white animated fadeIn" v-if=codename>Codename {{ codename }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="stats section has-text-centered">
      <div class="fluid">
        <h1 class="title"><icon name="bar-chart-2"></icon> Stats</h1>
        <loader id="loader" inline></loader>
        <div class="columns">
          <div class="column">
            <stat v-for="stat in stats" class="animated fadeIn" :key=stat.label :label=stat.label :value=stat.value :icon=stat.icon></stat>
          </div>
        </div>
      </div>
    </section>
   </div>
</template>

<script>
import $ from 'jquery'
import api from '@/api'
import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import Fa from '@/components/FaIcon'
import Icon from '@/components/Icon'
import Stat from '@/components/Stat'
import Loader from '@/components/Loader'
export default {
  name: 'sigma',
  data () {
    return {
      version: false,
      codename: false,
      links: this.$root.pages.sigma.links,
      stats: []
    }
  },
  components: { Navigation, Card, Fa, Icon, Stat, Loader },
  mounted () {
    api.get('sigma/version', (data) => {
      this.version = data.version
      this.codename = data.codename
    })
    api.get('sigma/stats', (data) => {
      $('#loader').hide()
      this.stats.push({label: 'Active servers', value: data.general.population.guild_count, icon: 'server'})
      this.stats.push({label: 'Active users', value: data.general.population.member_count, icon: 'users'})
      this.stats.push({label: 'Commands used', value: data.general.cmd_count, icon: 'terminal'})
      this.stats.push({label: 'Messages processed', value: data.events.message, icon: 'message-square'})
      this.stats.push({label: 'Songs Played', value: data.special.songs_played, icon: 'play'})
    })
    setInterval(glitcher, 200)
    setInterval(imageGlitcher, 200)
  }
}
function glitchify (txt) {
  var glitchText = ''
  var unicodes = [
    '\u0315', '\u031b', '\u0340', '\u0341',
    '\u0358', '\u0321', '\u0322', '\u0327',
    '\u0328', '\u0334', '\u0335', '\u0336',
    '\u034f', '\u035c', '\u035d', '\u035e',
    '\u035f', '\u0360', '\u0362', '\u0338',
    '\u0337', '\u0361', '\u0489'
  ]
  function isGlitch (c) {
    var i
    for (i = 0; i < unicodes.length; i++) {
      if (c === unicodes[i]) {
        return true
      }
      return false
    }
  }
  for (var i = 0; i < txt.length; i++) {
    if (isGlitch(txt.substr(i, 1))) {
      continue
    }
    glitchText += txt.substr(i, 1)
    var numMid = Math.floor(Math.random() * 4)
    for (var j = 0; j < numMid; j++) {
      glitchText += unicodes[Math.floor(Math.random() * unicodes.length)]
    }
  }
  return glitchText
}
function glitcher () {
  var txtRoll = Math.floor(Math.random() * 10)
  var txt = 'Sigma'
  if (txtRoll === 0) {
    txt = 'Monika'
  }
  var glitchText = glitchify(txt)
  var glitchCodeName = glitchify('Monika')
  $('#sigma-name').text(glitchText)
  $('#sigma-codename').text('Codename ' + glitchCodeName)
}
function imageGlitcher () {
  var normalImg = ['https://i.imgur.com/B3FHWir.png']
  var glitchImages = [
    'https://i.imgur.com/62GdgTa.png',
    'https://i.imgur.com/SEsGUSj.png',
    'https://i.imgur.com/AP3ZAtW.png',
    'https://i.imgur.com/ih3P3Wa.png'
  ]
  var monikaImages = [
    'https://i.imgur.com/wJazxfj.png',
    'https://i.imgur.com/6qqfqC7.png',
    'https://i.imgur.com/eKYJ6QO.png'
  ]
  var imgArrayRoll = Math.floor(Math.random() * 10)
  var imgArray = normalImg
  if (imgArrayRoll === 0) {
    imgArray = monikaImages
  } else if (imgArrayRoll <= 5) {
    imgArray = glitchImages
  }
  var imgChoice = imgArray[Math.floor(Math.random() * imgArray.length)]
  $('#sigma-logo').attr('src', imgChoice)
}
</script>

<style scoped>
.hero-body {
  margin: auto;
  padding-top: 4rem;
  padding-bottom: 2rem; }
.hero .logo {
  max-height: 250px; }
.hero .title, .hero .subtitle {
  color: #fff; }
.tag.is-white {
   color: #1B6F5F; }
.version {
  margin-top: 1em; min-height: 1.68em; }
.version span {
  border-radius: 2px;
  margin: 0 5px; }
.stats .container {
  min-height: 9rem; }
#loader {
  margin: 2rem auto; }
@media screen and (max-width: 911px), print {
  .columns:not(.is-desktop) {
    display: block; }
}
</style>
