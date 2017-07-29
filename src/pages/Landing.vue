<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="columns container">
        <div class="column animated fadeIn">
          <div class="has-text-centered">
            <img class="logo animated fadeIn" src="./../assets/logo_ap.png">
            <h1 class="title">Welcome to the Aurora Project</h1>
            <h2 class="subtitle">
              We specialize in both
              <icon name='feather'></icon> style
              and
              <icon name='shield'></icon> security.
            </h2>
          </div>
        </div>

        <div class="column animated fadeIn">
          <div v-if=projects>
            <h1 class="title has-text-centered"><fa icon='fa-code' size=30></fa> Our projects</h1>
            <tile v-for="project in projects" :key=project.id :id=project.id :title=project.title :description=project.description :target=project.target></tile>
          </div>
          <div v-if=other>
            <h1 class="title has-text-centered" style="margin-top: 1.5rem;"><fa icon='fa-code-fork' size=30></fa> Other</h1>
            <tile v-for="project in other" :key=project.id :id=project.id :title=project.title :description=project.description :target=project.target></tile>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Tile from '@/components/Tile'
import Fa from '@/components/FaIcon'
import Icon from '@/components/Icon'
export default {
  name: 'Landing',
  components: { Tile, Fa, Icon },
  data () {
    return {
      projects: this.$root.pages.landing.projects,
      other: this.$root.pages.landing.others
    }
  }
}
</script>

<style scoped>
.view {
  display: flex;
  width: 100%;
  height: 100%;
  min-height: unset;
  color: white;
}
/*.hero { background: linear-gradient(160deg, #1c816c, #165b4d 50%, #0b372f 75%); }*/
.hero, .tile, .title, .subtitle { color: #fff; }
.hero .columns, .hero .columns .column { margin: auto; }
.logo { max-width: 400px; }
.tile { margin: 10px auto;
  max-width: 700px;
  border-radius: 3px;
  background: unset;
  background-size: cover;
  transition: box-shadow .15s ease-in-out; }
.tile:hover { box-shadow: 0 0 20px rgba(0,0,0,0.75); cursor: pointer; }
.tile.sigma { background-image: url("./../assets/SigmaTile.png"); }
.tile.hastebin { background-image: url("./../assets/HasteTile.png"); }
.tile.bdlinestickers { background-image: url("./../assets/BDLineStickersTile.png"); }
.tile.wkbreezedark { background-image: url("./../assets/WKBDTile.png");}
@media screen and (max-width: 500px), print { .logo {max-width: 300px; } }
@media screen and (max-width: 400px), print { .logo {max-width: 200px; } }
@media screen and (max-width: 936px), print { .columns { display: block !important; } }
</style>
