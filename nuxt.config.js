export default {
  // The env property(https://nuxtjs.org/api/configuration-env/)
  env: {
    webUrl: 'https://misterabdul.github.io',
    blogUrl: 'https://misterabdul.wordpress.com/',
    emailUrl: 'abdoelrachmad@gmail.com',
    githubUrl: 'https://github.com/misterabdul',
    linkedinUrl: 'https://www.linkedin.com/in/abdulpasaribu/',
    twitterUrl: 'https://twitter.com/abdulrpasaribu',
    instagramUrl: 'https://www.instagram.com/abdulrahmadpasaribu/',
    facebookUrl: 'https://www.facebook.com/abdulrahmadpasaribu',
  },

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Abdul Pasaribu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Web Abdul',
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'abdul,rahmad,pasaribu,abdulpasaribu',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Abdul Rahmad Pasaribu, abdoelrachmad@gmail.com',
      },
      {
        hid: 'language',
        name: 'language',
        content: 'ID',
      },
      {
        hid: 'url',
        name: 'url',
        content: 'https://misterabdul.github.io',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Abdul Rahmad Pasaribu',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://misterabdul.github.io/web_abdul.png',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://misterabdul.github.io',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Abdul Rahmad Pasaribu',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Web Abdul',
      },
      {
        hid: 'og:email',
        name: 'og:email',
        content: 'abdoelrachmad@gmail.com',
      },
      {
        hid: 'og:locality',
        name: 'og:locality',
        content: 'Medan',
      },
      {
        hid: 'og:region',
        name: 'og:region',
        content: 'ID',
      },
      {
        hid: 'og:country-name',
        name: 'og:country-name',
        content: 'Indonesia',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Abdul Rahmad Pasaribu',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://misterabdul.github.io/web_abdul.png',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Gambar Web Abdul',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@abdulpasaribu',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@abdulpasaribu',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    htmlAttrs: {
      style: 'min-height:100%',
      lang: 'id',
    },
    bodyAttrs: {
      class: 'has-navbar-fixed-top',
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/style/general.css',
    '~/assets/style/colors.css',
    '~/assets/style/mobile.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bulma',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
        ],
      },
    ],

    'cookie-universal-nuxt',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
}
