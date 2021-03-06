/*
 * @Description: 
 * @Author: watasi
 * @Date: 2021-04-08 18:08:49
 * @LastEditTime: 2021-04-09 16:22:21
 * @LastEditors: watasi
 */
import enquireJs from 'enquire.js'


const deviceEnquire = function (callback) {
  const matchDesktop = {
    match: () => {
      callback && callback('desktop')
    }
  }

  const matchLablet = {
    match: () => {
      callback && callback('tablet')
    }
  }

  const matchMobile = {
    match: () => {
      callback && callback('mobile')
    }
  }

  // screen and (max-width: 1087.99px)
  enquireJs
    .register('screen and (max-width: 576px)', matchMobile)
    .register('screen and (min-width: 576px) and (max-width: 1199px)', matchLablet)
    .register('screen and (min-width: 1200px)', matchDesktop)
}

export default ({ app }) => {
  deviceEnquire(deviceType => {
    switch (deviceType) {
      case 'desktop':
        app.store.dispatch('app/ToggleDevice', 'desktop')
        app.store.dispatch('app/ToggleCollapsed', false)
        break
      case 'tablet':
        app.store.dispatch('app/ToggleDevice', 'tablet')
        app.store.dispatch('app/ToggleCollapsed', true)
        break
      case 'mobile':
      default:
        app.store.dispatch('app/ToggleDevice', 'mobile')
        app.store.dispatch('app/ToggleCollapsed', false)
        break
    }
  })
}
