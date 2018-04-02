<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="ui container">
        <div class="has-text-centered">
          <img class="logo animated fadeIn" src="./../../assets/images/logo_lucia_400.png">
          <h1 class="title">Welcome to
            <strong>Lucia's Cipher</strong>
          </h1>
          <h2 class="subtitle">
            We specialize in <icon name='feather'></icon> style and <icon name='shield'></icon> security.
          </h2>
        </div>
      </div>
    </div>
    <div class="sigma-body">
      <div class="ui container">
        <div class="has-text-centered">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Fa from '@/components/common/FaIcon'
  import Icon from '@/components/common/Icon'
  export default {
    name: 'Landing',
    components: {
      Fa,
      Icon
    },
    data () {
      return {
        projects: this.$root.pages.landing.projects
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

  .title {
    font-size: 4rem;
  }

  .hero,
  .title,
  .subtitle {
    color: #fff;
  }

  .hero .columns,
  .hero .columns .column {
    margin: auto;
  }

  .logo {
    max-width: 100px;
  }

  @media screen and (max-width: 500px),
  print {
    .logo {
      max-width: 300px;
    }
  }

  @media screen and (max-width: 400px),
  print {
    .logo {
      max-width: 200px;
    }
  }

  @media screen and (max-width: 936px),
  print {
    .columns {
      display: block !important;
    }
  }

</style>
