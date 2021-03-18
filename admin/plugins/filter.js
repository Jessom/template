/*
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-17 10:22:50
 * @LastEditTime: 2021-03-18 17:42:49
 * @LastEditors: watasi
 */
import Vue from 'vue'

Vue.filter('formatMoney', function (value) {
  if (!value) {
    return '0'
  }
  let str = value.toString()
  const reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
  return str.replace(reg, "$1,")
})

Vue.filter('formatTime', function(value, format) {
  if(!value)
    return ''
  
  format = format || 'yyyy-MM-dd hh:mm:ss';
  let date = new Date(value);
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let dt = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let key in dt) {
    if (new RegExp(`(${key})`).test(format)) {
      let str = dt[key] + ''
      format = format.replace(RegExp.$1,
        (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length)
      );
    }
  }
  return format;
})
