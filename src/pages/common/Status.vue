<template>
  <div>
    <loader id="loader"></loader>
    <div class="ui container fadeIn" style="width: auto;">
      <div class="ui segment">
        <h1 class="title"><icon name="server"></icon> Service Status</h1>
        <div class="ui row styled raised segment animated fadeIn" v-for="service in services" v-bind:key="service.name">
          <h2>{{ service.name }}</h2>
          <h3 class="ui header">{{ service.desc }}</h3>
          <div v-if="service.status === 'active (running)'" class="ui blue horizontal label">
            {{ service.status }}
          </div>
          <span v-else class="ui red horizontal label">{{ service.status }}</span>
          <span class="ui horizontal label">PID {{ service.pid }}</span>
          <span class="ui horizontal label exec">{{ service.executable }}</span>
          <span class="ui horizontal label">{{ service.tasks }}</span>
          <span class="ui horizontal label">{{ service.memory }}</span>
          <span class="ui horizontal label">{{ service.cpu_time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from '@/components/common/Icon'
  import api from '@/api'
  export default {
    name: 'Landing',
    components: { Icon },
    data () {
      return {
        services: []
      }
    },
    mounted () {
      api.get('luci/status', (data) => {
        this.services = data
      })
    }
  }
</script>

<style scoped>
.hero {
  position: fixed;
  width: 100%;
  height: calc(100% - 3.5rem);
}
.container {
  margin-top: 4rem;
}
.container h1 {
  color: #000;
}
.row h2 {
  font-size: 20px;
}
.row h2, h3 {
  text-transform: uppercase;
}
.label {
  text-transform: capitalize;
  margin: 4px 4px 4px 0 !important;
}
.exec {
  text-transform: uppercase;
}
</style>
