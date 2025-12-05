export default defineNuxtConfig({
  ssr: true,
  routeRules: {
  },
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      city: process.env.NUXT_PUBLIC_CITY || '',
      lang: process.env.NUXT_PUBLIC_LANG || '',
    },
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
    defaultLocale: process.env.NUXT_PUBLIC_LANG === 'en' ? 'en' : 'ru',
    langDir: 'locales/',
    // locales: [
    //   { code: 'ru', name: 'Russian', file: 'ru.json' },
    //   { code: 'en', name: 'English', file: 'en.json' }
    // ],
    locales: process.env.NUXT_PUBLIC_LANG === 'en' ? [{ code: 'en', name: 'English', file: 'en.json' }] : [{ code: 'ru', name: 'Russian', file: 'ru.json' }],
    strategy: 'no_prefix',
    detectBrowserLanguage: false
  },
  nitro: {
    output: {
      dir: `./builds/${process.env.NUXT_PUBLIC_CITY || 'default-city'}-${process.env.NUXT_PUBLIC_LANG || 'default-lang'}`
    }
  },

  // Для английской версии добавляем префикс
  app: {
    baseURL: process.env.NUXT_PUBLIC_LANG === 'en' ? '/en/' : '/',
    buildAssetsDir: '/_nuxt/'  // статика всегда в /_nuxt/
    // buildAssetsDir: process.env.NUXT_PUBLIC_LANG === 'en' ? '/en/_nuxt/' : '/_nuxt/'
  }
})