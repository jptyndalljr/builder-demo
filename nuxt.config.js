import smConfig from './sm.json';

if (!smConfig.apiEndpoint) {
  console.warn("Looks like Slice Machine hasn't been configured already.");
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
    link: [
	{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
	script: [
     	{ src: "https://static.cdn.prismic.io/prismic.js?new=true&repo=22sq", async: true, defer: true }
    ]

  },
  css: ['@/assets/scss/main.scss'],
  styleResources: {
    scss: ["@/assets/scss/_variables.scss"]
  },
  plugins: [{
    src: "@/plugins/prismicLink",
    ssr: false
  }],
  components: true,
  buildModules: ['@nuxt/postcss8', '@nuxtjs/sitemap', '@nuxtjs/fontawesome', '@nuxtjs/google-fonts'],
  modules: ["@nuxtjs/style-resources", ['@nuxtjs/prismic', {
    endpoint: smConfig.apiEndpoint || "",
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer'
  }], ['nuxt-sm'], '@nuxtjs/gtm'],
  generate: {
    fallback: true
  },
  build: {
    transpile: ['vue-slicezone', 'nuxt-sm'],
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js',
        autoprefixer: {}
      }
    }
  },
  sitemap: {
    hostname: "https://www.22squared.com/",
    gzip: true,
    exclude: [],
    trailingSlash: true
  },
  gtm: {
    id: "xxx",
    pageTracking: true
  },
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },
  googleFonts: {
	  families: {
		  'Playfair+Display': true,
		  'Work+Sans': true
	  },
	  display: 'swap'
  }
};
