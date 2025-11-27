export default defineNuxtConfig({
  routeRules: {
  },
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  runtimeConfig: {
    private: {
      externalApiUrl: "https://main-domian.com/api/"
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {}
      }
    }
  },
  experimental: {
    asyncContext: true
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'ru',
    langDir: 'locales/',
    locales: [
      { code: 'ru', name: 'Russian', file: 'ru.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    strategy: 'no_prefix'
  }
})