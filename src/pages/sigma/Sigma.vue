<template>
  <div>
    <section class="hero fadeIn" >
      <div id="snow">
        <div class="hero-body has-text-centered animated fadeIn">
          <img id="sigma-logo" height="390px" class="logo animated fadeIn" src="./../../assets/images/logo_sigma_light.png">
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
import Navigation from '@/components/common/Navigation'
import Card from '@/components/sigma/Card'
import Fa from '@/components/common/FaIcon'
import Icon from '@/components/common/Icon'
import Stat from '@/components/sigma/Stat'
import Loader from '@/components/common/Loader'
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
