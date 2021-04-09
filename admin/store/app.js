/*
 * @Description: 
 * @Author: watasi
 * @Date: 2021-04-08 17:36:25
 * @LastEditTime: 2021-04-08 18:39:39
 * @LastEditors: watasi
 */
const app = {
  state: {
    device: 'desktop',
    fixSiderbar: true
  },
  mutations: {
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
  },
  actions: {
    ToggleDevice ({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
  },
  getters: {
    isMobile: state => state.device === 'mobile',

    isDesktop: state => state.device === 'desktop',

    isTablet: state => state.device === 'tablet',
  }
}

export default app
