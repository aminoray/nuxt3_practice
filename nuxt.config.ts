import { NuxtConfig } from '@nuxt/schema';

interface MyNuxtConfig extends NuxtConfig {
  server?: {
    port: number;
  };
}

const config: MyNuxtConfig = {
  server: {
    port: 3030,
  },
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
      title: 'Nuxt.js & Vite.js & TypeScript Template',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'copyright',
          content: 'Ray. All Rights Reserved.',
        },
        {
          hid: 'viewport',
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'サイトの説明が入ります。',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Comfortaa&display=swap',
        },
      ],
    },
  },
  components: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/app.scss";',
        },
      },
    },
  },
  imports: {
    dirs: ['composables', 'composables/*/*.{ts,js,mjs,mts}'],
  },
};
export default config;
