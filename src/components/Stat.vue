<template>
  <div class="ui statistic">
    <div class="value">
      <span class="stat-number">{{ value }}</span> <icon v-if=icon :name=icon></icon>
    </div>
    <div class="label">
      {{ label }}
    </div>
  </div>
</template>

<script>
  import Fa from '@/components/FaIcon'
  import Icon from '@/components/Icon'
  export default {
    name: 'stat',
    props: ['label', 'value', 'icon'],
    components: { Fa, Icon }
  }
</script>
