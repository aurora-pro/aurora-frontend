<template>
  <div>
    <section class="animated fadeIn about section">
      <h1 class="title has-text-centered"><icon name="info"></icon> About Sigma</h1>
      <div class="container">
        <span>Apex Sigma</span> was created to connect to as many API endpoints as possible to bring you large amounts of data you might possibly need. <span>Wikipedia</span> articles, <span>reddit</span> posts, funny cat vidoes from <span>YouTube</span>, tasty <span>recipes</span>, <span>dictionary</span> definition, both official and urban, <span>anime</span> data and loads more. Alongside a plethora of search capabilities, Sigma has intuitive <span>moderation</span> modules to help you organize, optimize, and control, your <span>Discord</span> server. To help your community liven up and grow while having fun, it also comes with numerous fun <span>utilities</span>, <span>minigames</span> and user <span>interactions</span> for your enjoyment.
      </div>
    </section>

    <section class="animated fadeIn makers section">
      <h1 class="animated fadeIn title has-text-centered"><icon name="flag"></icon> Developers</h1>
      <div class="container">
        <div class="columns">
          <div class="column" v-for="maker in makers">
            <card
              class="animated fadeIn"
              :key=maker.name
              :avatar=maker.avatar
              :overlay=maker.overlay
              :hype=maker.hype
              :name=maker.name
              :content=maker.about></card>
          </div>
        </div>
      </div>
    </section>

    <section class="animated fadeIn credits section">
      <h1 class="title has-text-centered"><icon name="star"></icon> Credit Where Credit Is Due</h1>
      <div class="container">
        <p class="has-text-centered">An enormous thank you to these communities that provided help and support.</p>
        <div class="credits-container">
          <div v-for="credit in credits" class="credit">
            <figure class="image is-96x96">
              <img :src=credit.image>
            </figure>
            <h6>{{ credit.name }}</h6>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import Icon from '@/components/Icon'
import Ribbon from '@/components/Ribbon'
import Loader from '@/components/Loader'

export default {
  name: 'sigma',
  data () {
    return {
      makers: this.$root.pages.sigma.about.makers,
      credits: this.$root.pages.sigma.about.credits,
      donors: []
    }
  },
  components: { Navigation, Card, Icon, Ribbon, Loader }
}
</script>

<style scoped>
.container {
  width: 100%; }
.about span {
  color: #1B6F5F;
  font-weight: 600; }

.credits .credits-container,
.donors .container {
  display: flex;
  flex-flow: wrap;
  justify-content: center; }

.credits .container {
  display: flex;
  flex-direction: column;
  align-items: center; }
.credits .container p {
  margin-bottom: 1rem; }
.credit {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0.5rem 1rem; }
.credits .credit { width: 175px; }
.credit .image,
.credit h6 {
  align-self: center;
  text-align: center; }
.donors .credit .image {
  position: absolute;
  z-index: 5; }
img {
  border-radius: 5rem;
  background-color: #2C2F33; }
.donors .credit .ribbon {
  left: 54px;
  bottom: 33px;
	width: 96px;
	margin: 0px auto 0;
  padding-top: 95px;
	overflow: hidden; }
</style>
