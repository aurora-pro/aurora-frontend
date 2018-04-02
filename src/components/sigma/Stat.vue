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
  import Fa from '@/components/common/FaIcon'
  import Icon from '@/components/common/Icon'
  export default {
    name: 'stat',
    props: ['label', 'value', 'icon'],
    components: { Fa, Icon }
  }
</script>
