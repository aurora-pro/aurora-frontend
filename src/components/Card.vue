<template>
  <div class="maker">
    <div class="avatar">
      <figure class="image is-96x96">
        <img :src=avatar :alt=name>
        <div class="overlay" :class=overlay></div>
      </figure>
    </div>
    <div class="maker-content">
      <div class="name">
        <a :href=referral style="height: 29px;">
          <tooltip label="Discord HypeSquad Member" placement="top">
            <div v-if="hype != undefined" class="hypesquad tooltip--rounded"></div>
          </tooltip>
        </a>
        <p class="title is-4">{{ name }}</p>
      </div>
      <div>{{ content }}</div>
    </div>
  </div>
</template>

<script>
import Tooltip from '@/components/Tooltip'
export default {
  name: 'card',
  props: ['avatar', 'hype', 'name', 'content', 'overlay'],
  components: { Tooltip },
  computed: {
    referral: function () {
      return `https://discordapp.com/hypesquad?ref=${this.hype}`
    }
  }
}
</script>

<style scoped>
.maker {
  display: flex;
  margin: auto;
  max-width: 350px;
  padding: 1rem; }
.maker-content { padding: 0 0 0 1rem; }
.maker-content .name { display: flex; }
.maker-content .name a { outline: none; }
.overlay {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.5));
  background-size: 20px;
}
.python { background-image: url("./../assets/AlexUserIcon.png"); }
.js { background-image: url("./../assets/AwakUserIcon.png");}
.ruby { background-image: url("./../assets/ValebuUserIcon.png"); }
.hypesquad {
  width: 42px;
  height: 29px;
  margin-top: -2px;
  text-align: center;
  background-image: url('./../assets/hypesquad.svg'); }
.hypesquad::after {
  width: 205px;
  font-size: 0.85rem;
  background: #1B6F5F; }
.hypesquad::before { border-top-color: #1B6F5F; }
</style>
