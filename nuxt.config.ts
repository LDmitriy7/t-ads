// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {rel: 'manifest', href: '/manifest.json'},
        {rel: 'icon', href: '/favicon.png'},
      ],
      meta: [
        {name: 'viewport', content: 'width=device-width, user-scalable=no'},
      ],
    }
  }
})
