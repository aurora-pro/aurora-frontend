<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="header in headers" v-bind:key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody v-if="data">
      <tr v-for="(row, index) in data" v-bind:key="row.user.UserID">
        <td>{{index + 1}}</td>
        <td>
          <div class="user">
            <p class="avatar image is-48x48">
              <img v-bind:src="row.user.Avatar">
            </p>
            <div class="name">
              {{row.user.Name}}
            </div>
          </div>
        </td>
        <td>{{row.value}}</td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td>{{index + 1}}</td>
        <td>
          <div class="user">
            <p class="avatar image is-48x48">
              <img src="https://i.imgur.com/QnYSlld.png">
            </p>
            <div class="name">
              None
            </div>
          </div>
        </td>
        <td>0</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'leaderboard',
    props: ['what', 'data', 'headers']
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
.table td {
  vertical-align: middle;
}
.symbol {
  float: right;
}
</style>
