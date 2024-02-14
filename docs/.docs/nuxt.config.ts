export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  hooks: {
    'components:extend': (components) => {
      const globals = components.filter((c) => ['UButton', 'UIcon'].includes(c.pascalName))

      for (const c of globals) { c.global = true }
    }
  }
})
