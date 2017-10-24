<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="header in headers" v-bind:key="header">{{ header }}</th>
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
              {{row.user.Name}}<!-- <span class="discriminator">{{row.user.Discriminator}}</span> -->
            </div>
          </div>
        </td>
        <td v-if="what === 'currency'">{{row.currency}} <!--<span class="symbol">⚜ Kud</span>--></td>
        <td v-else-if="what === 'experience'">{{row.experience}}</td>
        <td v-else-if="what === 'cookies'">{{row.cookies}}</td>
      </tr>
    </tbody>

  </table>


  <!-- <div v-if="inline == undefined" :id=id class="ui segment">
    <div class="ui active dimmer">
      <div class="ui loader"></div>
    </div>
  </div>

  <div v-else :id=id class="ui active centered inline loader"></div> -->
</template>

<script>
  export default {
    name: 'leaderboard',
    props: ['what', 'data', 'headers']
    // data () {
      // return {
      // }
    // },
    // mounted () {
      // console.log(this.headers)
      // let headers = {
      //   'currency': ['№', 'Name', 'Currency'],
      //   'experience': ['№', 'Name', 'Experience'],
      //   'cookies': ['№', 'Name', 'Cookies']
      // }
      // console.log(this.what)
      // console.log(headers[this.what])
      // this.headers = headers[this.what]
      // this._data = this.data
    // }
  }
</script>

<style scoped>
/* User profile */
.user {
  display: flex;
  align-items: center;
}
.user .avatar {
  margin: unset;
}
.user .avatar img {
  border-radius: 50%;
}
.user .name {
  padding-left: 1rem;
}
/* .user .discriminator::before { content: '#' }
.user .discriminator {
  color: gray;
  font-size: 80%;
} */

.table td {
  vertical-align: middle;
}

.symbol {
  float: right;
}

</style>
