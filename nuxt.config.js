import axios from 'axios'
require('dotenv').config()
const builtAt = new Date().toISOString()
const siteTitle = 'Nugs Ternopol'
const siteDescription = ''
const siteKeywords = ''

export default {
  head: {
    title: siteTitle || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: siteDescription || process.env.npm_package_description,
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: siteKeywords,
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: siteTitle,
      },
      {
        hid: 'application-name',
        name: 'application-name',
        content: siteTitle,
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:site',
        content: '@nugs-t',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: siteTitle,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        property: 'og:site_name',
        content: siteTitle,
      },
      {
        hid: 'og:url',
        name: 'og:url',
        property: 'og:url',
        content: 'https://nugs-t.com/',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        property: 'og:locale',
        content: 'en-GB',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: siteDescription,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: '/icon.png',
      },
      {
        property: 'og:updated_time',
        content: builtAt,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Overpass&family=Roboto&display=swap',
        rel: 'stylesheet',
      },
    ],
  },

  loading: {
    color: '#7625BC',
    height: '3px',
  },

  manifest: {
    name: siteTitle,
    short_name: siteTitle,
    description: siteDescription,
    theme_color: '#ffffff',
    background_color: '#0084a1',
    display: 'standalone',
    start_url: '/',
    dir: 'auto',
    lang: 'en',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['productivity', 'education', 'portfolio'],
  },

  css: ['normalize.css/normalize.css', '~/assets/css/main.css', '~/assets/scss/variables.scss'],

  components: true,

  plugins: [
    '~/plugins/bootstrap-vue-icon',
    '~/plugins/gsap',
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~/plugins/vue-scrollto', ssr: false },
    { src: '~/plugins/disqus' },
    { src: '~/plugins/mixins' },
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/moment',
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    'nuxt-rfg-icon',
    '@nuxtjs/dotenv',
    'vue-scrollto/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  auth: {
    redirect: {
      home: '/',
      login: '/sign-in',
      callback: '/callback',
      logout: '/signed-out',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/jwt-auth/v1/token',
            method: 'post',
            propertyName: 'token',
          },
          logout: { url: false, method: 'post' },
          user: {
            url: '/wp/v2/users/me?context=edit',
            method: 'get',
            propertyName: '',
          },
        },
        tokenRequired: true,
        tokenType: 'Bearer',
        globalToken: true,
        autoFetchUser: true,
      },
      localRefresh: {
        scheme: 'refresh',
        token: {
          property: 'token.accessToken',
          maxAge: 15,
        },
        refreshToken: {
          property: 'token.refreshToken',
          data: 'refreshToken',
          maxAge: false,
        },
      },
    },
  },

  axios: {
    baseURL: process.env.WORDPRESS_API_URL,
  },

  robots: () => {
    return {
      UserAgent: '*',
      Disallow: ['/sign-in', '/sign-up', '/dashboard', '/dashboard/**'],
      Sitemap: '/sitemap.xml',
    }
  },

  sitemap: {
    hostname: process.env.BASE_URL,
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 15,
    exclude: ['/sign-in', '/sign-up', '/dashboard', '/dashboard/**'],
    sitemaps: [
      {
        path: '/sitemap-articles.xml',
        routes: async () => {
          const { data } = await axios.get(process.env.WORDPRESS_API_URL + '/wp/v2/posts', {
            params: { orderby: 'date', per_page: 100 },
          })
          return data.map((article) => ({
            url: `/news-blogs/${article.slug}`,
            lastmod: article.modified,
          }))
        },
      },
      {
        path: '/sitemap-pages.xml',
        routes: async () => {
          const { data } = await axios.get(process.env.WORDPRESS_API_URL + '/wp/v2/pages', {
            params: { orderby: 'date', per_page: 100 },
          })
          return data.map((page) => ({
            url: `/${page.slug}`,
            lastmod: page.modified,
          }))
        },
      },
      {
        path: '/sitemap-topics.xml',
        routes: async () => {
          const { data } = await axios.get(process.env.WORDPRESS_API_URL + '/wp/v2/categories', {
            params: { per_page: 100 },
          })
          return data.map((topic) => ({
            url: `/${topic.slug}`,
            lastmod: topic.modified,
          }))
        },
      },
      {
        path: '/sitemap-users.xml',
        routes: async () => {
          const { data } = await axios.get(process.env.WORDPRESS_API_URL + '/wp/v2/users', {
            params: { per_page: 100 },
          })
          return data.map((user) => ({
            url: `/${user.slug}`,
            lastmod: user.modified,
          }))
        },
      },
    ],
  },

  build: {
    transpile: ['gsap'],
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ]
      },
    },
  },
}
