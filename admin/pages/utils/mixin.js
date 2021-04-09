/*
 * @Description: 
 * @Author: watasi
 * @Date: 2021-04-08 17:57:26
 * @LastEditTime: 2021-04-08 18:30:20
 * @LastEditors: watasi
 */
import { mapState } from 'vuex'

// const mixinsComputed = Vue.config.optionMergeStrategies.computed
// const mixinsMethods = Vue.config.optionMergeStrategies.methods

const mixin = {
  computed: {
    ...mapState({
      fixSiderbar: state => state.app.fixSiderbar,
      fixSidebar: state => state.app.fixSiderbar,
    })
  }
}

const mixinDevice = {
  computed: {
    ...mapState({
      device: state => state.app.device
    })
  },
  methods: {
    isMobile () {
      return this.device === 'mobile'
    },
    isDesktop () {
      return this.device === 'desktop'
    },
    isTablet () {
      return this.device === 'tablet'
    }
  }
}

export { mixin, mixinDevice }
