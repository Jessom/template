/*
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-08 15:50:54
 * @LastEditTime: 2021-03-19 13:50:44
 * @LastEditors: watasi
 */
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/cropperjs/1.5.11/cropper.min.css' }
    ],
    script: [
      { src: 'https://cdn.bootcdn.net/ajax/libs/echarts/4.8.0/echarts.min.js' },
      { src: '/js/echarts.theme.js' },
      { src: 'https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.20/lodash.min.js' },
      { src: 'https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.1/moment.min.js' },
      { src: 'https://cdn.bootcdn.net/ajax/libs/cropperjs/1.5.11/cropper.min.js' },
      { src: 'https://cdn.bootcdn.net/ajax/libs/tinymce/5.7.1/tinymce.min.js' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/less/variable.less',
    '@/assets/less/color.less',
    '@/assets/less/common.less',
    '@/assets/less/style.less',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/nprogress',
    '@/plugins/axios',
    '@/plugins/vuels',
    '@/plugins/filter',
    '@/plugins/component',
    { src: '@/plugins/storage', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#FF0000',
            'link-color': '#333333'
          }
        }
      }
    }
  },
  server: {
    port: 8000
  },
  proxy: {
    '/admin/': {
      target: 'http://jadmin.3qiy.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/admin'
      }
    }
  }
}
