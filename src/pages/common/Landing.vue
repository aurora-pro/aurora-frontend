<template> 
  <section class="hero is-fullheight"> 
    <div class="hero-body"> 
      <div class="columns container"> 
        <div class="column animated fadeIn"> 
          <div class="has-text-centered"> 
            <img class="logo animated fadeIn" src="./../../assets/images/logo_lucia_400.png"> 
            <h1 class="title">Welcome to <strong>Lucia's Cipher</strong></h1> 
            <h2 class="subtitle"> 
              We specialize in 
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
import Tile from '@/components/common/Tile'
import Fa from '@/components/common/FaIcon'
import Icon from '@/components/common/Icon'
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
/*.hero { background: linear-gradient(160deg, #450099, #2e0066 50%, #170033 75%); }*/ 
.hero, .tile, .title, .subtitle { color: #fff; } 
.hero .columns, .hero .columns .column { margin: auto; } 
.logo { max-width: 400px; } 
.tile { margin: 10px auto; 
  max-width: 700px; 
  color: #1B6F5F; 
  border-radius: 3px; 
  background: unset; 
  background-size: cover; 
  transition: box-shadow .15s ease-in-out; 
  -o-transition:.5s; 
  -ms-transition:.5s; 
  -moz-transition:.5s; 
  -webkit-transition:.5s; 
  transition:.5s; 
} 
.tile:hover { 
  box-shadow: 0 0 20px rgba(0,0,0,0.75); 
  cursor: pointer; 
} 
.tile { background: #fff; }
.tile.sigma:hover { color: #450099; } 
.tile.hastebin:hover { color: #2980B9; } 
.tile.bdlinestickers:hover { color: #00b84f; } 
.tile.wkbreezedark:hover { color: #D35400; } 
.tile.kyanitecoll:hover { color: #0066ff; }
.tile.discordrpc:hover { color: #6b3900; }
@media screen and (max-width: 500px), print { .logo {max-width: 300px; } } 
@media screen and (max-width: 400px), print { .logo {max-width: 200px; } } 
@media screen and (max-width: 936px), print { .columns { display: block !important; } } 
</style> 
