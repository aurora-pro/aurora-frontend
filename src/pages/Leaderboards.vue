<template>
  <div id="404">
    <div class="container has-text-centered">
      <div class="animated fadeIn content">

        <section class="stats section has-text-centered">
          <nav class="switch">
            <!-- <div class="container"> -->
              <div class="main tabs">
                <a class="nav-item is-active" data-what="currency">
                  Currency
                </a>
                <a class="nav-item" data-what="experience">
                  Experience
                </a>
                <a class="nav-item" data-what="cookies">
                  Cookies
                </a>
              </div>
              <div class="sub tabs">
                <a class="nav-item is-active" data-where="global">
                  Global
                </a>
                <!--
                <a class="nav-item" data-where="local">
                  Local
                </a>
                -->
              </div>
            <!-- </div> -->
          </nav>

          <leaderboard
            :what="what"
            :headers="headers"
            :data="data"
          ></leaderboard>
          <!-- <table class="table">
            <thead>
              <tr>
                <th>№</th>
                <th>Name</th>
                <th>Currency</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in data" v-bind:key="row.user.UserID">
                <td>{{index + 1}}</td>
                <td>
                  <div class="user">
                    <p class="avatar image is-48x48">
                      <img v-bind:src="row.user.Avatar">
                    </p>
                    <div class="name">
                      {{row.user.Name}}<span class="discriminator">{{row.user.Discriminator}}</span>
                    </div>
                  </div>
                </td>
                <td>{{row.currency}} <span class="symbol">Kud</span></td>
              </tr>
            </tbody>
          </table> -->

        </section>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import api from '@/api'
import leaderboard from '@/components/Leaderboard'

export default {
  name: 'sigma-leaderboards',
  components: { leaderboard },
  data () {
    return {
      // data: {
      //   'currency': {
      //     'global': null,
      //     'local': null
      //   },
      //   'experience': {
      //     'global': null,
      //     'local': null
      //   },
      //   'cookies': {
      //     'global': null,
      //     'local': null
      //   }
      // }
      what: 'currency',
      headers: ['№', 'Name', 'Currency'],
      data: []
    }
  },
  mounted () {
    let headers = {
      'currency': ['№', 'Name', 'Currency'],
      'experience': ['№', 'Name', 'Experience'],
      'cookies': ['№', 'Name', 'Cookies']
    }

    // Init the switcher
    $('.switch .main.tabs .nav-item').click((event) => {
      $('.switch .main.tabs .nav-item').removeClass('is-active')
      let what = $(event.target).attr('data-what')
      this.what = what
      this.headers = headers[what]
      api.get(`${what}/global`, (data) => {
        if (what === 'cookies') {
          this.data = data.data.leaderboard
          console.log(this.data)
        } else {
          this.data = data.data
        }
      })
      $(event.target).addClass('is-active')
    })
    $('.switch .sub.tabs .nav-item').click((event) => {
      $('.switch .sub.tabs .nav-item').removeClass('is-active')
      // let what = $(event.target).attr('data-what')
      $(event.target).addClass('is-active')
    })
    api.get('currency/global', (data) => {
      if (data.response.code === 200) {
        this.data = data.data
      }
    })
  },
  methods: {
    queryData: function (what, where) {
      api.get(`${what}/${where}`, (data) => {
        if (data.response.code === 200) {
          return data.data
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.view {
  display: flex;
  align-items: center; }
.container {
  margin: 2rem auto; }
.content, .content h1 {
  color: #ffffff; }
.content p {
	margin-bottom: 0; }



/* Tab switcher */
.switch .tabs {
  display: inline-flex;
  width: 100%;
}
.switch .main.tabs .nav-item { width: 33%; }
.switch .sub.tabs .nav-item { width: 100%; }

.switch .tabs .nav-item.is-active {
  border-bottom: 3px solid #18AA8D;
  /* color: #00d1b2; */
  padding-bottom: calc(0.5rem - 3px);
}

/* User profile
.user {
  display: flex;
  align-items: center;
}
.user .avatar img {
  border-radius: 50%;
}
.user .name {
  padding-left: 1rem;
}
.user .discriminator::before { content: '#' }
.user .discriminator {
  color: gray;
  font-size: 80%;
}

.table td {
  vertical-align: inherit;
}

.symbol {
  float: right;
} */





</style>
