/*
 * @Description: 
 * @Author: watasi
 * @Date: 2021-04-08 17:36:25
 * @LastEditTime: 2021-04-09 16:19:56
 * @LastEditors: watasi
 */
const app = {
  state: {
    device: 'desktop',
    collapsed: false
  },
  mutations: {
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },

    TOGGLE_COLLAPSED: (state, collapsed) => {
      state.collapsed = collapsed
    }
  },
  actions: {
    ToggleDevice ({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },

    ToggleCollapsed ({ commit }, collapsed) {
      commit('TOGGLE_COLLAPSED', collapsed)
    }
  },
  getters: {
    isMobile: state => state.device === 'mobile',

    isDesktop: state => state.device === 'desktop',

    isTablet: state => state.device === 'tablet',
  }
}

export default app
