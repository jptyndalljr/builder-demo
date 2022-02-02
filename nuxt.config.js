import smConfig from './sm.json';

if (!smConfig.apiEndpoint) {
  console.warn("Looks like Slice Machine hasn't been bootstraped already.");
}

export default {
  target: 'static',
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000"
  },
  head: {
    title: '22Squared',
    noscript: [{
      innerHTML: "This website requires JavaScript."
    }],
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: 'brand builders, cultural instigators and do gooders whose job is to help brands find their conviction and turn it into action for people.'
    }, {
      name: "robots",
      content: "noindex, nofollow"
    }, {
      hid: "og:url",
      name: "og:url",
      content: process.env.baseUrl
    }],
    link: [{
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    }, {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'true'
    }, {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
    }]
  },
  css: ['@/assets/scss/main.scss'],
  styleResources: {
    scss: ["@/assets/scss/_variables.scss"]
  },
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ["@nuxtjs/style-resources", ['@nuxtjs/prismic', {
    endpoint: smConfig.apiEndpoint || '',
    apiOptions: {
      routes: [{
        type: 'page',
        path: '/:uid'
      }]
    }
  }], ['nuxt-sm']],
  generate: {
    // fallback: '404.html', // Netlify reads a 404.html, Nuxt will load as an SPA
    fallback: true
  },
  build: {
    transpile: ['vue-slicezone', 'nuxt-sm']
  },
};
