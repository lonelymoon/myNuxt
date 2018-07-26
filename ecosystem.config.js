module.exports = {
  apps: [{
    name: 'myNuxt-web',
    script: 'build/main.js',
    watch: [
      '.nuxt/dist'
    ],
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}