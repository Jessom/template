/*
 * @Description: 
 * @Author: watasi
 * @Date: 2021-04-08 17:57:26
 * @LastEditTime: 2021-04-09 16:52:16
 * @LastEditors: watasi
 */
import { mapGetters } from 'vuex'

const mixin = {
  computed: {
    ...mapGetters({
      isMobile: 'app/isMobile',
      isDesktop: 'app/isDesktop',
      isTablet: 'app/isTablet'
    })
  }
}

export { mixin }
