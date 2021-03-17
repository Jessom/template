/*
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-17 10:22:50
 * @LastEditTime: 2021-03-17 10:23:05
 * @LastEditors: watasi
 */
import Vue from 'vue'

Vue.filter('NumberFormat', function (value) {
  if (!value) {
    return '0'
  }
  const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
  return intPartFormat
})
