module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Javier Ortiz Saorin - Software Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal page of Javier Ortiz Saorin, software engineer' },
      { name: 'keywords', content: 'freelance, software engineer, software developer, e-commerce, commercetools, javascript, node.js, vue.js, microservices, aws, kubernetes' },
      { name: 'author', content: 'Javier Ortiz Saorin <javier@orsaorin.com>' },
      { name: 'name', content: 'orsaorin' },
      { name: 'og:title', content: 'orsaorin' },
      { name: 'og:description', content: 'Personal page of Javier Ortiz Saorin, software engineer' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:400,300,500,700' },
      { rel: 'stylesheet', media: 'screen', href: '/bootstrap/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/animate.css' },
      { rel: 'stylesheet', href: '/css/magnific-popup.css' },
      { rel: 'stylesheet', media: 'screen', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/responsive.css' },
    ],
    script: [
      { src: '/js/jquery.js', body: true },
      { src: '/bootstrap/js/bootstrap.min.js', body: true },
      { src: '/js/jquery.stellar.min.js', body: true },
      { src: '/js/jquery.sticky.js', body: true },
      { src: '/js/wow.min.js', body: true },
      { src: '/js/jquery.countTo.js', body: true },
      { src: '/js/jquery.inview.min.js', body: true },
      { src: '/js/jquery.easypiechart.js', body: true },
      { src: '/js/jquery.shuffle.min.js', body: true },
      { src: '/js/jquery.magnific-popup.min.js', body: true },
      { src: '/js/scripts.js', body: true },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~/plugins/vue-fontawesome'],
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-123955428-1'
    }]
  ],
}

