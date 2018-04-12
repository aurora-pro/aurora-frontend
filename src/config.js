import embedImages from '@/assets/scripts/embedImages'
import Landing from '@/pages/common/Landing'
import Sigma from '@/pages/sigma/Sigma'
import Commands from '@/pages/sigma/Commands'
import About from '@/pages/sigma/About'
import NotFound from '@/pages/common/NotFound'
import Leaderboards from '@/pages/sigma/Leaderboards'
import Donate from '@/pages/sigma/Donate'

var api = 'https://api.lucia.moe/rest'
// var api = 'http://127.0.0.1:8081/rest'
var routing = [
  { path: '*', meta: { title: 'Lucia\'s Cipher - Not found' }, name: 'ap-notfound', component: NotFound },
  { path: '/', meta: { title: 'Lucia\'s Cipher' }, name: 'ap-landing', component: Landing },
  { path: '/sigma', meta: { title: 'Lucia\'s Cipher - Sigma: The Database Giant' }, name: 'sigma', component: Sigma },
  { path: '/sigma/commands', meta: { title: 'Lucia\'s Cipher - Sigma Commands' }, name: 'sigma-commands', component: Commands },
  { path: '/sigma/about', meta: { title: 'Lucia\'s Cipher - Sigma Information' }, name: 'sigma-about', component: About },
  { path: '/sigma/leaderboards', meta: { title: 'Lucia\'s Cipher - Sigma Leaderboards' }, name: 'sigma-leaderboards', component: Leaderboards },
  { path: '/sigma/donate', meta: { title: 'Lucia\'s Cipher - Sigma Donation Information' }, name: 'sigma-donation', component: Donate }
]
var config = {
  api: api,
  store: null,
  navigation: {
    left: [
      { id: 'ap-landing', href: '/', text: 'Home' },
      { id: 'sigma-main', href: '/sigma', img: embedImages.logo.navigation }
    ],
    conditional: null,
    // Leave IDs empty for non router links
    right: [
      { id: 'sigma-about', href: '/sigma/about', text: 'About' },
      { id: 'sigma-donate', href: '/sigma/donate', text: 'Donate' },
      { id: 'sigma-commands', href: '/sigma/commands', text: 'Commands' },
      { id: 'sigma-leaderboards', href: '/sigma/leaderboards', text: 'Leaderboards' },
      { id: '', href: 'https://github.com/lu-ci/apex-sigma-core', text: 'Github', icon: 'gh' },
      { id: '', href: 'https://discordapp.com/invite/aEUCHwX', text: 'Discord', icon: 'discord' }
    ]
  },
  pages: {
    landing: {
      projects: [
        {id: 'sigma', title: 'Apex Sigma', description: 'A bot made to bring knowledge to your discord server.', target: '/sigma'},
        {id: 'bdlinestickers', title: 'BetterDiscord LINE Stickers', description: 'A BetterDiscord plugin to add LINE stickers to the emote menu.', target: 'https://github.com/awaken1ng/bd-linestickers'},
        {id: 'wkbreezedark', title: 'WaniKani Breeze Dark', description: 'A dark Stylish theme for WaniKani based on KDE Breeze.', target: 'https://gitlab.com/valeth/wanikani-breeze-dark'},
        {id: 'kyanitecoll', title: 'Kyanite Collector', description: 'The expandable, modular, art gallery collector.', target: 'https://github.com/lu-ci/kyanite-collector'},
        {id: 'discordrpc', title: 'Discord RPC Client', description: 'An RPC client library for Discord rich presence connections.', target: 'https://gitlab.com/valeth/discord-rpc-client.rs'}
      ],
      others: null
    },
    sigma: {
      links: {
        invite: 'https://discordapp.com/oauth2/authorize?client_id=216437513709944832&scope=bot&permissions=8'
      },
      about: {
        makers: [
          { name: 'Alex', hype: 'lsCPcvjHNr', about: 'The lead developer and original creator of Sigma. The resident asshat of the group, pretty fun though.', avatar: 'https://i.imgur.com/P4G0fqE.gif', overlay: 'python' },
          { name: 'Awakening', about: 'A crazy Russian hacker. Talks the least, seriously silent like a shadow but has the biggest personality!', avatar: 'https://www.gravatar.com/avatar/77467fb9f03e2c5ebdccbc8a548a1147.png?s=128', overlay: 'js' },
          { name: 'Valeth', about: "Just popped up out of nowhere and started changing all the code! I haven't regretted it yet. He likes dry stuff.", avatar: 'https://www.gravatar.com/avatar/17d3a152085c9a4d08254acc7ee5d06e.png?s=128', overlay: 'ruby' }
        ],
        credits: [
          { name: 'WaniKani Community Discord', image: 'https://i.imgur.com/KmDVZ9a.jpg' },
          { name: 'Candy Kingdom 🍭', image: 'https://i.imgur.com/C9iRSmZ.png/1' },  // CK has non break space in the name, which is Alt+0160
          { name: 'Royal Destiny', image: 'https://i.imgur.com/gzhXXCD.png' }
        ]
      }
    }
  }
}

export { api, routing, config }
