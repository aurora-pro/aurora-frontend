<template>
  <i v-if="animated == undefined" :class=icon></i>
  <i v-else class="animated fadeIn" :class=icon></i>
</template>

<script>
export default {
  name: 'icon',
  props: ['name', 'animated'],
  computed: {
    icon: function () {
      return 'icon-' + this.name
    }
  }
}
</script>
