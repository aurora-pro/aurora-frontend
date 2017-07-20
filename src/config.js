import embedImages from '@/assets/embedImages'
import Landing from '@/pages/Landing'
import Sigma from '@/pages/Sigma'
import Commands from '@/pages/Commands'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

var api = 'https://data.auroraproject.xyz/data'
var routing = [
  { path: '*', meta: { title: 'Aurora Project - Not found' }, name: 'ap-notfound', component: NotFound },
  { path: '/', meta: { title: 'Aurora Project' }, name: 'ap-landing', component: Landing },
  { path: '/sigma', meta: { title: 'Sigma: The Database' }, name: 'sigma', component: Sigma },
  { path: '/sigma/commands', meta: { title: 'Sigma: The Database - Commands' }, name: 'sigma-commands', component: Commands },
  { path: '/sigma/about', meta: { title: 'Sigma: The Database - About' }, name: 'sigma-about', component: About }
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
    { id: 'sigma-commands', href: '/sigma/commands', text: 'Commands' },
    { id: 'sigma-about', href: '/sigma/about', text: 'About' },
    { id: '', href: 'https://github.com/aurora-pro', text: 'Github', icon: 'gh' },
    { id: '', href: 'https://discordapp.com/invite/Ze9EfTd', text: 'Discord', icon: 'discord' }
    ]
  },
  pages: {
    landing: {
      projects: [
        {id: 'sigma', title: 'Apex Sigma', description: 'A bot made to bring knowledge to your discord server.', target: '/#sigma'},
        {id: 'bdlinestickers', title: 'BetterDiscord LINE Stickers', description: 'A BetterDiscord plugin to add LINE stickers into emote menu.', target: 'https://github.com/awaken1ng/bd-linestickers'}
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
          { name: 'WaniKani Community Discord', image: 'https://cdn.discordapp.com/icons/219894896172072971/87bfee24d28fbee521278122c4083948.jpg?size=128' },
          { name: 'Candy Kingdom 🍭', image: 'https://cdn.discordapp.com/icons/287978175927943188/bce937b6b9fa62b85ad5e85e844070a3.png?size=128' },  // CK has non break space in the name, which is Alt+0160
          { name: 'Royal Destiny', image: 'https://cdn.discordapp.com/attachments/207939037909090304/332852425616785408/unknown.png' }
        ]
      }
    }
  }
}

export { api, routing, config }
