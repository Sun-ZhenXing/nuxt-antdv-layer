# Nuxt 3 Ant Design Vue Layer

[![npm](https://img.shields.io/npm/v/@alexsun-top/nuxt-antdv-layer?style=flat-square)](https://www.npmjs.com/package/@alexsun-top/nuxt-antdv-layer)

Ant Design Vue preset layer for Nuxt 3.

> [!WARNING]
> Still in development, not ready for production.

## Usage

Creating a new Nuxt project:

```bash
pnpm dlx nuxi@latest init $YOUR_PROJECT_NAME
```

Add `@alexsun-top/nuxt-antdv-layer` to your project:

```bash
pnpm add -D @alexsun-top/nuxt-antdv-layer
```

Add the layer to your Nuxt project:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  // ...
  extends: [
    '@alexsun-top/nuxt-antdv-layer',
  ],
})
```

## Configuration

You can disable some of the dependencies by setting the following environment variables:

| Environment Variable               | Package                             |
| ---------------------------------- | ----------------------------------- |
| `BASE_DISABLE_ANTDV`               | `@ant-design-vue/nuxt`              |
| `BASE_DISABLE_TAILWINDCSS`         | `@nuxtjs/tailwindcss`               |
| `BASE_DISABLE_COLORMODE`           | `@nuxtjs/color-mode`                |
| `BASE_DISABLE_ICON`                | `nuxt-icon`                         |
| `BASE_DISABLE_PINIA`               | `@pinia/nuxt`                       |
| `BASE_DISABLE_PINIAPERSISTEDSTATE` | `@pinia-plugin-persistedstate/nuxt` |

## License

[MIT](./LICENSE).
