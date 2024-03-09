import process from 'node:process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    join(currentDir, './assets/styles/reset.scss'),
  ],
  modules: [
    // UI & Style
    (!process.env.BASE_DISABLE_ANTDV || undefined) && '@ant-design-vue/nuxt',
    (!process.env.BASE_DISABLE_TAILWINDCSS || undefined) && '@nuxtjs/tailwindcss',
    (!process.env.BASE_DISABLE_COLORMODE || undefined) && '@nuxtjs/color-mode',
    (!process.env.BASE_DISABLE_ICON || undefined) && 'nuxt-icon',

    // State management
    (!process.env.BASE_DISABLE_PINIA || undefined) && '@pinia/nuxt',
    (!process.env.BASE_DISABLE_PINIAPERSISTEDSTATE || undefined) && '@pinia-plugin-persistedstate/nuxt',
  ],
  antd: {
    extractStyle: true,
  },
  vite: {
    resolve: {
      alias: {
        'ant-design-vue/dist': 'ant-design-vue/dist',
        'ant-design-vue/es': 'ant-design-vue/es',
        'ant-design-vue/lib': 'ant-design-vue/es',
        'ant-design-vue': 'ant-design-vue/es',
      }
    }
  }
})
