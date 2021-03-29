import vi from './locales/vi.js'
import en from './locales/en.js'
import { resolve } from 'path'
require('dotenv').config()

export default {
  server: {
    // For support the https server
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, '../private/localhost.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, '../private/localhost.crt'))
    // },
    host: process.env.APP_ROOT,
    port: process.env.APP_PORT
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Ecommnerce',
    title: 'Ecommnerce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'alternate', hreflang: 'x' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap'
      }
    ],
    script: [
      { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' }
      // { src: 'https://unpkg.com/ionicons@5.0.0/dist/ionicons.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    'vuesax/dist/vuesax.css',
    'vant/lib/index.css',
    '~/assets/_style.scss'
  ],

  styleResources: {
    scss: [
      '~/assets/_variables.scss'
    ],
    less: [
      '~/assets/_variables.less'
    ]
  },
  /**
   * Global middleware
   */
  // router: {
  //   middleware: ['auth']
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/detect-mobile' },
    { src: '@/plugins/i18n' },
    { src: '@/plugins/vant' },
    { src: '@/plugins/vuesax' },
    { src: '@/plugins/flows' },
    // { src: '@/plugins/inject-scss' },
    { src: '@/plugins/workspaces', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // components: [
  //   { path: '~/components/awesome/', prefix: 'awesome' }
  // ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  vue: {
    config: {
      ignoredElements: [/^ion-/]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth-next',
    [
      'nuxt-i18n',
      {
        baseUrl: `${process.env.APP_HOST}:${process.env.APP_PORT}`,
        strategy: 'no_prefix',
        // vueI18nLoader: true,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          onlyOnRoot: true,
          alwaysRedirect: true
        },
        locales: [
          {
            code: 'en',
            name: 'English',
            file: 'en.js',
            iso: 'en-US'
          },
          {
            code: 'vi',
            name: 'Vietnamese',
            file: 'vi.js',
            iso: 'vi-VN'
          }
        ],
        lazy: true,
        defaultLocale: 'vi',
        langDir: 'locales/',
        vueI18n: {
          fallbackLocale: 'vi',
          messages: {
            en,
            vi
          }
        }
      }
    ]
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Ecommerce',
      short_name: 'Ecommerce',
      description: 'Ecommerce Platform',
      display: 'fullscreen',
      theme_color: '#282828',
      background_color: '#1F1C1D'
    },
    meta: {
      mobileAppIOS: true,
      appleStatusBarStyle: 'black-translucent',
      nativeUI: true
    }
  },

  auth: {
    token: {
      prefix: 'token.'
    },
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        maxAge: 604800
      }
    },
    localStorage: false,
    redirect: {
      // login: '/login', // redirect user when not connected
      logout: '/login',
      callback: '/callback',
      home: false
    },
    strategies: {
      local: false
      // apollo: {
      //   _scheme: '~/utilities/apollo-schema'
      // }
    },
    rewriteRedirects: true,
    fullPathRedirect: true,
    plugins: ['~/plugins/auth-redirect.js']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vant/es/locale/lang/en-US'
    ],
    postcss: {
      autoprefixer: true,
      preset: {
        stage: 3,
        autoprefixer: {
          grid: 'autoplace',
          flexbox: true
        }
      }
    },
    extractCSS: true,
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '--[emoji]_[hash:base64:4]--'
          // hashPrefix: 'e'
        }
      }
    },

    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'vant',
            style: false
          },
          'vant'
        ]
      ]
    },

    extend (config, ctx) {
      // config.module.rules.push({
      //   test: /\.(ogg|mp3|wav|mpe?g)$/i,
      //   loader: 'file-loader',
      //   options: { name: '[path][name].[ext]' }
      // })
      config.resolve.symlinks = false
      config.devtool = false
      if (ctx && ctx.isClient) {
        config.optimization.splitChunks.maxSize = 512000
        config.optimization.minimize = true
      }
      config.module.rules.push({
        test: /\.(pug)$/,
        loader: 'pug-plain-loader',
        options: {
          basedir: resolve(__dirname, 'templates')
        }
      })
      // config.module.rules.push({
      //   test: /\.less$/,
      //   loader: 'less-loader'
      // })
    },
    // optimization: {
    //   splitChunks: {
    //     //
    //     chunks: 'all',
    //     automaticNameDelimiter: '.',
    //     cacheGroups: {
    //       // libs: {
    //       //   name: 'chunk-libs',
    //       //   test: /[\\/]node_modules[\\/]/,
    //       //   priority: 10,
    //       //   chunks: 'initial' // only package third parties that are initially dependent
    //       // },
    //       // elementUI: {
    //       //   name: 'chunk-ui',
    //       //   priority: 20,
    //       //   test: /[\\/]node_modules[\\/]_?element-ui(.*)/
    //       // },
    //       styles: {
    //         name: 'styles',
    //         test: /\.(css|vue)$/,
    //         chunks: 'all',
    //         enforce: true
    //       },
    //       default: {
    //         reuseExistingChunk: true
    //       }
    //     }
    //   }
    // },
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : '[name].[contenthash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[name].[chunkhash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : '[name][contenthash].css'),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[hash:7].[ext]'),
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]'
    }
  },
  env: {
    API_PORT: process.env.API_PORT || 6789,
    API_ROOT: process.env.API_ROOT || 'localhost',
    /*
     * Change the protocol http or https
     * Change the protocol ws or wss
     */
    API_HOST: process.env.API_HOST || `http://${process.env.API_ROOT}`,
    SOCKET_HOST: process.env.SOCKET_HOST || `ws://${process.env.API_ROOT}`
  },
  less: {
    lessOptions: {
      modifyVars: {
        // overide with less vars
        'tabs-line-height': '48px',
        // or override with less file
        hack: 'true; @import "your-less-file-path.less";'
      }
    }
  }
}
