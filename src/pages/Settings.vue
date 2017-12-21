<template>
  <div class="ui container">
    <div v-if="no_id" class="ui row topsection">
      <div class="ui segment">
        <h1 class="servername">No Server ID Provided</h1>
        <h2 class="statistic">You will be redirected in 3 seconds.</h2>
      </div>
    </div>
    <div v-else>
      <div class="topsection">
        <div class="ui row segment raised">
          <div class="ui row">
            <img class="ui image tiny circular boredered centered" :src="server.Icon">
          </div>
          <div class="ui row centered">
            <h1 class="servername">{{ server.Name }}</h1>
          </div>
        </div>
        <div class="ui container">
          <div class="ui row segment raised">
            <div class="ui row">
              <h1 class="sectname"><icon name="tag"></icon> Information</h1>
            </div>
            <div class="ui row stackable grid">
              <div class="column">
                <h2 class="statistic"><icon name="shield"></icon> Owner<br><img class="ui image avatar" :src="server.Owner.Avatar"> {{ server.Owner.Name }}</h2>
              </div>
              <div class="column">
                <h2 class="statistic"><icon name="users"></icon> Users<br>{{ server.Population.Users }}</h2>
              </div>
              <div class="column">
                <h2 class="statistic"><icon name="command"></icon> Bots<br>{{ server.Population.Bots }}</h2>
              </div>
            </div>
          </div>
          <div class="ui row segment raised">
            <div class="ui row">
              <h1 class="sectname"><icon name="cog"></icon> Settings</h1>
            </div>
            <div class="ui row">
              <div class="ui row">
                <div class="ui segment raised">
                  <div class="ui row stackable grid">
                    <div class="column">
                      <h2 class="ui header"><icon name="message-square"></icon> Greeting Message</h2>
                    </div>
                    <div class="column">
                      <p v-if="settings.Greet" class="ui label tag teal settingstatus">Enabled</p>
                      <p v-else class="ui label tag red settingstatus">Disabled</p>
                    </div>
                  </div>
                  <div class="ui divider"></div>
                  <div class="ui row">
                    <p v-if="settings.GreetMessage"> {{ settings.GreetMessage }} </p>
                    <p v-else> No Greeting Message set </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import api from '@/api'
import Icon from '@/components/Icon'
export default {
  name: 'sigma-settings',
  data () {
    return {
      no_id: false,
      sid: undefined,
      settings: {},
      server: {}
    }
  },
  mounted () {
    let sid = getParameterByName('sid')
    this.sid = sid
    if (sid !== null && sid !== undefined) {
      api.get('db/aurora/ServerDetails/ServerID/' + sid, (data) => {
        if (data) {
          data = data.results[0]
          if (data !== null) {
            this.server = data
          } else {
            this.server = null
            this.settings = null
          }
        }
      })
      api.get('server_settings/' + sid, (data) => {
        if (data) {
          data = data.data.settings
          if (data) {
            this.settings = data
          } else {
            this.settings = null
          }
        }
      })
    } else {
      this.no_id = true
      setTimeout(sendToHome, 3000)
    }
  },
  components: { Icon }
}
function sendToHome () {
  window.location.replace('https://lucia.moe/#/sigma')
}
function getParameterByName (name, url) {
  if (!url) url = window.location.href
  name = name.replace(/[[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  let results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
</script>

<style scoped>
.topsection {
  padding-top: 20px;
  padding-bottom: 20px;
}
.servername {
  font-size: 2rem;
  text-align: center;
}
.sectname {
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 15px;
}
.statistic {
  font-size: 1.1rem;
  text-align: center;
}
.settingstatus {
  float: right;
}
</style>
