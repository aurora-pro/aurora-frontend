<template>
  <div id="donation-segment">
    <div class="ui fluid animated fadeIn about section">
      <h1 class="title has-text-centered">
        <icon name="heart"></icon> Donation</h1>
      <div class="ui container">
        <strong>Sigma</strong> is free to use and open to everyone, her functions, as well as her code. But running Sigma takes
        <strong>money and resources</strong>, so we need your help! We call out to the Discord community to help finance this project.
        No limitations, no VIP features for special users and guilds,
        <strong>full equality</strong> for everyone using Sigma. And we want to keep it that way for as long as possible. Sigma is
        <strong>big</strong>,
        <strong>very</strong> big,
        <strong>huge</strong>
        in fact, a bot with this many features is heavy to take care of. Numerous searches that use various APIs, websites constantly
        being scrapped for data, and
        <strong>a music core that supports over 1040 sources </strong>! Let's not go back to the olden days of when music functions
        were limited to partnered servers and keep it
        <strong>open for everyone</strong>.
      </div>
    </div>
    <div class="ui fluid animated fadeIn about section">
      <h1 class="title has-text-centered">
        <icon name="info"></icon> Contribution Methods</h1>
      <div class="ui container">
        <div class="columns">
          <div class="column">
            <div>
              <h1 class="method-title has-text-centered">
                <i class="fa fa-paypal" aria-hidden="true"></i> PayPal</h1>
              <div class="ui card centered">
                <div class="content">
                  <div class="description">
                    In case you don't want to or can't commit to a monthly subscription but still want to help
                    you can send money <strong>directly via PayPal</strong> and it's PayPal.me page.
                    Every little bit counts and makes a difference. While rewards are limited to only Patreon
                    supporters, donating via PayPal will still reserve you a spot in the donor section with an
                    ashen colored ribbon.
                  </div>
                </div>
                <div class="extra content">
                  <a href="https://www.paypal.me/AleksaRadovic" class="ui button" style="width: 100%;">Donate</a>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div>
              <h1 class="method-title has-text-centered">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 96">
                  <g fill="#363636" fill-rule="evenodd">
                    <path d="M64.1102,0.1004 C44.259,0.1004 28.1086,16.2486 28.1086,36.0986 C28.1086,55.8884 44.259,71.989 64.1102,71.989 C83.9,71.989 100,55.8884 100,36.0986 C100,16.2486 83.9,0.1004 64.1102,0.1004"
                    />
                    <polygon points=".012 95.988 17.59 95.988 17.59 .1 .012 .1" />
                  </g>
                </svg> Patreon</h1>
              <div class="ui card centered">
                <div class="content">
                  <div class="description">
                    The method that helps us
                    <strong>the most</strong> is a monthly subscription. And you can do by using
                    <strong>Patreon</strong>. As a bonus, Patreon supporters get some cool nifty things, such as a
                    <strong>colored ribbon</strong> in the donor section beneath,
                    <strong>special commands</strong> being made for them, they also get to
                    <strong>name Sigma's version</strong>. For the highest tiers I ran out of ideas, so let's negotiate.
                  </div>
                </div>
                <div class="extra content">
                  <a href="https://www.patreon.com/ApexSigma" class="ui button" style="width: 100%;">Subscribe</a>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div>
              <h1 class="method-title has-text-centered">
                <icon name="github"></icon> GitHub</h1>
              <div class="ui card centered">
                <div class="content">
                  <div class="description">
                    Sigma is, as mentioned, very large, and there's pretty much one person only working on her.
                    We would love it if you could lend a hend with Sigma's development.
                    Her repository is on GitHub and fully open source to anyone willing to contribute.
                    While this unfortunatelly yields no notable rewards, it will assure you a <strong>Dev</strong> role
                    on our official server.
                  </div>
                </div>
                <div class="extra content">
                  <a href="https://github.com/lu-ci/apex-sigma-core" class="ui button" style="width: 100%;">Contribute</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ui fluid animated fadeIn donors section">
      <h1 class="title has-text-centered">
        <icon name="award"></icon> Donors</h1>
      <div class="container">
        <loader id="loader" inline style="margin: 1rem 0"></loader>
        <div v-for="donor in donors" class="credit">
          <figure class="image is-96x96">
            <img class="avatar" :src=donor.avatar>
          </figure>
          <ribbon :class="'tier-' + donor.tier"></ribbon>
          <h6>{{ donor.name }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import Fa from '@/components/FaIcon'
  import Navigation from '@/components/Navigation'
  import Card from '@/components/Card'
  import Icon from '@/components/Icon'
  import Ribbon from '@/components/Ribbon'
  import Loader from '@/components/Loader'
  export default {
    name: 'Donate',
    data () {
      return {
        donors: []
      }
    },
    components: {
      Fa,
      Icon,
      Navigation,
      Card,
      Ribbon,
      Loader
    },
    mounted () {
      let api = this.$root.api
      $.get(`${api}/donors`, (data) => {
        $('#loader').hide()
        this.donors = data.donors
      })
    }
  }

</script>

<style scoped>
  .container {
    width: 100%;
  }

  .button {
    color: #000000;
  }

  .about span {
    color: #1B6F5F;
    font-weight: 600;
  }

  .method-title {
    color: #363636;
    font-size: 1.5rem;
    font-weight: 200;
    line-height: 1.125;
  }

  .credits .credits-container,
  .donors .container {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
  }

  .credits .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .credits .container p {
    margin-bottom: 1rem;
  }

  .credit {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 1rem 0.5rem 1rem;
  }

  .credits .credit {
    width: 175px;
  }

  .credit .image,
  .credit h6 {
    align-self: center;
    text-align: center;
  }

  .donors .credit .image {
    position: absolute;
    z-index: 5;
  }

  .avatar {
    border-radius: 5rem;
    background-color: #2C2F33;
  }

  .donors .credit .ribbon {
    left: 54px;
    bottom: 33px;
    width: 96px;
    margin: 0px auto 0;
    padding-top: 95px;
    overflow: hidden;
  }

</style>
