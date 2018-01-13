<template>
  <div id="404">
    <div class="container has-text-centered">
      <div class="animated fadeIn content">
        <h1>{{this.error_title}}</h1>
        <p>
          {{this.error_description}}
        </p>
				<!-- Fox -->
        <div v-if="this.glitch" id="errimg">
          <img src="https://i.imgur.com/tyolAsH.png" width="300px" height="300px">
        </div>
        <div v-else id="errimg">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid " class="svg" style="width: 256px; height: 256px;">
            <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
              <path class="node" d="M900 2503 c-105 -16 -263 -66 -318 -100 -92 -57 -137 -89 -186 -134 -46 -42 -61 -50 -81 -45 -40 10 -29 -12 18 -35 47 -24 87 -57 87 -73 0 -20 18 -39 29 -32 15 10 -1 41 -46 87 l-35 36 34 20 c143 85 492 140 662 104 183 -39 376 -183 462 -343 39 -73 39 -73 38 -183 -3 -193 -60 -357 -174 -500 -54 -67 -179 -190 -255 -250 -27 -22 -52 -42 -55 -46 -3 -3 -22 -15 -42 -28 -51 -31 -110 -99 -148 -174 -27 -51 -34 -77 -38 -144 -3 -51 -1 -83 5 -83 6 0 13 33 16 74 11 150 102 270 246 325 141 53 307 189 423 346 70 93 155 266 189 380 18 61 23 104 23 185 0 96 -2 109 -29 160 -95 182 -257 334 -425 400 -117 46 -296 70 -400 53z"></path>
              <path class="node" d="M2606 2390 c-8 -73 -38 -162 -71 -212 -34 -51 -93 -82 -213 -112 -56 -14 -124 -35 -150 -48 -99 -49 -250 -220 -296 -337 -46 -118 -58 -207 -66 -491 -8 -295 -14 -326 -75 -456 -80 -170 -250 -310 -422 -348 -103 -23 -175 -21 -273 8 -24 8 -24 7 -4 -7 81 -61 373 -60 514 0 164 70 226 110 347 224 95 90 132 141 143 197 15 81 -2 220 -44 347 -82 252 -87 467 -14 620 31 65 70 125 97 150 l22 19 -8 -54 c-4 -30 -8 -107 -8 -170 0 -102 3 -120 25 -164 27 -54 50 -71 50 -37 0 45 54 127 135 206 76 74 205 160 205 136 0 -5 -4 -12 -9 -15 -5 -3 -12 -32 -16 -63 -4 -32 -13 -73 -21 -92 -8 -19 -12 -36 -9 -39 12 -13 92 57 116 102 l26 48 27 -47 c50 -91 66 -168 66 -326 1 -181 14 -166 30 33 13 156 4 382 -25 658 -15 137 -53 330 -66 330 -3 0 -9 -27 -13 -60z"></path>
              <path class="node" d="M187 2274 c-4 -4 -7 -24 -7 -45 0 -37 15 -59 29 -43 9 11 -12 97 -22 88z"></path>
              <path class="node" d="M228 2239 c-7 -20 6 -62 20 -67 16 -5 15 27 -2 57 -9 16 -14 19 -18 10z"></path>
              <path class="node" d="M749 2137 c-2 -11 -5 -21 -12 -37 -11 -28 -37 -162 -37 -190 0 -40 22 -55 45 -30 16 18 17 24 5 59 -10 31 -10 56 -1 117 6 42 9 79 6 82 -3 3 -6 2 -6 -1z"></path>
              <path class="node" d="M196 2108 c14 -49 34 -85 67 -122 47 -55 55 -30 7 28 -21 25 -44 62 -50 81 -13 38 -36 50 -24 13z"></path>
              <path class="node" d="M596 2028 c-10 -40 -16 -91 -14 -113 3 -35 6 -40 28 -40 20 0 24 4 21 20 -2 11 -4 62 -5 113 0 50 -3 92 -6 92 -4 0 -14 -33 -24 -72z"></path>
              <path class="node" d="M400 1624 c0 -114 7 -144 32 -144 4 0 15 11 24 24 14 23 14 27 -6 54 -14 19 -25 54 -31 102 -5 40 -11 75 -14 78 -3 3 -5 -49 -5 -114z"></path>
            </g>
          </svg>
        </div>
        <div v-if="this.glitch" id="poemcont">
          <h1>{{this.poem.title}}</h1>
          <p class="ui container">{{this.poem.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ap-notfound',
  data () {
    // var roll = Math.floor((Math.random() * 2) + 0)
    var roll = 0
    var data = null
    console.log(roll)
    if (roll === 0) {
      data = {
        poem: {
          title: 'Error 404.',
          content: 'Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of my head. Get out of\nGet.\nOut.\nOf.\nMy.\nHead.\n\n\n\nGet out of my head before I do what I know is best for you.\nGet out of my head before I listen to everything she said to me.\nGet out of my head before I show you how much I love you.\nGet out of my head before I finish writing this poem.\n\n\n\n\n\n\n\nBut a poem is never actually finished.\nIt just stops moving.'
        },
        glitch: true,
        error_title: '%',
        error_description: 'Hxppy thxughts.'
      }
    } else {
      data = {
        glitch: false,
        error_title: '404',
        error_description: 'Not found. You seem to have gotten lost.'
      }
    }
    return data
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
</style>
