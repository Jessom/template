/*
 * @Description: 
 * @Author: watasi
 * @Date: 2020-12-16 15:49:15
 * @LastEditTime: 2020-12-16 16:11:14
 * @LastEditors: watasi
 */
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    if(process.client) {
      Nprogress.start();
    }
    next()
  });

  app.router.afterEach(() => {
    if(process.client) {
      Nprogress.done()
    }
  });
}
// Vue.prototype.$Nprogress = Nprogress
