<template>
  <div v-if="inline == undefined" :id=id>
    <div class="ui active dimmer">
      <div class="ui loader"></div>
    </div>
  </div>

  <div v-else :id=id class="ui active centered inline loader"></div>
</template>

<script>
  export default {
    name: 'loader',
    props: ['id', 'inline']
  }
</script>

<style>
  .ui.loader { border: none; }
</style>
