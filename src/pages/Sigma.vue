<template>
  <div>
    <section class="hero fadeIn" >
      <div class="hero-body has-text-centered animated fadeIn">
        <img class="logo animated fadeIn" src="./../assets/logo_sigma_light.png">
        <h1 class="title animated fadeIn">This is Sigma, the Database Giant.</h1>
        <h2 class="subtitle animated fadeIn">A bot made to bring knowledge to your Discord server.</h2>
        <a class="button animated fadeIn" :href=links.invite target="_blank">Add to Discord</a>
        <br />
        <div class="version">
          <span class="tag is-white animated fadeIn" v-if=version>Version {{ `${version.major}.${version.minor}.${version.patch}` }}</span>
          <span class="tag is-white animated fadeIn" v-if=codename>Codename {{ codename }}</span>
        </div>
      </div>
    </section>

    <section class="stats section has-text-centered">
      <div class="container">
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
    api.get('version', (data) => {
      this.version = data.version
      this.codename = data.codename
    })
    api.get('stats', (data) => {
      if (data) {
        $('#loader').hide()
        data = data.data.stats
        this.stats.push({label: 'Active servers', value: data.general.population.guilds, icon: 'server'})
        this.stats.push({label: 'Active users', value: data.general.population.members, icon: 'users'})
        this.stats.push({label: 'Commands used', value: data.general.cmd_count, icon: 'terminal'})
        this.stats.push({label: 'Messages processed', value: data.events.message, icon: 'message-square'})
        this.stats.push({label: 'Songs Played', value: data.special.songs_played, icon: 'play'})
      }
    })
  }
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
