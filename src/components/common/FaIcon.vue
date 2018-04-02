<template>
  <i class="fa animated fadeIn" :class=icon :style=style aria-hidden="true"></i>
</template>

<script>
export default {
  name: 'fa',
  props: ['icon', 'size', 'pad'],
  data () {
    return {
      style: { fontSize: 'inherit', paddingTop: null }
    }
  },
  mounted (event) {
    let size = this.size
    let pad = this.pad
    if (typeof size !== 'undefined') {
      this.style.fontSize = size + 'px'
    }
    if (typeof pad !== 'undefined') {
      this.style.paddingTop = pad + 'px'
    }
  }
}
</script>
