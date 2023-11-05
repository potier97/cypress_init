import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: "a2h2gz",
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  // component: {
  //   devServer: {
  //     framework: 'next',
  //     bundler: 'webpack',
  //   },
  // },
})
