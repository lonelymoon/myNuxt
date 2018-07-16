module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '首页',
    titleTemplate: '%s - GameLife 一个简单的游戏社区',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '游戏,社区,game,策略游戏,手游,手机游戏,ios,安卓,android,PC,moba' },
      { hid: 'description', name: 'description', content: 'GameLife,一个简单的游戏社区' }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.cat.net/css?family=Roboto:300,400,500,700|Material+Icons'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css',
    '~/assets/icons/css/all.css'
  ],
  /*
  ** plugins
  */
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/swiper.js'
  ],
  /*
  ** transition
  */
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2196F3' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      '~/plugins/vuetify.js',
      '~/plugins/swiper.js'
    ]
  }
}
