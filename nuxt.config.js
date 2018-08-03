require('dotenv').config()
const pkg = require('./package')
const client = require('./plugins/contentful')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1B95E0' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~/node_modules/highlight.js/styles/hopscotch.css', lang: 'css' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/contentful'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
  ],
  markdownit: {
    injected: true,
    use: [
      'markdown-it-highlightjs'
    ]
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-cssnext': {
          features: {
            customProperties: false
          }
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes() {
      return client.getEntries({'content_type': 'post'})
        .then(entries => {
          return entries.items.map(entry => {
            return {
              route: entry.fields.slug,
              payload: entry
            }
          })
        })
    }
  }
}
